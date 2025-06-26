import type {FormEvent} from "react";

export default function RegisterForm ({onSubmit}: {onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>}) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Create Your Account</h2>

            <form onSubmit={onSubmit} className="space-y-6">
                <div>
                    <label 
                        htmlFor="name" 
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Your Name
                    </label>
                    <input 
                        name="name" 
                        id="name" 
                        type="text" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="John Doe"
                    />
                </div>

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
                    <p className="mt-1 text-sm text-gray-500">Password must be at least 8 characters</p>
                </div>

                <div>
                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    >
                        Create an Account
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    By creating an account, you agree to our Terms of Service and Privacy Policy
                </p>
            </form>
        </div>
    )
}
