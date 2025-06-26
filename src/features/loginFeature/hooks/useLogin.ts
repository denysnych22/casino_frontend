import type {FormEvent} from "react";
import useSubmitUser from "../../../hooks/useSubmitUser/useSubmitUser.ts";


export default function useLogin (e: FormEvent<HTMLFormElement>) {
    return useSubmitUser(e, 'http://localhost:3000/auth/login')
}