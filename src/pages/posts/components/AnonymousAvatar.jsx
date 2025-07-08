import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AnonymousAvatar = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);

  const avatarOptions = [
    { gradient: 'from-primary to-secondary', icon: 'User' },
    { gradient: 'from-accent to-primary', icon: 'Heart' },
    { gradient: 'from-secondary to-accent', icon: 'Smile' },
    { gradient: 'from-warning to-success', icon: 'Star' },
    { gradient: 'from-success to-secondary', icon: 'Zap' },
    { gradient: 'from-error to-warning', icon: 'Sun' }
  ];

  useEffect(() => {
    // Set random avatar on component mount
    setCurrentAvatar(Math.floor(Math.random() * avatarOptions.length));
  }, []);

  const handleRandomize = () => {
    let newAvatar;
    do {
      newAvatar = Math.floor(Math.random() * avatarOptions.length);
    } while (newAvatar === currentAvatar);
    setCurrentAvatar(newAvatar);
  };

  const currentAvatarData = avatarOptions[currentAvatar];

  return (
    <div className="bg-card rounded-lg shadow-therapeutic-sm p-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Your Anonymous Identity</h3>
        <p className="text-sm text-text-secondary mb-6">
          This avatar will represent you in your post while keeping your identity completely private.
        </p>
        
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar Display */}
          <div className={`w-20 h-20 bg-gradient-to-br ${currentAvatarData.gradient} rounded-full flex items-center justify-center shadow-therapeutic-md`}>
            <Icon name={currentAvatarData.icon} size={32} color="white" />
          </div>
          
          {/* Randomize Button */}
          <Button
            variant="outline"
            onClick={handleRandomize}
            iconName="Shuffle"
            iconPosition="left"
            size="sm"
          >
            Change Avatar
          </Button>
          
          {/* Privacy Assurance */}
          <div className="bg-success-50 border border-success-200 rounded-lg p-3 max-w-sm">
            <div className="flex items-start space-x-2">
              <Icon name="Shield" size={16} className="text-success-600 mt-0.5" />
              <div className="text-xs text-success-700">
                <p className="font-medium mb-1">100% Anonymous</p>
                <p>No personal information is stored or shared. Your privacy is our priority.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnonymousAvatar;