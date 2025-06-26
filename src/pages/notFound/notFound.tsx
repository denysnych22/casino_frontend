import { Link } from "react-router";

export default function NotFoundPage () {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <div className="mb-8">
                <h1 className="text-9xl font-bold text-purple-600">404</h1>
                <div className="h-2 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto my-6 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 text-lg mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
            </div>

            <Link 
                to="/" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 inline-flex items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return to Home
            </Link>
        </div>
    )
}
