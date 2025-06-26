import type {FormEvent} from "react";
import useSubmitForm from "../../../hooks/useSubmitForm/useSubmitForm.ts";

export default function useLogin (e: FormEvent<HTMLFormElement>) {
    return useSubmitForm(e, 'http://localhost:3000/auth/login')
}