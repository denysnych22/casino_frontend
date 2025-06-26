import {Link} from "react-router";
import {useCasinoStore} from "../../store/store.ts";

export default function Header () {
    const user = useCasinoStore((s) => s.userInfo)
    return (
        <header className="bg-gradient-to-r from-purple-800 to-blue-700 text-white shadow-xl animate-fadeIn w-full">
            <div className="w-full px-4 sm:px-6 md:px-8 py-4 md:py-5">
                <div className="w-full flex justify-between items-center">
                    <Link to={'/'} className="text-2xl font-bold hover:text-purple-200 transition-all duration-300 transform hover:scale-105">
                        <h1 className="flex items-center">
                            <span className="mr-3 text-3xl animate-bounce-slow">🎰</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                                Casino App
                            </span>
                        </h1>
                    </Link>
                    <nav>
                        <ul className="flex space-x-4 md:space-x-6">
                            {
                                !user ?
                                    <>
                                        <li className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                                            <Link to={'/login'} className="hover:text-purple-200 transition-all duration-300 font-medium hover:underline">
                                                Login
                                            </Link>
                                        </li>
                                        <li className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                                            <Link to={'/register'} className="btn btn-primary px-5 py-2 rounded-md">
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                :
                                    <>
                                        <li className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                                            <Link to={'/dashboard'} className="hover:text-purple-200 transition-all duration-300 font-medium hover:underline">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                                            <Link to={'/spin'} className="btn btn-primary px-5 py-2 rounded-md">
                                                Spin
                                            </Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
