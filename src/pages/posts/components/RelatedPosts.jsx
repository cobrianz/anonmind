import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedPosts = ({ posts, currentPostId }) => {
  const filteredPosts = posts.filter(post => post.id !== currentPostId);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - postTime) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (filteredPosts.length === 0) {
    return (
      <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Related Posts
        </h3>
        <div className="text-center py-8">
          <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
          <p className="text-text-secondary">
            No related posts found at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
        <Icon name="BookOpen" size={20} className="mr-2" />
        Related Posts
      </h3>
      
      <div className="space-y-4">
        {filteredPosts.slice(0, 5).map((post) => (
          <Link
            key={post.id}
            to={`/post-detail?id=${post.id}`}
            className="block p-4 rounded-lg border border-border hover:border-primary-200 hover:bg-primary-50 transition-therapeutic focus-ring"
          >
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src={post.avatar}
                  alt="Anonymous user avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs text-text-secondary">
                    {formatTimeAgo(post.timestamp)}
                  </span>
                  <span className="text-xs text-text-secondary">•</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={12} className="text-error" />
                    <span className="text-xs text-text-secondary">{post.supportCount}</span>
                  </div>
                </div>
                
                <p className="text-sm text-text-primary leading-relaxed mb-2">
                  {truncateText(post.content)}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-text-secondary">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <Link
          to="/homepage"
          className="flex items-center justify-center space-x-2 text-sm text-primary hover:text-primary-600 transition-therapeutic focus-ring rounded-lg py-2"
        >
          <span>View all posts</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default RelatedPosts;