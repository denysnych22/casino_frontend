import { useCasinoStore } from "../../store/store.ts";
import submitSpin from "./handlers/submitSpin.tsx";
import { useState, useEffect, useRef } from "react";
import { showSpinWin, showSpinLoss } from "../../utils/toast.ts";
import textToEmoji from "./utils/textToEmoji.ts";

export default function SpinPage() {
    const points = useCasinoStore((state) => state.userInfo?.points);
    const changePoints = useCasinoStore((state) => state.updatePoints);
    const [isSpinning, setIsSpinning] = useState(false);
    const [slotResults, setSlotResults] = useState<string[] | null>(null);
    const [displayResults, setDisplayResults] = useState<(string | null)[]>([null, null, null]);
    const [hasWon, setHasWon] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const prevPointsRef = useRef(points);

    useEffect(() => {
        if (isSpinning) {
            setDisplayResults([null, null, null]);
            setHasWon(false);
            setShowResult(false);
            prevPointsRef.current = points;
        }
    }, [isSpinning, points]);

    useEffect(() => {
        if (!isSpinning && slotResults && points !== undefined && prevPointsRef.current !== undefined) {
            const hasPlayerWon = points > prevPointsRef.current;
            setHasWon(hasPlayerWon);
            if (displayResults.every((r) => r !== null)) {
                setTimeout(() => {
                    setShowResult(true);
                    if (hasPlayerWon) {
                        const pointsWon = points - prevPointsRef.current;
                        showSpinWin(pointsWon);
                    } else {
                        showSpinLoss();
                    }
                }, 500);
            }
        }
    }, [isSpinning, slotResults, points, displayResults]);

    useEffect(() => {
        if (!slotResults || !isSpinning) return;
        const timer1 = setTimeout(() => {
            setDisplayResults((prev) => [textToEmoji(slotResults[0]), prev[1], prev[2]]);
        }, 1000);
        const timer2 = setTimeout(() => {
            setDisplayResults((prev) => [prev[0], textToEmoji(slotResults[1]), prev[2]]);
        }, 2000);
        const timer3 = setTimeout(() => {
            setDisplayResults((prev) => [prev[0], prev[1], textToEmoji(slotResults[2])]);
            setIsSpinning(false);
        }, 3000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [slotResults, isSpinning]);

    const handleSubmit = async (e: React.FormEvent) => {
        setIsSpinning(true);
        setSlotResults(null);
        const results = await submitSpin({ e, changePoints });
        if (results) {
            setSlotResults(results);
        } else {
            setIsSpinning(false);
        }
    };

    return (
        <div className="w-full text-center animate-fadeIn">
            <div className="card p-6 sm:p-8 md:p-10 bg-white bg-opacity-90 backdrop-blur-sm my-4 md:my-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6 md:mb-8 animate-fadeIn">
                    Spin to Win!
                </h1>
                <div className="mb-8 md:mb-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full shadow-md">
                        <p className="text-xl">
                            Your balance: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{!isSpinning ? points : '???'}</span> points
                        </p>
                    </div>
                </div>
                {showResult && (
                    <div className={`mb-6 md:mb-8 animate-scaleIn ${hasWon ? 'text-green-500' : 'text-red-500'}`}>
                        <h2 className="text-2xl font-bold">
                            {hasWon ? '🎉 You Won! 🎉' : '😢 Try Again! 😢'}
                        </h2>
                    </div>
                )}
                <div className="mb-10 md:mb-12 relative mx-auto w-full">
                    <div className="w-full h-8 md:h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-xl mb-1 flex items-center justify-center">
                        <div className="w-20 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-6 md:p-8 rounded-xl shadow-2xl border-4 border-gray-600">
                        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
                            {[0, 1, 2].map((index) => (
                                <div key={index} className={`w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-lg ${hasWon && showResult ? 'animate-glow' : ''} bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-inner`}>
                                    <div className={`w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-lg bg-white flex items-center justify-center ${isSpinning && !displayResults[index] ? 'animate-spin' : ''}`}>
                                        <div className={`text-4xl sm:text-5xl ${displayResults[index] && !isSpinning ? 'animate-scaleIn' : ''}`} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                                            {displayResults[index] || '🎰'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-1/4 -right-8 sm:-right-10 md:-right-12 transform">
                            <div className="w-6 h-20 bg-gradient-to-b from-red-500 to-red-700 rounded-t-full rounded-b-full shadow-lg"></div>
                            <div className="w-10 h-10 rounded-full bg-red-600 border-4 border-red-700 -mt-4 -ml-2 shadow-lg"></div>
                        </div>
                    </div>
                    <div className="w-full h-10 md:h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-b-xl mt-1 flex items-center justify-center">
                        <div className="w-32 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 md:mt-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <button
                        className={`btn btn-primary text-xl py-4 px-12 sm:px-16 md:px-20 rounded-full ${!isSpinning && hasWon && showResult ? 'animate-bounce-slow' : ''}`}
                        disabled={isSpinning || !points || points <= 0}
                    >
                        {isSpinning ? 'Spinning...' : 'SPIN!'}
                    </button>
                    <p className="mt-4 text-gray-600 text-sm">Each spin costs 10 points</p>
                </form>
            </div>
        </div>
    );
}
