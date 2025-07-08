import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const JoinModal = ({ community, isJoined, onJoinCommunity, onClose }) => {
  const handleJoin = () => {
    onJoinCommunity(community.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg shadow-therapeutic-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-heading font-semibold text-foreground">
            Community Preview
          </h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-foreground transition-therapeutic"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Community Info */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {community.name}
              </h3>
              {community.isVerified && (
                <div className="flex items-center justify-center w-5 h-5 bg-primary rounded-full">
                  <Icon name="Check" size={12} color="white" />
                </div>
              )}
            </div>
            <p className="text-text-secondary mb-4">
              {community.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-2xl font-heading font-semibold text-foreground">
                {community.memberCount.toLocaleString()}
              </div>
              <div className="text-sm text-text-secondary">Members</div>
            </div>
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-2xl font-heading font-semibold text-foreground capitalize">
                {community.activityLevel}
              </div>
              <div className="text-sm text-text-secondary">Activity</div>
            </div>
          </div>

          {/* Guidelines */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-3">
              Community Guidelines
            </h4>
            <div className="bg-surface rounded-lg p-4">
              <p className="text-text-secondary">
                {community.guidelines}
              </p>
            </div>
          </div>

          {/* Recent Discussion */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-3">
              Recent Discussion
            </h4>
            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                <div className="flex-1">
                  <p className="text-text-secondary italic text-sm">
                    "{community.recentPost}"
                  </p>
                  <div className="text-xs text-text-secondary mt-2">
                    {community.recentActivity}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-3">
              Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {community.tags?.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-primary-50 text-primary rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
            <Button
              variant={isJoined ? 'outline' : 'primary'}
              onClick={handleJoin}
              className="flex-1"
            >
              {isJoined ? 'Leave Community' : 'Join Community'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;