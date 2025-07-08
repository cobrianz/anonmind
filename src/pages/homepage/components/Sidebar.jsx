import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Sidebar = () => {
  const crisisResources = [
    {
      name: "Crisis Text Line",
      number: "741741",
      description: "Text HOME to 741741",
      type: "text"
    },
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Call or chat 24/7",
      type: "call"
    },
    {
      name: "Crisis Chat",
      number: "Online",
      description: "suicidepreventionlifeline.org",
      type: "web"
    }
  ];

  const platformStats = [
    { label: "Active Members", value: "10,247", icon: "Users" },
    { label: "Posts This Week", value: "1,834", icon: "MessageSquare" },
    { label: "Support Given", value: "45,892", icon: "Heart" },
    { label: "Resources Shared", value: "2,156", icon: "BookOpen" }
  ];

  const mentalHealthTips = [
    {
      title: "Practice Deep Breathing",
      description: "Take 5 deep breaths when feeling overwhelmed. Inhale for 4, hold for 4, exhale for 6.",
      icon: "Wind"
    },
    {
      title: "Stay Connected",
      description: "Reach out to someone you trust. Connection is a powerful tool for mental wellness.",
      icon: "Users"
    },
    {
      title: "Limit Social Media",
      description: "Take breaks from social media to reduce comparison and information overload.",
      icon: "Smartphone"
    },
    {
      title: "Move Your Body",
      description: "Even a 10-minute walk can boost your mood and reduce stress hormones.",
      icon: "Activity"
    }
  ];

  return (
    <aside className="space-y-8">
      {/* Crisis Resources */}
      <div className="bg-error-50 rounded-lg p-6 border border-error-200">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="AlertTriangle" size={20} className="text-error-600" />
          <h3 className="text-lg font-semibold text-error-800">Crisis Support</h3>
        </div>
        
        <div className="space-y-3">
          {crisisResources.map((resource, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-error-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm">{resource.name}</h4>
                  <p className="text-xs text-text-secondary mt-1">{resource.description}</p>
                </div>
                {resource.type === 'call' && (
                  <a
                    href={`tel:${resource.number}`}
                    className="flex items-center justify-center w-8 h-8 bg-error text-error-foreground rounded-full hover:bg-error-600 transition-therapeutic focus-ring"
                    aria-label={`Call ${resource.name}`}
                  >
                    <Icon name="Phone" size={16} />
                  </a>
                )}
                {resource.type === 'text' && (
                  <a
                    href={`sms:${resource.number}`}
                    className="flex items-center justify-center w-8 h-8 bg-error text-error-foreground rounded-full hover:bg-error-600 transition-therapeutic focus-ring"
                    aria-label={`Text ${resource.name}`}
                  >
                    <Icon name="MessageSquare" size={16} />
                  </a>
                )}
                {resource.type === 'web' && (
                  <a
                    href="https://suicidepreventionlifeline.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 bg-error text-error-foreground rounded-full hover:bg-error-600 transition-therapeutic focus-ring"
                    aria-label={`Visit ${resource.name} website`}
                  >
                    <Icon name="ExternalLink" size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link to="/mental-health-resources" className="block mt-4">
          <Button variant="outline" size="sm" className="w-full">
            View All Resources
          </Button>
        </Link>
      </div>

      {/* Platform Statistics */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Community Impact</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {platformStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-50 rounded-full mx-auto mb-2">
                <Icon name={stat.icon} size={20} className="text-primary" />
              </div>
              <div className="text-lg font-semibold text-foreground">{stat.value}</div>
              <div className="text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mental Health Tips */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Daily Wellness Tips</h3>
          <Icon name="Lightbulb" size={20} className="text-warning-500" />
        </div>
        
        <div className="space-y-4">
          {mentalHealthTips.slice(0, 2).map((tip, index) => (
            <div key={index} className="border-l-4 border-primary pl-4">
              <div className="flex items-start space-x-3">
                <Icon name={tip.icon} size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground text-sm">{tip.title}</h4>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/mental-health-resources" className="block mt-4">
          <Button variant="ghost" size="sm" className="w-full">
            More Wellness Tips
          </Button>
        </Link>
      </div>

      {/* Support the Platform */}
      <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-lg p-6 border border-secondary-200">
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full mx-auto mb-3">
            <Icon name="HandHeart" size={24} className="text-secondary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Support Our Mission</h3>
          <p className="text-sm text-text-secondary mb-4">
            Help us keep this platform free and accessible for everyone who needs support.
          </p>
          <Link to="/support-donate">
            <Button variant="secondary" size="sm" className="w-full">
              Learn How to Help
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;