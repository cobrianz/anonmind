import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PostContent = ({ post, onSupportToggle, onShare, onReport }) => {
  const [isSupported, setIsSupported] = useState(post.isSupported);
  const [supportCount, setSupportCount] = useState(post.supportCount);

  const handleSupportClick = () => {
    const newSupportState = !isSupported;
    setIsSupported(newSupportState);
    setSupportCount(prev => newSupportState ? prev + 1 : prev - 1);
    onSupportToggle(post.id, newSupportState);
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - postTime) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6 mb-6">
      {/* Post Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0">
          <Image
            src={post.avatar}
            alt="Anonymous user avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm font-medium text-text-primary">Anonymous</span>
            <span className="text-xs text-text-secondary">•</span>
            <span className="text-xs text-text-secondary">{formatTimeAgo(post.timestamp)}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-6">
        <p className="text-text-primary leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-6">
          {/* Support Button */}
          <button
            onClick={handleSupportClick}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-therapeutic focus-ring ${
              isSupported
                ? 'text-error bg-error-50 hover:bg-error-100' :'text-text-secondary hover:text-error hover:bg-error-50'
            }`}
            aria-label={isSupported ? 'Remove support' : 'Show support'}
          >
            <Icon 
              name="Heart" 
              size={18} 
              className={`transition-therapeutic ${isSupported ? 'fill-current' : ''}`}
            />
            <span className="text-sm font-medium">{supportCount}</span>
          </button>

          {/* Reply Count */}
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="MessageCircle" size={18} />
            <span className="text-sm">{post.replyCount} replies</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Share Button */}
          <Button
            variant="ghost"
            onClick={() => onShare(post.id)}
            className="p-2"
            aria-label="Share post"
          >
            <Icon name="Share2" size={18} />
          </Button>

          {/* Report Button */}
          <Button
            variant="ghost"
            onClick={() => onReport(post.id)}
            className="p-2 text-text-secondary hover:text-warning"
            aria-label="Report post"
          >
            <Icon name="Flag" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostContent;