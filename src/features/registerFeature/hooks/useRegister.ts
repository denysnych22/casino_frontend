import type {FormEvent} from "react";
import useSubmitUser from "../../../hooks/useSubmitUser/useSubmitUser.ts";

export default function useRegister (e: FormEvent<HTMLFormElement>) {
    return useSubmitUser(e, 'http://localhost:3000/user/register');
}