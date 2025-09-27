import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import Profile from "../pages/Profile";
import CartPage from "@/pages/CartPage";
import AboutPage from "@/pages/Aboutus";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />

    </Routes>
  )
}
