import RegisterForm from "./components/registerForm.tsx";
import useRegister from "./hooks/useRegister.ts";

export default function RegisterFeature () {
    return (
        <RegisterForm onSubmit={useRegister}/>
    )
}