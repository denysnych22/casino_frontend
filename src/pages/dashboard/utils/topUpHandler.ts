import type {FormEvent} from "react"
import {fetchData} from "../../../services/api.ts";
import { showTopUpSuccess, showTopUpError } from "../../../utils/toast.ts";

interface TopUpParams {
    topUpValue: number
    setTopUp: React.Dispatch<React.SetStateAction<number>>
    updatePoints: (newPoints: number) => void
}

export async function topUpHandler(
    e: FormEvent<HTMLFormElement>,
    { topUpValue, setTopUp, updatePoints }: TopUpParams
) {
    e.preventDefault()

    if (topUpValue === 0) {
        showTopUpError("Top Up is empty")
        return
    }

    const bodyToSend = {
        points_to_add: topUpValue,
        access_token: localStorage.getItem("token"),
    }

    const response = await fetchData(
        "http://localhost:3000/user/add-points",
        bodyToSend
    )

    if (!response.ok) {
        showTopUpError(`${response.status} ${response.statusText}`)
        return
    }

    const newPoints = await response.json()
    showTopUpSuccess(topUpValue)
    setTopUp(0)
    updatePoints(newPoints)
}
