import {useCasinoStore} from "../../../store/store.ts";
import {Navigate, Outlet} from "react-router";

export default function RegisteredLayout () {
    const user = useCasinoStore(state => state.userInfo)

    if (!user) {
        return <Navigate to="/register" replace />
    }

    return <Outlet/>
}