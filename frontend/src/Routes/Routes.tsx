import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />

    </Routes>
  )
}
