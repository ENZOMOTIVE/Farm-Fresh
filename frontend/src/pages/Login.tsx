"use client"

import { motion } from "framer-motion"
import { GoogleLogin } from "@react-oauth/google"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import dessertsHero from "/bg-picdrchang.png"
import brandLogo from "/DrChang.png"
import { Croissant, Sparkles, Heart, ArrowRight, Star } from "lucide-react"

const Login = () => {
  const { loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-emerald-600">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.12)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.3)_35px,rgba(255,255,255,0.3)_70px)]" />
      </div>

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-32 right-[15%] w-40 h-40 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/2 right-[8%] w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 80px rgba(255, 255, 255, 0.4)",
                    "0 0 120px rgba(255, 255, 255, 0.6)",
                    "0 0 80px rgba(255, 255, 255, 0.4)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-white/20 rounded-[2rem] blur-3xl"
              />
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl shadow-black/30">
                <img
                  src={dessertsHero || "/placeholder.svg"}
                  alt="Exquisite French and Indian Desserts"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {[
                { icon: Croissant, label: "French Pastries" },
                { icon: Sparkles, label: "Cakes" },
                { icon: Heart, label: "Premium Quality" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all cursor-default border-2 border-white/50"
                >
                  <item.icon className="w-8 h-8 text-green-500 mb-2" strokeWidth={2.5} />
                  <p className="text-sm font-bold text-gray-900">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <motion.div
              className="relative bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-black/20 border-4 border-white/80"
              whileHover={{
                boxShadow: "0 40px 90px -20px rgba(0, 0, 0, 0.3)",
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500 to-transparent rounded-tl-[2.5rem] opacity-20" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-500 to-transparent rounded-br-[2.5rem] opacity-20" />

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                className="flex justify-center mb-10"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -inset-4 rounded-full bg-green-500"
                  />
                  <div className="relative w-36 h-36 rounded-full border-4 border-green-500 shadow-2xl overflow-hidden bg-white">
                    <img
                      src={brandLogo }
                      alt="Delicieux Mithai Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-2 -right-2"
                  >
                    <Star className="w-6 h-6 text-green-500 fill-green-500" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -bottom-2 -left-2"
                  >
                    <Star className="w-5 h-5 text-green-500 fill-green-500" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 bg-clip-text text-transparent mb-4">
                  {t("WelcomeBack")}
                </h1>
                <p className="text-gray-700 text-lg font-medium flex items-center justify-center gap-2">
                  {t("SignInToExplore")}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-5 h-5 text-green-500" />
                  </motion.span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-10"
              >
                <div className="flex justify-center p-8 ">
                  <GoogleLogin
                    onSuccess={async (credentialResponse) => {
                      if (credentialResponse.credential) {
                        const success = await loginWithGoogle(credentialResponse.credential)
                        if (success) navigate("/")
                      }
                    }}
                    onError={() => console.error("Google login failed")}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center pt-8 border-t-2 border-green-500/30"
              >
                <h2 className="text-3xl font-black bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">
                      Dr. Chang Healthy Farm
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center text-xs text-gray-500 mt-8 font-medium"
              >
                © {new Date().getFullYear()} Dr Chang Healthy Farm. All rights reserved.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:hidden text-center -mt-6"
          >
            <h2 className="text-4xl font-black text-white mb-3 drop-shadow-lg">Dr Chang Healthy Farm</h2>
            <p className="text-white/90 font-semibold text-lg drop-shadow">Fresh and Baked</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-24 right-24 opacity-20 pointer-events-none hidden lg:block"
      >
        <Croissant className="w-32 h-32 text-white" strokeWidth={2} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 35, 0], rotate: [0, -15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-24 opacity-20 pointer-events-none hidden lg:block"
      >
        <Sparkles className="w-32 h-32 text-white" strokeWidth={2} />
      </motion.div>
    </div>
  )
}

export default Login
