export default function convertFormData (target: HTMLFormElement) {
    return Object.fromEntries(new FormData(target))
}