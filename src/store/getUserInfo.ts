import {fetchData} from "../services/api.ts";

export default async function getUserInfo (token: string) {
    const response = await fetchData('http://localhost:3000/auth', {access_token: token})
    if (!response.ok) {
        return null
    }
    const userInfo = await response.json()
    return {
        name: userInfo.name,
        email: userInfo.email,
        points: userInfo.points,
    }
}