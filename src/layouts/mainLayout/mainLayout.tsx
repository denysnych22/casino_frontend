import Header from "../header/header";
import {Outlet} from "react-router";

export default function MainLayout () {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow w-full px-4 sm:px-6 md:px-8 py-8 md:py-12 animate-fadeIn flex items-center justify-center" style={{ animationDelay: '0.1s' }}>
                <div className="w-full">
                    <Outlet/>
                </div>
            </main>
            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-6 md:py-8 text-sm shadow-inner animate-fadeIn w-full" style={{ animationDelay: '0.2s' }}>
                <div className="w-full px-4 sm:px-6 md:px-8">
                    <div className="w-full">
                        <p className="mb-2">© {new Date().getFullYear()} Casino App - All rights reserved</p>
                        <p className="text-gray-400 text-xs">Enjoy responsibly 🎮</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
