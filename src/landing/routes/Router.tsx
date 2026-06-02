import { Navigate, Route, Routes } from "react-router-dom"

import { Landing } from "../Landing"

export const Router = () => {
    return (
        <Routes>
            <Route path="home" element={<Landing/>} />
            <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
    )
}