import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "./layouts/mainLayout/mainLayout.tsx";
import LoginPage from "./pages/login/login.tsx";
import RegisterPage from "./pages/register/register.tsx";
import SpinPage from "./pages/spin/spin.tsx";
import UnregisteredLayout from "./layouts/routing/unregisteredLayout/unregisteredLayout.tsx";
import RegisteredLayout from "./layouts/routing/registeredLayout/registeredLayout.tsx";
import DashboardPage from "./pages/dashboard/dashboardPage.tsx";
import NotFoundPage from "./pages/notFound/notFound.tsx";
import ToastProvider from './providers/ToastProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path={'/'} element={<App/>}/>
                        <Route element={<UnregisteredLayout/>}>
                            <Route path={'/register'} element={<RegisterPage/>}/>
                            <Route path={'/login'} element={<LoginPage/>}/>
                        </Route>
                        <Route element={<RegisteredLayout/>}>
                            <Route path={'/spin'} element={<SpinPage/>}/>
                            <Route path={'/dashboard'} element={<DashboardPage/>}/>
                        </Route>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ToastProvider>
    </StrictMode>,
)
