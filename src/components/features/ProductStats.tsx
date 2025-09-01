import React from 'react';
import { TrendingUp, Users, Award, Truck } from 'lucide-react';

export const ProductStats = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '10K+',
      label: 'Happy Customers',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '25+',
      label: 'Awards Won',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      value: '99%',
      label: 'On-Time Delivery',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '50+',
      label: 'Local Farms',
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Farm Fresh?</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-2`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};