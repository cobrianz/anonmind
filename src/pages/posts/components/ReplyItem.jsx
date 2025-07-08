import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ReplyItem = ({ reply, onSupportToggle, onReport, level = 0 }) => {
  const [isSupported, setIsSupported] = useState(reply.isSupported);
  const [supportCount, setSupportCount] = useState(reply.supportCount);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleSupportClick = () => {
    const newSupportState = !isSupported;
    setIsSupported(newSupportState);
    setSupportCount(prev => newSupportState ? prev + 1 : prev - 1);
    onSupportToggle(reply.id, newSupportState);
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const replyTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - replyTime) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const maxLevel = 2;
  const indentClass = level > 0 ? `ml-${Math.min(level * 8, 16)} sm:ml-${Math.min(level * 12, 24)}` : '';

  return (
    <div className={`${indentClass} ${level > 0 ? 'border-l-2 border-border pl-4' : ''}`}>
      <div className="bg-surface rounded-lg p-4 mb-4">
        {/* Reply Header */}
        <div className="flex items-start space-x-3 mb-3">
          <div className="flex-shrink-0">
            <Image
              src={reply.avatar}
              alt="Anonymous user avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-medium text-text-primary">Anonymous</span>
              <span className="text-xs text-text-secondary">•</span>
              <span className="text-xs text-text-secondary">{formatTimeAgo(reply.timestamp)}</span>
            </div>
          </div>
        </div>

        {/* Reply Content */}
        <div className="mb-3">
          <p className="text-text-primary text-sm leading-relaxed whitespace-pre-wrap">
            {reply.content}
          </p>
        </div>

        {/* Reply Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Support Button */}
            <button
              onClick={handleSupportClick}
              className={`flex items-center space-x-1 px-2 py-1 rounded transition-therapeutic focus-ring ${
                isSupported
                  ? 'text-error bg-error-50 hover:bg-error-100' :'text-text-secondary hover:text-error hover:bg-error-50'
              }`}
              aria-label={isSupported ? 'Remove support' : 'Show support'}
            >
              <Icon 
                name="Heart" 
                size={14} 
                className={`transition-therapeutic ${isSupported ? 'fill-current' : ''}`}
              />
              <span className="text-xs font-medium">{supportCount}</span>
            </button>

            {/* Reply Button (only show if not at max level) */}
            {level < maxLevel && (
              <button
                onClick={() => setShowReplyForm(!showReplyForm)}
                className="flex items-center space-x-1 px-2 py-1 rounded text-text-secondary hover:text-primary hover:bg-primary-50 transition-therapeutic focus-ring"
                aria-label="Reply to this comment"
              >
                <Icon name="Reply" size={14} />
                <span className="text-xs">Reply</span>
              </button>
            )}
          </div>

          {/* Report Button */}
          <Button
            variant="ghost"
            onClick={() => onReport(reply.id)}
            className="p-1 text-text-secondary hover:text-warning"
            aria-label="Report reply"
          >
            <Icon name="Flag" size={14} />
          </Button>
        </div>

        {/* Reply Form */}
        {showReplyForm && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex space-x-3">
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                alt="Your anonymous avatar"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <textarea
                  placeholder="Write a supportive reply..."
                  className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  rows="3"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-text-secondary">
                    Be kind and supportive
                  </span>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      onClick={() => setShowReplyForm(false)}
                      className="text-xs px-3 py-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      className="text-xs px-3 py-1"
                    >
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Nested Replies */}
      {reply.replies && reply.replies.map((nestedReply) => (
        <ReplyItem
          key={nestedReply.id}
          reply={nestedReply}
          onSupportToggle={onSupportToggle}
          onReport={onReport}
          level={level + 1}
        />
      ))}
    </div>
  );
};

export default ReplyItem;