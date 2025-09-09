
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { Button } from '../common/Button';

export const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
        <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-600">Your bag is empty</p>
        <p className="text-sm text-gray-500">Add some delicious items to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-green-600" />
          Your Bag ({getTotalItems()} items)
        </h3>
      </div>
      
      <div className="p-4 space-y-4">
        {items.map(item => (
          <div key={item.product.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
            <img 
              src={item.product.image} 
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{item.product.name}</h4>
              <p className="text-sm text-gray-600">${item.product.price.toFixed(2)} each</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center transition-colors ml-2"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-green-600">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          
          <Button className="w-full" size="lg">
            Proceed to Checkout • ${getTotalPrice().toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};