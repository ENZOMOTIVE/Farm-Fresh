"use client"

import { useEffect, useState } from "react";
import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./hooks/useCart";
import AppRoutes from "./Routes/Routes";
import PastryLoader from "@/components/common/intro_loader";

function AppContent() {


  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

      // Artificial minimum delay for visual smoothness
      await delay(4000); 

      // You can add any other async setup (translations, configs, etc) here
      setIsAppLoading(false);
    };

    initializeApp();
  }, []);

  if (isAppLoading ) {
    return <PastryLoader />;
  }

  return <AppRoutes />;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
