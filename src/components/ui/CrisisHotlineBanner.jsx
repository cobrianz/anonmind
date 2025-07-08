import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const CrisisHotlineBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-1000 bg-error text-error-foreground shadow-therapeutic-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <Icon name="AlertTriangle" size={20} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-sm font-medium">
                Crisis Support Available 24/7
              </span>
              <span className="text-xs sm:text-sm opacity-90">
                You're not alone - help is here
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Call Button */}
            <a
              href="tel:988"
              className="flex items-center space-x-2 px-3 py-2 bg-error-foreground text-error rounded-sm text-sm font-medium hover:bg-error-100 transition-therapeutic focus:outline-none focus:ring-2 focus:ring-error-foreground focus:ring-offset-2 focus:ring-offset-error"
              aria-label="Call Crisis Hotline 988"
            >
              <Icon name="Phone" size={16} />
              <span className="hidden sm:inline">Call 988</span>
              <span className="sm:hidden">988</span>
            </a>

            {/* Text Button */}
            <a
              href="sms:741741"
              className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-error-foreground text-error rounded-sm text-sm font-medium hover:bg-error-100 transition-therapeutic focus:outline-none focus:ring-2 focus:ring-error-foreground focus:ring-offset-2 focus:ring-offset-error"
              aria-label="Text Crisis Line 741741"
            >
              <Icon name="MessageSquare" size={16} />
              <span>Text 741741</span>
            </a>

            {/* Close Button */}
            <Button
              variant="ghost"
              onClick={() => setIsVisible(false)}
              className="p-1 text-error-foreground hover:bg-error-600 focus:ring-error-foreground focus:ring-offset-error"
              aria-label="Close crisis banner"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisHotlineBanner;