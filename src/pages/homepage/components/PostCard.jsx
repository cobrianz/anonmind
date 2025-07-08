import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PostCard = ({ post }) => {
  const [isSupported, setIsSupported] = useState(post.isSupported || false);
  const [supportCount, setSupportCount] = useState(post.supportCount || 0);

  const handleSupport = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isSupported) {
      setIsSupported(false);
      setSupportCount(prev => prev - 1);
    } else {
      setIsSupported(true);
      setSupportCount(prev => prev + 1);
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - postTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Link to="/post-detail" state={{ post }}>
      <article className="bg-card rounded-lg shadow-therapeutic-sm hover:shadow-therapeutic-md transition-therapeutic p-6 border border-border group">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src={post.avatar}
                alt="Anonymous user avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
            </div>
            <div>
              <h3 className="font-medium text-foreground">Anonymous</h3>
              <p className="text-sm text-text-secondary">{formatTimeAgo(post.timestamp)}</p>
            </div>
          </div>
          
          {/* Mood indicator */}
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            post.mood === 'struggling' ? 'bg-error-50 text-error-600' :
            post.mood === 'improving'? 'bg-warning-50 text-warning-600' : 'bg-success-50 text-success-600'
          }`}>
            {post.mood === 'struggling' ? '😔 Struggling' :
             post.mood === 'improving'? '😊 Improving' : '😌 Peaceful'}
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-foreground leading-relaxed group-hover:text-primary transition-therapeutic">
            {truncateText(post.content)}
          </p>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full border border-border"
              >
                <span className="mr-1">{tag.emoji}</span>
                {tag.name}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full border border-border">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSupport}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-therapeutic focus-ring ${
                isSupported
                  ? 'bg-error-50 text-error-600 hover:bg-error-100' :'text-text-secondary hover:bg-error-50 hover:text-error-600'
              }`}
            >
              <Icon 
                name={isSupported ? "Heart" : "Heart"} 
                size={16} 
                className={isSupported ? "fill-current" : ""} 
              />
              <span>{supportCount}</span>
            </button>

            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="MessageCircle" size={16} />
              <span className="text-sm">{post.replyCount || 0}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-text-secondary group-hover:text-primary transition-therapeutic">
            <span className="text-sm">Read more</span>
            <Icon name="ArrowRight" size={16} />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;