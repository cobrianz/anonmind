import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityCard = ({ community, isJoined, onJoinCommunity, onOpenModal }) => {
  const getActivityColor = (level) => {
    switch (level) {
      case 'active': return 'text-success';
      case 'moderate': return 'text-warning';
      case 'quiet': return 'text-text-secondary';
      default: return 'text-text-secondary';
    }
  };

  const getActivityBadge = (level) => {
    switch (level) {
      case 'active': return 'bg-success-100 text-success-700';
      case 'moderate': return 'bg-warning-100 text-warning-700';
      case 'quiet': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border hover:shadow-therapeutic transition-therapeutic">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
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
            <p className="text-sm text-text-secondary mb-3 line-clamp-2">
              {community.description}
            </p>
          </div>
        </div>

        {/* Member Avatars */}
        <div className="flex items-center mb-4">
          <div className="flex -space-x-2">
            {community.memberAvatars?.slice(0, 5).map((avatar, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-surface border-2 border-background flex items-center justify-center text-sm"
              >
                {avatar}
              </div>
            ))}
          </div>
          <div className="ml-3 text-sm text-text-secondary">
            {community.memberCount.toLocaleString()} members
          </div>
        </div>

        {/* Activity and Tags */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getActivityBadge(community.activityLevel)}`}>
              {community.activityLevel}
            </span>
            <span className="text-xs text-text-secondary">
              {community.recentActivity}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {community.tags?.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-primary-50 text-primary rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Recent Post Preview */}
        {community.recentPost && (
          <div className="mb-4 p-3 bg-surface rounded-lg">
            <p className="text-sm text-text-secondary italic line-clamp-2">
              "{community.recentPost}"
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3">
          <Button
            variant={isJoined ? 'outline' : 'primary'}
            size="sm"
            onClick={() => onJoinCommunity(community.id)}
            className="flex-1"
          >
            {isJoined ? 'Leave' : 'Join'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenModal(community)}
            className="flex-1"
          >
            Preview
          </Button>
        </div>
      </div>

      {/* Notification Badge for Joined Communities */}
      {isJoined && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full"></div>
      )}
    </div>
  );
};

export default CommunityCard;