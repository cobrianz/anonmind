import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="Heart" size={32} color="white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-6">
            Support Our Mission
          </h1>
          
          <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
            Help us maintain a safe, anonymous space where people can find support, share their stories, and access vital mental health resources. Your contribution makes a real difference in someone's healing journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              iconName="Heart" 
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Donate Now
            </Button>
            <Button 
              variant="outline" 
              iconName="Users" 
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Volunteer With Us
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-semibold text-primary mb-2">50K+</div>
              <div className="text-sm text-text-secondary">Stories Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-semibold text-secondary mb-2">24/7</div>
              <div className="text-sm text-text-secondary">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-semibold text-accent mb-2">100%</div>
              <div className="text-sm text-text-secondary">Anonymous & Safe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;