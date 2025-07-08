import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: `This platform gave me hope when I felt completely alone. Being able to share my story anonymously and receive genuine support from people who understood made all the difference in my recovery journey.`,
      impact: 'Found community support',
      timeframe: '6 months ago',
      category: 'Depression Support'
    },
    {
      id: 2,
      content: `The crisis resources here literally saved my life. When I was in my darkest moment, having immediate access to hotlines and seeing others who had been through similar struggles gave me the strength to reach out for help.`,
      impact: 'Crisis intervention',
      timeframe: '1 year ago',
      category: 'Crisis Support'
    },
    {
      id: 3,
      content: `As someone with severe social anxiety, traditional support groups felt impossible. This anonymous platform allowed me to connect with others and gradually build confidence to seek professional help.`,
      impact: 'Reduced isolation',
      timeframe: '8 months ago',
      category: 'Anxiety Support'
    },
    {
      id: 4,
      content: `The volunteer moderators here are incredible. They create such a safe space where people can be vulnerable without fear of judgment. It's amazing what this community has built together.`,impact: 'Safe community',timeframe: '3 months ago',category: 'Community Support'
    },
    {
      id: 5,
      content: `I've been both someone seeking support and now someone offering it to others. Watching people find hope and healing through shared experiences is incredibly powerful. This platform changes lives.`,
      impact: 'Peer support',
      timeframe: '2 years ago',
      category: 'Long-term Recovery'
    },
    {
      id: 6,
      content: `The mental health resources section helped me find local therapists and understand my insurance options. Sometimes you need that first step to be anonymous before you can take the bigger ones.`,
      impact: 'Professional help connection',
      timeframe: '4 months ago',
      category: 'Resource Access'
    }
  ];

  const impactStats = [
    {
      number: '50,000+',
      label: 'Stories Shared',
      description: 'Anonymous posts helping others feel less alone'
    },
    {
      number: '200,000+',
      label: 'Support Interactions',
      description: 'Comments, replies, and encouragement given'
    },
    {
      number: '15,000+',
      label: 'Crisis Interventions',
      description: 'People connected to immediate help resources'
    },
    {
      number: '95%',
      label: 'Feel Less Alone',
      description: 'Users report reduced isolation after using platform'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Depression Support': 'bg-primary-100 text-primary',
      'Crisis Support': 'bg-error-100 text-error',
      'Anxiety Support': 'bg-warning-100 text-warning',
      'Community Support': 'bg-secondary-100 text-secondary',
      'Long-term Recovery': 'bg-success-100 text-success',
      'Resource Access': 'bg-accent-100 text-accent'
    };
    return colors[category] || 'bg-surface text-text-secondary';
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4">
            Real Impact Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See how your support helps create meaningful change in people's lives. All testimonials are shared anonymously with permission.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Impact Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg shadow-therapeutic-sm p-6 text-center">
                <div className="text-3xl font-heading font-semibold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card rounded-lg shadow-therapeutic-sm p-6 hover:shadow-therapeutic-md transition-therapeutic">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={20} color="white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-foreground">Anonymous User</span>
                      <Icon name="CheckCircle" size={16} className="text-success" />
                    </div>
                    <div className="text-xs text-text-secondary">{testimonial.timeframe}</div>
                  </div>
                </div>

                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(testimonial.category)}`}>
                    {testimonial.category}
                  </span>
                  <div className="flex items-center space-x-1 text-success">
                    <Icon name="Heart" size={14} />
                    <span className="text-xs font-medium">{testimonial.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Growth */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 sm:p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-medium text-foreground mb-4">
                Growing Community Impact
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Every month, our community grows stronger and more supportive. Your contributions help us reach more people in need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} color="white" />
                </div>
                <div className="text-2xl font-heading font-semibold text-foreground mb-2">
                  +25%
                </div>
                <div className="text-sm text-text-secondary">
                  Monthly growth in active users seeking support
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <div className="text-2xl font-heading font-semibold text-foreground mb-2">
                  500+
                </div>
                <div className="text-sm text-text-secondary">
                  New volunteers joined our moderation team this year
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={24} color="white" />
                </div>
                <div className="text-2xl font-heading font-semibold text-foreground mb-2">
                  50+
                </div>
                <div className="text-sm text-text-secondary">
                  Countries where our platform provides support
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8 text-center">
            <h3 className="text-xl font-heading font-medium text-foreground mb-4">
              Be Part of Someone's Healing Journey
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Your support—whether through donations, volunteering, or simply sharing our mission—helps create a world where no one faces mental health challenges alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                iconName="Heart"
                iconPosition="left"
              >
                Support Our Mission
              </Button>
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
              >
                Share With Others
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;