import {useCasinoStore} from "../../store/store.ts";
import {type ChangeEvent, type FormEvent, useState} from "react";
import convertFormData from "../../utils/convertFormData.ts";
import {fetchData} from "../../services/api.ts";

export default function DashboardPage () {
    const user = useCasinoStore((state) => state.userInfo)
    const updatePoints = useCasinoStore((state) => state.updatePoints)

    const [topUpValue, setTopUp] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTopUp(val => val = +e.target.value)
    }

    async function topUp(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (topUpValue === 0) {
            alert('Top Up is empty')
            return
        }

        const bodyToSend = {
            points_to_add: topUpValue,
            access_token: localStorage.getItem('token'),
        }


        const response = await fetchData("http://localhost:3000/user/add-points", bodyToSend)

        if (!response.ok) {
            alert(response.status + " " + response.statusText)
            return
        }

        const newPoints = await response.json()

        setTopUp(val => val = 0)
        updatePoints(newPoints)
    }

    return (
        <>
            <h1>Hello, {user?.name}</h1>
            <p>You now have {user?.points} points</p>
            <form onSubmit={topUp}>
                <label htmlFor="points_to_add">Points to add:</label>
                <input
                    value={topUpValue}
                    onInput={handleChange}
                    id={'points_to_add'}
                    name={'points_to_add'}
                    type="number"
                    step={10}
                />
                <button>Top up</button>
            </form>
            <button onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
            }}>Log Out</button>
        </>
    )
}