import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-16 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-semibold text-foreground mb-6">
            You're Not Alone in This
            <span className="block text-primary mt-2">Journey</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            A safe, anonymous space where you can share your mental health
            story, connect with others who understand, and find the support you
            deserve.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-10 text-sm sm:text-base text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-primary" />
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={20} className="text-secondary" />
              <span>Peer Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-accent-600" />
              <span>24/7 Available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/create-post">
              <Button
                variant="primary"
                size="lg"
                iconName="PenTool"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Share Your Story
              </Button>
            </Link>

            <Link to="/posts">
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("recent-posts")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Browse Posts
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-text-secondary mb-4">
              Trusted by thousands seeking mental health support
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm">10,000+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MessageSquare" size={16} />
                <span className="text-sm">50,000+ Posts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="HandHeart" size={16} />
                <span className="text-sm">100,000+ Support Reactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;