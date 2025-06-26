import LoginForm from "./components/loginForm.tsx";
import useLogin from "./hooks/useLogin.ts";

export default function LoginFeature () {
    return (
        <LoginForm onSubmit={useLogin}/>
    )
}