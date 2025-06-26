export default function checkFormValue (formValue: any) {
    for (const el of Object.values(formValue))  {
        if (el.toString().length === 0) {
            return false
        }
    }

    return true
}