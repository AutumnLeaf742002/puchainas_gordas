import { Routes, Route, Navigate } from "react-router-dom"

import { Router as LandingRouter } from "../landing/routes"

export const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/*" element={<LandingRouter />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}