import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedResources = ({ onCall, onWebsite }) => {
  const featuredResources = [
    {
      id: 'crisis-1',
      name: '988 Suicide & Crisis Lifeline',
      description: 'Free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.',
      phone: '988',
      website: 'https://988lifeline.org',
      icon: 'Phone',
      priority: 'crisis',
      verified: true,
      availability: '24/7',
      cost: 'Free'
    },
    {
      id: 'crisis-2',
      name: 'Crisis Text Line',
      description: 'Free, 24/7 support for those in crisis. Text HOME to 741741 from anywhere in the US to text with a trained Crisis Counselor.',
      phone: '741741',
      website: 'https://crisistextline.org',
      icon: 'MessageSquare',
      priority: 'crisis',
      verified: true,
      availability: '24/7',
      cost: 'Free'
    },
    {
      id: 'therapy-1',
      name: 'BetterHelp',
      description: 'Professional counseling done securely online. Get matched with a licensed therapist and start therapy in under 48 hours.',
      website: 'https://betterhelp.com',
      icon: 'Users',
      priority: 'featured',
      verified: true,
      availability: 'Flexible',
      cost: 'Paid'
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
          Featured Resources
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Verified and trusted mental health resources available 24/7 for immediate support
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredResources.map((resource) => (
          <div
            key={resource.id}
            className={`relative bg-card rounded-lg shadow-therapeutic-md border-2 p-6 hover:shadow-therapeutic-lg transition-therapeutic ${
              resource.priority === 'crisis' ?'border-error-200 bg-gradient-to-br from-error-50 to-background' :'border-primary-200 bg-gradient-to-br from-primary-50 to-background'
            }`}
          >
            {/* Priority Badge */}
            {resource.priority === 'crisis' && (
              <div className="absolute -top-3 left-6">
                <div className="flex items-center space-x-1 px-3 py-1 bg-error text-error-foreground rounded-full text-xs font-medium shadow-therapeutic-sm">
                  <Icon name="AlertTriangle" size={12} />
                  <span>CRISIS SUPPORT</span>
                </div>
              </div>
            )}

            {/* Header */}
            <div className="flex items-start space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                resource.priority === 'crisis' ? 'bg-error text-error-foreground' : 'bg-primary text-primary-foreground'
              }`}>
                <Icon name={resource.icon} size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{resource.name}</h3>
                  {resource.verified && (
                    <Icon name="Shield" size={16} className="text-success-600" />
                  )}
                </div>
                <div className="flex items-center space-x-2">
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
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              {resource.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {resource.phone && (
                <Button
                  variant={resource.priority === 'crisis' ? 'danger' : 'primary'}
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => onCall(resource.phone)}
                  className="flex-1"
                  fullWidth
                >
                  {resource.priority === 'crisis' ? 'Call Now' : 'Call'}
                </Button>
              )}
              {resource.website && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => onWebsite(resource.website)}
                  className="flex-1"
                  fullWidth
                >
                  Visit Website
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedResources;