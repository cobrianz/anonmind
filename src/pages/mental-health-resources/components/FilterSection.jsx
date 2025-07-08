import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterSection = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCountry, 
  onCountryChange, 
  selectedCategory, 
  onCategoryChange,
  selectedCost,
  onCostChange,
  selectedAvailability,
  onAvailabilityChange,
  onClearFilters,
  activeFiltersCount
}) => {
  const countries = [
    { value: 'all', label: 'All Countries' },
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'in', label: 'India' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'crisis', label: 'Crisis Hotlines' },
    { value: 'therapy', label: 'Therapy Services' },
    { value: 'support', label: 'Support Groups' },
    { value: 'self-help', label: 'Self-Help Tools' }
  ];

  const costOptions = [
    { value: 'all', label: 'All Costs' },
    { value: 'free', label: 'Free' },
    { value: 'paid', label: 'Paid' }
  ];

  const availabilityOptions = [
    { value: 'all', label: 'All Hours' },
    { value: '24/7', label: '24/7' },
    { value: 'business', label: 'Business Hours' }
  ];

  return (
    <div className="bg-surface rounded-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <Input
            type="search"
            placeholder="Search resources, organizations, or services..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-3 w-full"
          />
        </div>
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Country Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Location
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Cost Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Cost
          </label>
          <select
            value={selectedCost}
            onChange={(e) => onCostChange(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {costOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Availability
          </label>
          <select
            value={selectedAvailability}
            onChange={(e) => onAvailabilityChange(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {availabilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">
            {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} applied
          </span>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterSection;