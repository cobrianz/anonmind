import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DraftManager = ({ onLoadDraft }) => {
  const [savedDraft, setSavedDraft] = useState(null);
  const [showDraftPrompt, setShowDraftPrompt] = useState(false);

  useEffect(() => {
    // Check for saved draft on component mount
    const draft = localStorage.getItem('anonmind_draft');
    if (draft) {
      try {
        const parsedDraft = JSON.parse(draft);
        setSavedDraft(parsedDraft);
        setShowDraftPrompt(true);
      } catch (error) {
        // Clear invalid draft
        localStorage.removeItem('anonmind_draft');
      }
    }
  }, []);

  const handleLoadDraft = () => {
    if (savedDraft) {
      onLoadDraft(savedDraft);
      setShowDraftPrompt(false);
    }
  };

  const handleDiscardDraft = () => {
    localStorage.removeItem('anonmind_draft');
    setSavedDraft(null);
    setShowDraftPrompt(false);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'less than an hour ago';
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  if (!showDraftPrompt || !savedDraft) {
    return null;
  }

  return (
    <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Icon name="FileText" size={16} className="text-warning-600" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-sm font-medium text-warning-800 mb-1">
            Draft Found
          </h3>
          <p className="text-xs text-warning-700 mb-2">
            You have an unsaved draft from {formatTimestamp(savedDraft.timestamp)}
          </p>
          
          {/* Draft Preview */}
          <div className="bg-warning-100 rounded-md p-3 mb-3">
            <p className="text-xs text-warning-800 line-clamp-2">
              {savedDraft.content.substring(0, 100)}
              {savedDraft.content.length > 100 && '...'}
            </p>
            {savedDraft.tags && savedDraft.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {savedDraft.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-warning-200 text-warning-800 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
                {savedDraft.tags.length > 3 && (
                  <span className="px-2 py-1 bg-warning-200 text-warning-800 rounded-full text-xs">
                    +{savedDraft.tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button
              variant="warning"
              size="sm"
              onClick={handleLoadDraft}
              iconName="Upload"
              iconPosition="left"
            >
              Load Draft
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDiscardDraft}
              iconName="Trash2"
              iconPosition="left"
            >
              Discard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftManager;