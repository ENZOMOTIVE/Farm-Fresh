import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import { useTranslation } from 'react-i18next';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, loginWithGoogle, isLoading } = useAuth();

  const { t } = useTranslation();


  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(t('FillAllFields'));
      return;
    }

    const success = await login(email, password);

    if (!success) {
      setError(t("InvalidCredentials"));
    }

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-5">
          <div className="flex items-center justify-center space-x-3">
            <img
              src="/brand-logo.png"
              className="w-20 h-20 rounded-full border-2 border-green-200"
              alt="Brand Logo"
            />
            <span className="text-2xl font-semibold text-green-700">{t('FarmFresh')}</span>
          </div>


        </div>


        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              label={t('Email')}
              placeholder={t("EnterEmail")}
              value={email}
              onChange={setEmail}
              icon={<Mail className="w-5 h-5" />}
              error={error && !email ? 'Email is required' : ''}
            />

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                label={t('Password')}
                placeholder={t("EnterPassword")}
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
              {isLoading ? t("SigningIn") : t("SignIn")}
            </Button>
          </form>

          <div className="mt-6 text-center">

            <p className="text-gray-600 text-sm">{t("Or")} </p>


          </div>

          <div className='flex justify-center p-2'>
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                if (credentialResponse.credential) {
                  const success = await loginWithGoogle(credentialResponse.credential);
                  if (success) navigate("/");
                }
              }}
              onError={() => setError(t("GoogleLoginFailed"))}
            />

          </div>
        </div>


      </div>
    </div>
  );
};

export default Login;
