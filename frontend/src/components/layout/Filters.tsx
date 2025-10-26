
import { Filter } from 'lucide-react';
import { SearchFilters } from '../../types';
import { CATEGORIES, PRICE_RANGES } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

interface FiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export const Filters = ({ filters, onFiltersChange }: FiltersProps) => {
  const updateFilter = (key: keyof SearchFilters, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const {t} = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-900">{t("filters")}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("category")}
          </label>
          <select
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {Object.entries(CATEGORIES).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("priceRange")}
          </label>
          <select
            value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split('-').map(Number);
              updateFilter('priceRange', [min, max]);
            }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            {PRICE_RANGES.map(range => (
              <option 
                key={range.label} 
                value={`${range.value[0]}-${range.value[1]}`}
              >
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Stock Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("availability")}
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStockOnly}
              onChange={(e) => updateFilter('inStockOnly', e.target.checked)}
              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t("inStockOnly")}</span>
          </label>
        </div>
      </div>
    </div>
  );
};