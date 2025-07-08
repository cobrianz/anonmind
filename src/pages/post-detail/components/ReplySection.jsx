import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import ReplyItem from './ReplyItem';

const ReplySection = ({ replies, onAddReply, onSupportToggle, onReport }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [replyText, setReplyText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Newest First', icon: 'Clock' },
    { value: 'supported', label: 'Most Supported', icon: 'Heart' },
    { value: 'oldest', label: 'Oldest First', icon: 'History' }
  ];

  const sortedReplies = [...replies].sort((a, b) => {
    switch (sortBy) {
      case 'supported':
        return b.supportCount - a.supportCount;
      case 'oldest':
        return new Date(a.timestamp) - new Date(b.timestamp);
      case 'newest':
      default:
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      onAddReply(replyText);
      setReplyText('');
      setIsExpanded(false);
    }
  };

  const handleTextareaFocus = () => {
    setIsExpanded(true);
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
      {/* Reply Composition */}
      <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-3 sm:mb-4">
          Add Your Support
        </h3>
        
        <div className="flex space-x-3 sm:space-x-4">
          <div className="flex-shrink-0">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
              alt="Your anonymous avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onFocus={handleTextareaFocus}
              placeholder="Share your thoughts, offer support, or ask a question..."
              className={`w-full p-3 sm:p-4 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-therapeutic ${
                isExpanded ? 'min-h-[100px] sm:min-h-[120px]' : 'min-h-[60px] sm:min-h-[80px]'
              }`}
              maxLength={1000}
            />
            
            {isExpanded && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 sm:mt-3 gap-3 sm:gap-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                  <span className="text-xs sm:text-sm text-text-secondary">
                    {replyText.length}/1000 characters
                  </span>
                  <div className="flex items-center space-x-1 text-xs sm:text-sm text-text-secondary">
                    <Icon name="Shield" size={12} smSize={14} />
                    <span>Anonymous</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 sm:space-x-3 w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsExpanded(false);
                      setReplyText('');
                    }}
                    className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleSubmitReply}
                    disabled={replyText.trim().length === 0}
                    className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 w-full sm:w-auto"
                  >
                    Post Reply
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Replies Header with Sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h3 className="text-base sm:text-lg font-semibold text-text-primary">
          Replies ({replies.length})
        </h3>
        
        <div className="flex items-center space-x-2">
          <Icon name="ArrowUpDown" size={14} smSize={16} className="text-text-secondary" />
          <select
            value={sortBy} onChange={(e) => setSortBy(e.target.value)}
            className="text-xs sm:text-sm border border-border rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Replies List */}
      <div className="space-y-3 sm:space-y-4">
        {sortedReplies.length > 0 ? (
          sortedReplies.map((reply) => (
            <ReplyItem
              key={reply.id}
              reply={reply}
              onSupportToggle={onSupportToggle}
              onReport={onReport}
              level={0}
            />
          ))
        ) : (
          <div className="text-center py-8 sm:py-12 bg-surface rounded-lg">
            <Icon name="MessageCircle" size={40} smSize={48} className="text-text-secondary mx-auto mb-3 sm:mb-4" />
            <h4 className="text-base sm:text-lg font-medium text-text-primary mb-2">
              No replies yet
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary">
              Be the first to offer support and start the conversation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReplySection;
