import convertFormData from "../../utils/convertFormData.ts";
import checkFormValue from "../../utils/checkFormData.ts";
import {fetchData} from "../../services/api.ts";
import type {FormEvent} from "react";

export default async function useSubmitForm(e: FormEvent<HTMLFormElement>, url: string) {
    e.preventDefault()

    const formValue = convertFormData(e.target as HTMLFormElement)

    if (!checkFormValue(formValue)) {
        alert('All fields are required!')
    }

    const response = await fetchData(url, formValue)

    if (!response.ok) {
        alert(response.statusText + ' ' + response.status)
        return
    }


    const responseBody = await response.json()
    localStorage.setItem('token', responseBody.access_token)

    window.location.reload()
}