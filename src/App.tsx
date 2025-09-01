import React from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { CartProvider } from './hooks/useCart';
import { Dashboard } from './pages/Dashboard';
import AppRoutes from './Routes/Routes';





function App() {
  return (
    

    <AuthProvider>
      <CartProvider>
        
        <AppRoutes />
      </CartProvider>
    </AuthProvider>
    
  );
}

export default App;