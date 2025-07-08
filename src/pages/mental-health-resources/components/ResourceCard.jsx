import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCard = ({ resource, onCall, onWebsite, onDirections }) => {
  const getAvailabilityColor = (availability) => {
    if (availability === '24/7') return 'text-success-600 bg-success-50';
    if (availability.includes('24/7')) return 'text-success-600 bg-success-50';
    return 'text-warning-600 bg-warning-50';
  };

  const getCostColor = (cost) => {
    return cost === 'Free' ? 'text-success-600 bg-success-50' : 'text-primary-600 bg-primary-50';
  };

  return (
    <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6 hover:shadow-therapeutic-md transition-therapeutic">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{resource.name}</h3>
            {resource.verified && (
              <div className="flex items-center space-x-1 px-2 py-1 bg-success-50 text-success-600 rounded-full text-xs font-medium">
                <Icon name="Shield" size={12} />
                <span>Verified</span>
              </div>
            )}
          </div>
          <p className="text-sm text-text-secondary mb-3">{resource.description}</p>
        </div>
        <div className="flex items-center space-x-1 ml-4">
          <Icon name={resource.icon} size={20} className="text-primary" />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(resource.availability)}`}>
          {resource.availability}
        </span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCostColor(resource.cost)}`}>
          {resource.cost}
        </span>
        <span className="px-2 py-1 rounded-full text-xs font-medium text-accent-600 bg-accent-50">
          {resource.category}
        </span>
      </div>

      {/* Contact Information */}
      <div className="space-y-2 mb-4">
        {resource.phone && (
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Phone" size={16} className="text-text-secondary" />
            <span className="text-foreground">{resource.phone}</span>
          </div>
        )}
        {resource.website && (
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Globe" size={16} className="text-text-secondary" />
            <span className="text-foreground truncate">{resource.website}</span>
          </div>
        )}
        {resource.address && (
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="MapPin" size={16} className="text-text-secondary" />
            <span className="text-foreground">{resource.address}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {resource.phone && (
          <Button
            variant="primary"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            onClick={() => onCall(resource.phone)}
            className="flex-1 sm:flex-none"
          >
            Call
          </Button>
        )}
        {resource.website && (
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="left"
            onClick={() => onWebsite(resource.website)}
            className="flex-1 sm:flex-none"
          >
            Website
          </Button>
        )}
        {resource.address && (
          <Button
            variant="ghost"
            size="sm"
            iconName="Navigation"
            iconPosition="left"
            onClick={() => onDirections(resource.address)}
            className="flex-1 sm:flex-none"
          >
            Directions
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;