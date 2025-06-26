import {Link} from "react-router";
import {useCasinoStore} from "../../store/store.ts";

export default function Header () {
    const user = useCasinoStore((s) => s.userInfo)
    return (
        <header>
            <Link to={'/'}><h1>Casino App</h1></Link>
            <nav>
                <ul>
                    {
                        !user ?
                            <>
                                <li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/register'}>Register</Link></li>
                            </>
                        :
                            <>
                                <Link to={'/dashboard'}>Dashboard</Link>
                                <Link to={'/spin'}>Spin</Link>
                            </>
                    }
                    <li><Link to={'/'}>About Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}