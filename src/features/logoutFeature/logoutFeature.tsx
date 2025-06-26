import useLogout from "./hooks/useLogout.ts";

export default function LogoutFeature () {
    return (
        <button 
            onClick={useLogout}
            className="border border-red-300 text-red-600 hover:bg-red-50 font-medium py-2 px-6 rounded-md transition-colors flex items-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Log out
        </button>
    )
}
