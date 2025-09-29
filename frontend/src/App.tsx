

import { AuthProvider } from './hooks/useAuth';
import { CartProvider } from './hooks/useCart';
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