import {useCasinoStore} from "../../store/store.ts";
import {type ChangeEvent, useState} from "react";
import {topUpHandler} from "./utils/topUpHandler.ts";
import LogoutFeature from "../../features/logoutFeature/logoutFeature.tsx";

export default function DashboardPage () {
    const user = useCasinoStore((state) => state.userInfo)
    const updatePoints = useCasinoStore((state) => state.updatePoints)

    const [topUpValue, setTopUp] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTopUp(+e.target.value)
    }

    return (
        <div className="animate-fadeIn">
            <div className="card p-6 sm:p-8 md:p-10 bg-white bg-opacity-90 backdrop-blur-sm my-4 md:my-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6 md:mb-8 animate-fadeIn">
                    Hello, {user?.name}
                </h1>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 sm:p-5 md:p-6 rounded-lg mb-8 md:mb-10 shadow-md animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    <p className="text-lg sm:text-xl">
                        You now have <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{user?.points}</span> points
                    </p>
                </div>

                <form 
                    className="mb-8 md:mb-10 bg-gray-50 p-5 sm:p-6 md:p-8 rounded-lg border border-gray-200 shadow-md animate-fadeIn"
                    style={{ animationDelay: '0.2s' }}
                    onSubmit={(e) => topUpHandler(e, {
                        topUpValue,
                        setTopUp,
                        updatePoints
                    })}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        Add More Points
                    </h2>
                    <div className="mb-6 md:mb-8">
                        <label 
                            htmlFor="points_to_add" 
                            className="block text-gray-700 mb-2 md:mb-3 font-medium"
                        >
                            Points to add:
                        </label>
                        <input
                            value={topUpValue}
                            onInput={handleChange}
                            id={'points_to_add'}
                            name={'points_to_add'}
                            type="number"
                            step={10}
                            min={0}
                            className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all"
                        />
                    </div>
                    <div className="text-center sm:text-left">
                        <button className="btn btn-primary px-8 sm:px-10 md:px-12">
                            Top up
                        </button>
                    </div>
                </form>

                <div className="border-t pt-6 md:pt-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <div className="flex justify-center">
                        <LogoutFeature/>
                    </div>
                </div>
            </div>
        </div>
    )
}
