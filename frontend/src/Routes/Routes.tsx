import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Dashboard } from "@/pages/Dashboard";
import Profile from "../pages/Profile";

import AboutPage from "@/pages/Aboutus";
import ProductPage from "@/pages/ProductsPage";
import Seller from "@/pages/Seller";
import { TestCart } from "@/components/features/mainCart";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/cart" element={<TestCart />} />

    </Routes>
  )
}
