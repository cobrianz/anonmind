import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessModal = ({ isOpen, onClose, onCreateAnother }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-card rounded-lg shadow-therapeutic-lg max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-therapeutic focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>
        
        {/* Success Content */}
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success-600" />
          </div>
          
          {/* Title */}
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            Your Story Has Been Shared
          </h2>
          
          {/* Description */}
          <p className="text-text-secondary mb-6">
            Thank you for sharing your experience. Your courage in opening up can help others feel less alone and find the support they need.
          </p>
          
          {/* Impact Message */}
          <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Icon name="Heart" size={20} className="text-secondary-600" />
              <span className="text-sm font-medium text-secondary-800">Making a Difference</span>
            </div>
            <p className="text-xs text-secondary-700">
              Your post is now live and available for community support. Others going through similar experiences can find comfort in your words.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/homepage" className="flex-1">
              <Button
                variant="primary"
                fullWidth
                iconName="Home"
                iconPosition="left"
                onClick={onClose}
              >
                View Community
              </Button>
            </Link>
            
            <Button
              variant="outline"
              fullWidth
              iconName="Plus"
              iconPosition="left"
              onClick={onCreateAnother}
            >
              Share Another
            </Button>
          </div>
          
          {/* Additional Support */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-text-secondary mb-2">
              Need additional support?
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="tel:988"
                className="flex items-center space-x-1 text-xs text-error-600 hover:text-error-700 transition-therapeutic"
              >
                <Icon name="Phone" size={14} />
                <span>Crisis: 988</span>
              </a>
              <Link
                to="/mental-health-resources"
                className="flex items-center space-x-1 text-xs text-primary hover:text-primary-700 transition-therapeutic"
                onClick={onClose}
              >
                <Icon name="ExternalLink" size={14} />
                <span>Resources</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;