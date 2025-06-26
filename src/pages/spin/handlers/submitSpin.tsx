import type {FormEvent} from "react";
import {fetchData} from "../../../services/api.ts";
import { showError } from "../../../utils/toast.ts";

interface IsubmitSpinProps {
    e: FormEvent<HTMLFormElement>,
    changePoints: (points: number) => void
}

export default async function submitSpin({e, changePoints}: IsubmitSpinProps) {
    e.preventDefault();
    const response = await fetchData('http://localhost:3000/play/spin', {
        access_token: localStorage.getItem("token"),
    })
    if(!response.ok){
        showError(response.statusText + ' ' + response.status);
        return null;
    }
    const responseData = await response.json()
    changePoints(responseData.points);
    console.log(responseData.slot)
    return responseData.slot;
}
