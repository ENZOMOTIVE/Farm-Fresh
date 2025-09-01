import React from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { CartProvider } from './hooks/useCart';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

const AppContent = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return <Dashboard />;
};

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