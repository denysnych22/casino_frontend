import type {FormEvent} from "react";

export default function LoginForm ({onSubmit}: {onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>}) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Login to Your Account</h2>

            <form onSubmit={onSubmit} className="space-y-6">
                <div>
                    <label 
                        htmlFor="email" 
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email Address
                    </label>
                    <input 
                        name="email" 
                        id="email" 
                        type="email" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label 
                        htmlFor="password" 
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>
                    <input 
                        name="password" 
                        id="password" 
                        type="password" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="••••••••"
                    />
                </div>

                <div>
                    <button 
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}
