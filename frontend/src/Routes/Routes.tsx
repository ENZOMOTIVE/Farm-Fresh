import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}
