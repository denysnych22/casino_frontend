import {useCasinoStore} from "../../store/store.ts";
import {Navigate, Outlet} from "react-router";

export default function UnregisteredLayout () {
    const user = useCasinoStore(state => state.userInfo)

    if (user) {
        return <Navigate to="/spin" replace />
    }

    return <Outlet/>
}