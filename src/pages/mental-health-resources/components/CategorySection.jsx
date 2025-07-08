import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CategorySection = ({ category, resources, onCall, onWebsite, onDirections }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const categoryIcons = {
    'Crisis Hotlines': 'Phone',
    'Therapy Services': 'Users',
    'Support Groups': 'Heart',
    'Self-Help Tools': 'BookOpen'
  };

  const categoryColors = {
    'Crisis Hotlines': 'text-error-600 bg-error-50 border-error-200',
    'Therapy Services': 'text-primary-600 bg-primary-50 border-primary-200',
    'Support Groups': 'text-secondary-600 bg-secondary-50 border-secondary-200',
    'Self-Help Tools': 'text-accent-600 bg-accent-50 border-accent-200'
  };

  if (resources.length === 0) return null;

  return (
    <div className="mb-8">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center ${categoryColors[category] || 'text-primary-600 bg-primary-50 border-primary-200'}`}>
            <Icon name={categoryIcons[category] || 'Heart'} size={20} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{category}</h3>
            <p className="text-sm text-text-secondary">{resources.length} resource{resources.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
          iconPosition="right"
          onClick={() => setIsExpanded(!isExpanded)}
          className="sm:hidden"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>

      {/* Resources Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-therapeutic ${isExpanded ? 'block' : 'hidden sm:grid'}`}>
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-4 hover:shadow-therapeutic-md transition-therapeutic"
          >
            {/* Resource Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-base font-semibold text-foreground">{resource.name}</h4>
                  {resource.verified && (
                    <div className="flex items-center space-x-1 px-2 py-0.5 bg-success-50 text-success-600 rounded-full text-xs font-medium">
                      <Icon name="Shield" size={10} />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-2 line-clamp-2">{resource.description}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                resource.availability === '24/7' ? 'text-success-600 bg-success-50' : 'text-warning-600 bg-warning-50'
              }`}>
                {resource.availability}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                resource.cost === 'Free' ? 'text-success-600 bg-success-50' : 'text-primary-600 bg-primary-50'
              }`}>
                {resource.cost}
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-1 mb-3 text-xs">
              {resource.phone && (
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={12} className="text-text-secondary" />
                  <span className="text-foreground">{resource.phone}</span>
                </div>
              )}
              {resource.website && (
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={12} className="text-text-secondary" />
                  <span className="text-foreground truncate">{resource.website}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {resource.phone && (
                <Button
                  variant={category === 'Crisis Hotlines' ? 'danger' : 'primary'}
                  size="xs"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => onCall(resource.phone)}
                  className="flex-1"
                >
                  Call
                </Button>
              )}
              {resource.website && (
                <Button
                  variant="outline"
                  size="xs"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => onWebsite(resource.website)}
                  className="flex-1"
                >
                  Visit
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;