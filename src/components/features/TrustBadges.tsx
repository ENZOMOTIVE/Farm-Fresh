import React from 'react';
import { Shield, Truck, RefreshCw, Award } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Payments',
      description: '256-bit SSL encryption'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Free Delivery',
      description: 'On orders over $50'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Guarantee',
      description: '100% satisfaction promise'
    }
  ];

  return (
    <div className="bg-green-50 rounded-xl p-6 mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3 text-white">
              {badge.icon}
            </div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">{badge.title}</h4>
            <p className="text-xs text-gray-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};