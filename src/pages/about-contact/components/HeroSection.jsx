import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-background to-secondary-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Brain" size={24} color="white" />
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">
                AnonMind
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About Our
              <span className="block text-primary">Safe Space</span>
            </h1>
            
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              We believe everyone deserves a judgment-free space to share their mental health journey. 
              Our anonymous platform connects you with a supportive community that truly understands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                iconName="MessageCircle" 
                iconPosition="left"
                className="px-8 py-3"
              >
                Join Our Community
              </Button>
              <Button 
                variant="outline" 
                iconName="Heart" 
                iconPosition="left"
                className="px-8 py-3"
              >
                Support Our Mission
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-therapeutic-lg">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Diverse group of people supporting each other in a circle"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-therapeutic-md p-6 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} color="var(--color-success)" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-sm text-text-secondary">Community Members</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-therapeutic-md p-6 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-text-secondary">Anonymous</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;