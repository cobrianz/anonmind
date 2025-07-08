import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const TrustSignalsSection = () => {
  const certifications = [
    {
      name: 'HIPAA Compliant',
      description: 'Healthcare data protection standards',
      icon: 'Shield',
      verified: true
    },
    {
      name: 'SSL Encrypted',
      description: 'End-to-end encryption for all communications',
      icon: 'Lock',
      verified: true
    },
    {
      name: 'SOC 2 Certified',
      description: 'Security and availability controls',
      icon: 'CheckCircle',
      verified: true
    },
    {
      name: 'Privacy First',
      description: 'No personal data collection or tracking',
      icon: 'Eye',
      verified: true
    }
  ];

  const partnerOrganizations = [
    {
      name: 'National Suicide Prevention Lifeline',
      logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop',
      description: 'Crisis intervention partnership'
    },
    {
      name: 'Mental Health America',
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop',
      description: 'Resource development collaboration'
    },
    {
      name: 'Crisis Text Line',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop',
      description: 'Text-based crisis support integration'
    },
    {
      name: 'NAMI',
      logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop',
      description: 'National Alliance on Mental Illness'
    }
  ];

  const transparencyMetrics = [
    {
      label: 'Funds to Platform',
      percentage: 75,
      description: 'Server costs, security, development'
    },
    {
      label: 'Crisis Support',
      percentage: 15,
      description: 'Hotline integration, emergency resources'
    },
    {
      label: 'Community Programs',
      percentage: 8,
      description: 'Volunteer training, outreach'
    },
    {
      label: 'Administrative',
      percentage: 2,
      description: 'Legal, accounting, compliance'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4">
            Trust & Transparency
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your trust is paramount. See how we protect your privacy, secure your data, and use your contributions responsibly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Security Certifications */}
          <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              Security & Privacy Certifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon} size={24} className="text-success" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-text-secondary mb-3">{cert.description}</p>
                  {cert.verified && (
                    <div className="flex items-center justify-center space-x-1 text-success">
                      <Icon name="CheckCircle" size={16} />
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Partner Organizations */}
          <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              Trusted Partners
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerOrganizations.map((partner) => (
                <div key={partner.name} className="text-center">
                  <div className="w-full h-20 bg-surface rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">{partner.name}</h4>
                  <p className="text-xs text-text-secondary">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Transparency */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              How We Use Your Donations
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">
                  Fund Allocation
                </h4>
                <div className="space-y-4">
                  {transparencyMetrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {metric.label}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {metric.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-therapeutic"
                          style={{ width: `${metric.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-text-secondary mt-1">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">
                  Financial Accountability
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="FileText" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Annual Reports</div>
                      <div className="text-sm text-text-secondary">
                        Detailed financial statements published yearly
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Eye" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Public Dashboard</div>
                      <div className="text-sm text-text-secondary">
                        Real-time donation tracking and usage metrics
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Users" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Community Oversight</div>
                      <div className="text-sm text-text-secondary">
                        Volunteer board reviews all major expenditures
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Award" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Third-Party Audits</div>
                      <div className="text-sm text-text-secondary">
                        Independent financial audits conducted annually
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8 text-center">
            <h3 className="text-xl font-heading font-medium text-foreground mb-4">
              Questions About Our Mission?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              We're committed to transparency and accountability. If you have questions about how we use donations, our security practices, or our partnerships, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                iconName="Mail"
                iconPosition="left"
              >
                Email Us
              </Button>
              <Button
                variant="outline"
                iconName="FileText"
                iconPosition="left"
              >
                View Annual Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;