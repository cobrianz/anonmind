import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ShareModal = ({ isOpen, onClose, postId }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareUrl = `${window.location.origin}/post-detail?id=${postId}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: 'Link',
      action: handleCopyLink,
      description: 'Copy link to share anywhere'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Found this supportive post on AnonMind - a safe space for mental health support')}`,
          '_blank'
        );
      },
      description: 'Share on Twitter'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      action: () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          '_blank'
        );
      },
      description: 'Share on Facebook'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      action: () => {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`Check out this supportive post: ${shareUrl}`)}`,
          '_blank'
        );
      },
      description: 'Share via WhatsApp'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-card rounded-lg shadow-therapeutic-lg border border-border w-full max-w-md">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-text-primary">
            Share Post
          </h3>
          <Button
            variant="ghost"
            onClick={onClose}
            className="p-2"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="text-sm text-text-secondary mb-6">
            Help spread awareness and support by sharing this post responsibly.
          </p>

          {/* Share Options */}
          <div className="space-y-3">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className="w-full flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-primary-200 hover:bg-primary-50 transition-therapeutic focus-ring text-left"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name={option.icon} size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-text-primary">
                    {option.name}
                    {option.name === 'Copy Link' && copied && (
                      <span className="ml-2 text-success text-sm">Copied!</span>
                    )}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {option.description}
                  </div>
                </div>
                <Icon name="ChevronRight" size={16} className="text-text-secondary" />
              </button>
            ))}
          </div>

          {/* Privacy Notice */}
          <div className="mt-6 p-4 bg-warning-50 rounded-lg border border-warning-200">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={16} className="text-warning-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-warning-800 mb-1">
                  Privacy Protected
                </h4>
                <p className="text-xs text-warning-700">
                  All shared links maintain user anonymity and do not reveal personal information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-3 p-6 border-t border-border">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;