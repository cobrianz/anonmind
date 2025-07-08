import React from 'react';
import Icon from '../../../components/AppIcon';

const PrivacyReminder = () => {
  const privacyPoints = [
    {
      icon: 'Shield',
      title: 'Complete Anonymity',
      description: 'No personal information is collected or stored with your post.'
    },
    {
      icon: 'Users',
      title: 'Supportive Community',
      description: 'Share with others who understand and want to help.'
    },
    {
      icon: 'Heart',
      title: 'Safe Space',
      description: 'Moderated environment focused on empathy and support.'
    },
    {
      icon: 'Lock',
      title: 'Secure Platform',
      description: 'Your data is encrypted and protected at all times.'
    }
  ];

  return (
    <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
      <div className="text-center mb-4">
        <Icon name="Info" size={24} className="text-primary-600 mx-auto mb-2" />
        <h3 className="text-lg font-semibold text-primary-800">You're in a Safe Space</h3>
        <p className="text-sm text-primary-700">
          Your wellbeing and privacy are our top priorities
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {privacyPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name={point.icon} size={16} className="text-primary-600" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary-800">{point.title}</h4>
              <p className="text-xs text-primary-700 mt-1">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-primary-200">
        <p className="text-xs text-primary-700 text-center">
          Need immediate help? Call the crisis hotline at{' '}
          <a href="tel:988" className="font-medium underline hover:text-primary-800">
            988
          </a>{' '}
          or text{' '}
          <a href="sms:741741" className="font-medium underline hover:text-primary-800">
            741741
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyReminder;