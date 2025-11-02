import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dessertsHero from "/new_brand_logo.png";
import brandLogo from "/new_brand_logo.png";
import { Croissant, Sparkles, Heart } from "lucide-react";

const Login = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-green-medium/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-primary/25 to-green-light/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-green-medium/20 to-secondary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-medium/20 rounded-3xl blur-2xl" />
              <img
                src={dessertsHero}
                alt="Exquisite French and Indian Desserts"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-green-medium to-green-dark bg-clip-text text-transparent mb-2">
                Delicieux Mithai
              </h2>
              <p className="text-muted-foreground text-lg italic">
                Where French elegance meets Indian tradition
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Login Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <motion.div
              className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-green-light"
              whileHover={{ boxShadow: "0 25px 60px -15px rgba(34, 197, 94, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative Corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-light/30 to-transparent rounded-tr-full" />

              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-8"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(34, 197, 94, 0.3)",
                        "0 0 40px rgba(34, 197, 94, 0.5)",
                        "0 0 20px rgba(34, 197, 94, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-full"
                  />
                  <img
                    src={brandLogo}
                    alt="Delicieux Mithai Logo"
                    className="relative w-28 h-28 rounded-full border-4 border-primary/20 shadow-lg object-cover bg-white"
                  />
                </div>
              </motion.div>

              {/* Welcome Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-10"
              >
                <h1 className="text-4xl font-bold text-foreground mb-3">
                  {t("WelcomeBack")}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t("SignInToExplore")}
                </p>
              </motion.div>

              {/* Google Button Only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center mb-8"
              >
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    if (credentialResponse.credential) {
                      const success = await loginWithGoogle(
                        credentialResponse.credential
                      );
                      if (success) navigate("/");
                    }
                  }}
                  onError={() => console.error("Google login failed")}
                />
              </motion.div>

              {/* Decorative Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50"
              >
                {[
                  { icon: Croissant, label: "French Pastries", color: "text-primary" },
                  { icon: Sparkles, label: "Indian Sweets", color: "text-green-medium" },
                  { icon: Heart, label: "Premium Quality", color: "text-green-dark" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center group cursor-default"
                  >
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-light/50 mb-2 ${item.color} group-hover:bg-primary/10 transition-colors`}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center text-xs text-muted-foreground mt-8"
              >
                © {new Date().getFullYear()} Delicieux Mithai. All rights reserved.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Mobile Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:hidden text-center -mt-6"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-green-medium to-green-dark bg-clip-text text-transparent mb-2">
              Delicieux Mithai
            </h2>
            <p className="text-muted-foreground italic">
              French elegance meets Indian tradition
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Icons */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 opacity-10 pointer-events-none hidden lg:block"
      >
        <Croissant className="w-16 h-16 text-primary" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-20 opacity-10 pointer-events-none hidden lg:block"
      >
        <Sparkles className="w-16 h-16 text-green-medium" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
};

export default Login;
