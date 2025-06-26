import { showLogoutSuccess } from "../../../utils/toast.ts";

export default function useLogout() {
    localStorage.removeItem('token');
    showLogoutSuccess();
    window.location.reload();
}
