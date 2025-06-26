import convertFormData from "../../utils/convertFormData.ts";
import checkFormValue from "../../utils/checkFormData.ts";
import {fetchData} from "../../services/api.ts";
import type {FormEvent} from "react";
import { showFormValidationError, showLoginSuccess, showRegisterSuccess, showError } from "../../utils/toast.ts";

export default async function useSubmitUser(e: FormEvent<HTMLFormElement>, url: string) {
    e.preventDefault()

    const formValue = convertFormData(e.target as HTMLFormElement)

    if (!checkFormValue(formValue)) {
        showFormValidationError()
        return
    }

    const response = await fetchData(url, formValue)

    if (!response.ok) {
        showError(response.statusText + ' ' + response.status)
        return
    }

    const responseBody = await response.json()
    localStorage.setItem('token', responseBody.access_token)

    // Show success message based on the URL (login or register)
    if (url.includes('register')) {
        showRegisterSuccess()
    } else if (url.includes('login')) {
        showLoginSuccess()
    }

    window.location.reload()
}
