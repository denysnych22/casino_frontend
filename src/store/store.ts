import { create } from 'zustand'
import getUserInfo from './getUserInfo.ts'

interface IUserInfo {
    name: string
    email: string
    points: number
}

type CasinoStore = {
    userInfo: IUserInfo | null
    loadUserInfo: () => Promise<void>
    updatePoints: (newPoints: number) => void
}

export const useCasinoStore = create<CasinoStore>()((set, get) => ({
    userInfo: null,

    loadUserInfo: async () => {
        const token = localStorage.getItem('token')
        if (token !== null) {
            const user = await getUserInfo(token)
            if (!user) {
                localStorage.removeItem('token')
                return
            }
            set({ userInfo: user })
            console.log(get().userInfo)
        }
    },

    updatePoints: (newPoints: number) => {
        const user = get().userInfo
        if (user) {
            set({
                userInfo: {
                    ...user,
                    points: newPoints,
                },
            })
        }
    },
}))

await useCasinoStore.getState().loadUserInfo()
