import type {FormEvent} from "react";
import useSubmitForm from "../../../hooks/useSubmitForm/useSubmitForm.ts";

export default function useRegister (e: FormEvent<HTMLFormElement>) {
    return useSubmitForm(e, 'http://localhost:3000/user/register');
}