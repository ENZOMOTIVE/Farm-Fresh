import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = await login(email, password);
    if (!success) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl">🥚</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farm Fresh</h1>
          <p className="text-green-600 font-medium">Eggs & Pastries</p>
          <p className="text-gray-600 text-sm mt-2">Welcome back! Please sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={setEmail}
              icon={<Mail className="w-5 h-5" />}
              error={error && !email ? 'Email is required' : ''}
            />

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={setPassword}
                icon={<Lock className="w-5 h-5" />}
                error={error && !password ? 'Password is required' : ''}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Demo: Use any email and password to sign in
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-1">🥚</div>
            <p className="text-xs text-gray-600">Fresh Eggs</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-1">🥐</div>
            <p className="text-xs text-gray-600">Artisan Pastries</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-1">🚚</div>
            <p className="text-xs text-gray-600">Fresh Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};