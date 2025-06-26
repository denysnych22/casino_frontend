import {type FormEvent} from "react";
import {useCasinoStore} from "../../store/store.ts";
import {fetchData} from "../../services/api.ts";

export default function SpinPage () {
    const points = useCasinoStore((state) => state.userInfo?.points)
    const changePoints = useCasinoStore((state) => state.updatePoints)

    async function submitSpin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await fetchData('http://localhost:3000/play/spin', {
            access_token: localStorage.getItem("token"),
        })
        if(!response.ok){
            alert(response.statusText + response.status);

            return
        }
        const responseData = await response.json()
        changePoints(responseData);
    }

    return (
        <>
            <form onSubmit={submitSpin}>
                {points}
                <button>Spin!</button>
            </form>
        </>
    )
}