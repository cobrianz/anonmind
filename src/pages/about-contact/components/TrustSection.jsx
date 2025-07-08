import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const partnerships = [
    {
      name: "National Alliance on Mental Illness",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Partnering to provide crisis resources and mental health education"
    },
    {
      name: "Crisis Text Line",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Integrated crisis support for immediate help when needed"
    },
    {
      name: "Mental Health America",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Collaborative efforts in mental health advocacy and awareness"
    },
    {
      name: "American Psychological Association",
      logo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Professional guidance on community mental health best practices"
    }
  ];

  const certifications = [
    {
      icon: "Shield",
      title: "HIPAA Compliant",
      description: "Following healthcare privacy standards for data protection"
    },
    {
      icon: "Lock",
      title: "SOC 2 Certified",
      description: "Independently audited security and availability controls"
    },
    {
      icon: "CheckCircle",
      title: "Crisis Certified",
      description: "Staff trained in crisis intervention and suicide prevention"
    },
    {
      icon: "Globe",
      title: "Privacy Shield",
      description: "International data privacy compliance and protection"
    }
  ];

  const transparencyMetrics = [
    {
      metric: "99.9%",
      label: "Uptime",
      description: "Platform availability for community support"
    },
    {
      metric: "< 2 min",
      label: "Crisis Response",
      description: "Average time to connect users with crisis resources"
    },
    {
      metric: "24/7",
      label: "Moderation",
      description: "Round-the-clock community safety monitoring"
    },
    {
      metric: "0",
      label: "Data Breaches",
      description: "Perfect security record since launch"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-surface to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Trust & Transparency
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We're committed to maintaining the highest standards of safety, privacy, 
            and professional excellence in mental health support.
          </p>
        </div>

        {/* Partnerships */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
            Trusted Partners
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-therapeutic-sm border border-border text-center hover:shadow-therapeutic-md transition-therapeutic">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2 text-sm">
                  {partner.name}
                </h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
            Security & Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-therapeutic-sm border border-border text-center hover:shadow-therapeutic-md transition-therapeutic">
                <div className="w-16 h-16 bg-gradient-to-br from-success-100 to-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={28} color="var(--color-success)" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {cert.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Metrics */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-12">
            Transparency Report
          </h3>
          <div className="bg-card rounded-2xl p-8 shadow-therapeutic-sm border border-border">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transparencyMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    {item.metric}
                  </div>
                  <div className="text-lg font-medium text-foreground mb-2">
                    {item.label}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-text-secondary text-sm mb-4">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-600 font-medium text-sm transition-therapeutic"
              >
                <Icon name="ExternalLink" size={16} />
                <span>View Full Transparency Report</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;