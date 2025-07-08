import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  const stats = [
    {
      icon: "MessageCircle",
      number: "250K+",
      label: "Stories Shared",
      description: "Anonymous posts helping others feel less alone"
    },
    {
      icon: "Heart",
      number: "1.2M+",
      label: "Support Reactions",
      description: "Hearts and encouragement given to community members"
    },
    {
      icon: "Users",
      number: "50K+",
      label: "Active Members",
      description: "People finding support and giving back to others"
    },
    {
      icon: "Clock",
      number: "24/7",
      label: "Always Available",
      description: "Round-the-clock peer support when you need it most"
    }
  ];

  const testimonials = [
    {
      quote: `This platform saved my life. Being able to share my darkest thoughts anonymously and receive genuine support from people who understood made all the difference.`,
      author: "Anonymous Community Member",
      tag: "Depression Support"
    },
    {
      quote: `I never thought I could help others with my anxiety story, but sharing here has not only helped me heal but also supported countless others going through similar struggles.`,
      author: "Anonymous Community Member", 
      tag: "Anxiety Support"
    },
    {
      quote: `The anonymity removes all barriers. I can be completely honest about my mental health journey without fear of judgment from family, friends, or employers.`,
      author: "Anonymous Community Member",
      tag: "General Support"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface via-background to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Our Community Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every story shared, every heart given, and every reply posted creates ripples of healing 
            throughout our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-therapeutic-sm border border-border text-center hover:shadow-therapeutic-md transition-therapeutic">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={28} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-text-secondary">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground text-center mb-12">
            Community Voices
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-therapeutic-sm border border-border hover:shadow-therapeutic-md transition-therapeutic">
                <div className="flex items-center mb-4">
                  <Icon name="Quote" size={24} color="var(--color-primary)" className="mr-2" />
                  <span className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded-full">
                    {testimonial.tag}
                  </span>
                </div>
                <blockquote className="text-text-secondary mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-text-secondary">
                      Verified Community Member
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;