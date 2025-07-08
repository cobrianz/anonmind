import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityAdvocacySection = () => {
  const [copiedLink, setCopiedLink] = useState('');

  const shareContent = {
    title: 'AnonMind - Anonymous Mental Health Support',
    description: 'A safe, anonymous platform for mental health support and community connection. Join thousands finding hope and healing together.',
    url: 'https://anonmind.org',
    hashtags: '#MentalHealth #AnonymousSupport #MentalHealthMatters #Community #Healing'
  };

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: 'bg-blue-500',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareContent.description)}&url=${encodeURIComponent(shareContent.url)}&hashtags=${encodeURIComponent(shareContent.hashtags.replace('#', ''))}`
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      color: 'bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareContent.url)}&quote=${encodeURIComponent(shareContent.description)}`
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      color: 'bg-blue-700',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareContent.url)}&title=${encodeURIComponent(shareContent.title)}&summary=${encodeURIComponent(shareContent.description)}`
    },
    {
      name: 'Reddit',
      icon: 'MessageCircle',
      color: 'bg-orange-500',
      url: `https://reddit.com/submit?url=${encodeURIComponent(shareContent.url)}&title=${encodeURIComponent(shareContent.title)}`
    }
  ];

  const promotionResources = [
    {
      title: 'Social Media Graphics',
      description: 'Download ready-to-use graphics for your social media posts',
      icon: 'Image',
      items: ['Instagram Stories', 'Facebook Posts', 'Twitter Headers', 'LinkedIn Banners']
    },
    {
      title: 'Email Templates',
      description: 'Pre-written email templates to share with friends and family',
      icon: 'Mail',
      items: ['Personal Invitation', 'Professional Network', 'Support Groups', 'Newsletter Content']
    },
    {
      title: 'Presentation Materials',
      description: 'Slides and materials for presentations and workshops',
      icon: 'Presentation',
      items: ['PowerPoint Templates', 'Infographics', 'Fact Sheets', 'Statistics']
    }
  ];

  const handleShare = (platform) => {
    window.open(platform.url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareContent.url);
    setCopiedLink('copied');
    setTimeout(() => setCopiedLink(''), 2000);
  };

  const handleDownloadResource = (resourceType) => {
    // Mock download functionality
    console.log(`Downloading ${resourceType} resources`);
    alert(`${resourceType} resources would be downloaded in a real implementation`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4">
            Spread the Word
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Help us reach more people who need support by sharing AnonMind with your network and community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Social Sharing */}
          <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              Share on Social Media
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {socialPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => handleShare(platform)}
                  className={`${platform.color} text-white p-4 rounded-lg hover:opacity-90 transition-therapeutic focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                >
                  <Icon name={platform.icon} size={24} className="mx-auto mb-2" />
                  <div className="text-sm font-medium">{platform.name}</div>
                </button>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Share Link
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={shareContent.url}
                      readOnly
                      className="flex-1 px-4 py-3 border border-border rounded-l-lg bg-surface text-text-secondary focus:outline-none"
                    />
                    <Button
                      variant={copiedLink ? 'success' : 'outline'}
                      onClick={handleCopyLink}
                      className="rounded-l-none"
                      iconName={copiedLink ? 'Check' : 'Copy'}
                    >
                      {copiedLink ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promotion Resources */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              Promotion Resources
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promotionResources.map((resource) => (
                <div key={resource.title} className="bg-card rounded-lg p-6 shadow-therapeutic-sm">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={resource.icon} size={24} color="white" />
                  </div>
                  
                  <h4 className="text-lg font-medium text-foreground mb-2">
                    {resource.title}
                  </h4>
                  
                  <p className="text-sm text-text-secondary mb-4">
                    {resource.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {resource.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={16} className="text-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="outline"
                    onClick={() => handleDownloadResource(resource.title)}
                    iconName="Download"
                    iconPosition="left"
                    fullWidth
                  >
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              Advocacy Guidelines
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-success mr-2" />
                  Do's
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Emphasize the anonymous and safe nature of the platform
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Share personal stories of how the platform helped (if comfortable)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Focus on community support and peer connection
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Include crisis hotline information when appropriate
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                  <Icon name="XCircle" size={20} className="text-error mr-2" />
                  Don'ts
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Don't present as a replacement for professional therapy
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Avoid sharing specific user content or stories
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Don't make medical or therapeutic claims
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">
                      Avoid overwhelming people with too many messages
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityAdvocacySection;