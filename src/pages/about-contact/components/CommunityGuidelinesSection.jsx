import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityGuidelinesSection = () => {
  const guidelines = [
    {
      icon: "Heart",
      title: "Be Kind & Supportive",
      description: "Treat every community member with empathy, respect, and understanding. We're all here to heal and support each other."
    },
    {
      icon: "Shield",
      title: "Respect Anonymity",
      description: "Never attempt to identify other users or share personal information. Anonymity is sacred in our community."
    },
    {
      icon: "MessageCircle",
      title: "Share Authentically",
      description: "Be genuine in your posts and responses. Authentic experiences help others feel less alone in their journey."
    },
    {
      icon: "AlertTriangle",
      title: "No Harmful Content",
      description: "Avoid sharing content that could trigger others, including detailed self-harm methods or substance abuse instructions."
    },
    {
      icon: "Users",
      title: "Support, Don't Diagnose",
      description: "Share your experiences and offer emotional support, but avoid giving medical advice or diagnosing others."
    },
    {
      icon: "Flag",
      title: "Report Concerns",
      description: "If you see content that violates our guidelines or concerns you, please report it to our moderation team."
    }
  ];

  const moderationInfo = [
    {
      title: "AI-Assisted Moderation",
      description: "Our platform uses AI to detect potentially harmful content and flag it for human review."
    },
    {
      title: "Community Reporting",
      description: "Community members can report posts or replies that violate guidelines or seem concerning."
    },
    {
      title: "Human Review Team",
      description: "Trained mental health advocates review flagged content and make moderation decisions."
    },
    {
      title: "Crisis Intervention",
      description: "We have protocols in place to connect users in crisis with appropriate professional resources."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Community Guidelines
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our guidelines help maintain a safe, supportive environment where everyone 
            can share and heal without fear of judgment.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-therapeutic-sm border border-border hover:shadow-therapeutic-md transition-therapeutic">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name={guideline.icon} size={24} color="var(--color-primary)" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {guideline.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {guideline.description}
              </p>
            </div>
          ))}
        </div>

        {/* Moderation Approach */}
        <div className="bg-card rounded-2xl p-8 shadow-therapeutic-sm border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Our Moderation Approach
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We use a combination of technology and human oversight to maintain a safe, 
              supportive environment for all community members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {moderationInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="CheckCircle" size={16} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {info.title}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Crisis Resources Reminder */}
          <div className="mt-12 p-6 bg-error-50 border border-error-200 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-error-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" size={24} color="var(--color-error)" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  Crisis Support Available
                </h4>
                <p className="text-text-secondary text-sm mb-4">
                  If you're experiencing a mental health crisis, please reach out for immediate professional help:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:988"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-error text-error-foreground rounded-lg text-sm font-medium hover:bg-error-600 transition-therapeutic"
                  >
                    <Icon name="Phone" size={16} />
                    <span>Crisis Hotline: 988</span>
                  </a>
                  <a
                    href="sms:741741"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-error text-error-foreground rounded-lg text-sm font-medium hover:bg-error-600 transition-therapeutic"
                  >
                    <Icon name="MessageSquare" size={16} />
                    <span>Text: 741741</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGuidelinesSection;