import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const PostForm = ({ onSubmit, isSubmitting }) => {
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState({});

  const maxCharacters = 500;
  const availableTags = [
    { id: 'anxiety', label: 'Anxiety', color: 'bg-accent-100 text-accent-700' },
    { id: 'depression', label: 'Depression', color: 'bg-primary-100 text-primary-700' },
    { id: 'stress', label: 'Stress', color: 'bg-warning-100 text-warning-700' },
    { id: 'loneliness', label: 'Loneliness', color: 'bg-secondary-100 text-secondary-700' },
    { id: 'relationships', label: 'Relationships', color: 'bg-error-100 text-error-700' },
    { id: 'work', label: 'Work/Career', color: 'bg-success-100 text-success-700' }
  ];

  const handleContentChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      setContent(value);
      if (errors.content) {
        setErrors(prev => ({ ...prev, content: '' }));
      }
    }
  };

  const handleTagToggle = (tagId) => {
    setSelectedTags(prev => {
      if (prev.includes(tagId)) {
        return prev.filter(id => id !== tagId);
      } else {
        return [...prev, tagId];
      }
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!content.trim()) {
      newErrors.content = 'Please share your thoughts to help others connect with your experience.';
    } else if (content.trim().length < 10) {
      newErrors.content = 'Please share a bit more to help others understand your experience.';
    }
    
    if (selectedTags.length === 0) {
      newErrors.tags = 'Please select at least one tag to help others find your post.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        content: content.trim(),
        tags: selectedTags
      });
    }
  };

  const handleSaveDraft = () => {
    if (content.trim()) {
      localStorage.setItem('anonmind_draft', JSON.stringify({
        content: content.trim(),
        tags: selectedTags,
        timestamp: new Date().toISOString()
      }));
      // Show success message or toast
    }
  };

  const remainingCharacters = maxCharacters - content.length;

  return (
    <div className="bg-card rounded-lg shadow-therapeutic-sm p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Content Input */}
        <div>
          <label htmlFor="post-content" className="block text-sm sm:text-base font-medium text-text-primary mb-2">
            Share your experience
          </label>
          <div className="relative">
            <textarea
              id="post-content"
              value={content}
              onChange={handleContentChange}
              placeholder="Your story matters. Share what's on your mind - whether it's a struggle you're facing, a breakthrough you've had, or support you need. This is a safe space where your voice can help others feel less alone."
              className={`w-full min-h-[120px] sm:min-h-[160px] px-3 sm:px-4 py-2 sm:py-3 border rounded-lg resize-y focus:outline-none focus:ring-3 focus:ring-primary focus:border-primary transition-therapeutic ${
                errors.content 
                  ? 'border-error bg-error-50' 
                  : 'border-border bg-background hover:border-primary-300'
              }`}
              aria-describedby={errors.content ? 'content-error' : 'content-help'}
            />
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center space-x-2">
              <span className={`text-xs sm:text-sm ${
                remainingCharacters < 50 
                  ? 'text-warning-600' 
                  : remainingCharacters < 20 
                    ? 'text-error-600' 
                    : 'text-text-secondary'
              }`}>
                {remainingCharacters} left
              </span>
            </div>
          </div>
          {errors.content && (
            <p id="content-error" className="mt-2 text-xs sm:text-sm text-error-600 flex items-center">
              <Icon name="AlertCircle" size={14} smSize={16} className="mr-1" />
              {errors.content}
            </p>
          )}
          {!errors.content && (
            <p id="content-help" className="mt-2 text-xs sm:text-sm text-text-secondary">
              Share authentically - your experience can help others feel less alone.
            </p>
          )}
        </div>

        {/* Tag Selection */}
        <div>
          <label className="block text-sm sm:text-base font-medium text-text-primary mb-2 sm:mb-3">
            Choose relevant tags
          </label>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => handleTagToggle(tag.id)}
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-therapeutic focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  selectedTags.includes(tag.id)
                    ? `${tag.color} ring-2 ring-primary ring-offset-2`
                    : 'bg-surface text-text-secondary hover:bg-muted'
                }`}
                aria-pressed={selectedTags.includes(tag.id)}
              >
                {selectedTags.includes(tag.id) && (
                  <Icon name="Check" size={12} smSize={14} className="inline mr-1" />
                )}
                {tag.label}
              </button>
            ))}
          </div>
          {errors.tags && (
            <p className="mt-2 text-xs sm:text-sm text-error-600 flex items-center">
              <Icon name="AlertCircle" size={14} smSize={16} className="mr-1" />
              {errors.tags}
            </p>
          )}
        </div>

        {/* Preview Toggle and Actions */}
        <div className="flex flex-row items-center justify-between pt-4 border-t border-border gap-2 sm:gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowPreview(!showPreview)}
            iconName={showPreview ? "EyeOff" : "Eye"}
            iconPosition="left"
            disabled={!content.trim()}
            className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 w-auto"
          >
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </Button>

          <div className="flex flex-row items-center gap-2 sm:gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleSaveDraft}
              iconName="Save"
              iconPosition="left"
              disabled={!content.trim()}
              className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 w-auto"
            >
              Save Draft
            </Button>
            
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              iconName="Send"
              iconPosition=" Punctuation correction: removed extra space before 'right'
              disabled={isSubmitting}"
              className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 w-auto">
              {isSubmitting ? 'Sharing...' : 'Share Anonymously'}
            </Button>
          </div>
        </div>
      </form>

      {/* Preview Section */}
      {showPreview && content.trim() && (
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
          <h3 className="text-sm sm:text-base font-medium text-text-primary mb-2 sm:mb-3 flex items-center">
            <Icon name="Eye" size={14} smSize={16} className="mr-2" />
            Preview
          </h3>
          <div className="bg-surface rounded-lg p-3 sm:p-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} smSize={20} color="white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs sm:text-sm font-medium text-text-primary">Anonymous</span>
                  <span className="text-xs text-text-secondary">just now</span>
                </div>
                <p className="text-text-primary whitespace-pre-wrap mb-2 sm:mb-3 text-sm sm:text-base">{content}</p>
                {selectedTags.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-1 mb-2 sm:mb-3">
                    {selectedTags.map(tagId => {
                      const tag = availableTags.find(t => t.id === tagId);
                      return (
                        <span key={tagId} className={`px-2 py-1 rounded-full text-xs ${tag.color}`}>
                          {tag.label}
                        </span>
                      );
                    })}
                  </div>
                )}
                <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-text-secondary">
                  <button className="flex items-center space-x-1 hover:text-error-600 transition-therapeutic">
                    <Icon name="Heart" size={14} smSize={16} />
                    <span>0</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-therapeutic">
                    <Icon name="MessageCircle" size={14} smSize={16} />
                    <span>0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostForm;