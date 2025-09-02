import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  label, 
  error, 
  icon,
  className = ''
}: InputProps) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400">
              {icon}
            </div>
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            block w-full rounded-lg border border-gray-300 
            ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2
            text-gray-900 placeholder-gray-500
            focus:border-green-500 focus:ring-green-500 focus:ring-1
            transition-colors duration-200
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          `}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};