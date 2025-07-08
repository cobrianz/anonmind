import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ReportModal = ({ isOpen, onClose, postId, type = 'post' }) => {
  const [selectedReason, setSelectedReason] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const reportReasons = [
    {
      value: 'harmful_content',
      label: 'Harmful or dangerous content',
      description: 'Content that could cause harm to self or others'
    },
    {
      value: 'harassment',
      label: 'Harassment or bullying',
      description: 'Targeting, intimidating, or bullying behavior'
    },
    {
      value: 'spam',
      label: 'Spam or irrelevant content',
      description: 'Promotional content or off-topic posts'
    },
    {
      value: 'misinformation',
      label: 'Misinformation',
      description: 'False or misleading health information'
    },
    {
      value: 'inappropriate',
      label: 'Inappropriate content',
      description: 'Content not suitable for this platform'
    },
    {
      value: 'other',
      label: 'Other',
      description: 'Please specify in additional details'
    }
  ];

  const handleSubmit = async () => {
    if (!selectedReason) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto close after showing success
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setSelectedReason('');
      setAdditionalDetails('');
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    setSelectedReason('');
    setAdditionalDetails('');
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="bg-card rounded-lg shadow-therapeutic-lg border border-border w-full max-w-md p-8 text-center">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Report Submitted
          </h3>
          <p className="text-text-secondary">
            Thank you for helping keep our community safe. We'll review this report promptly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-card rounded-lg shadow-therapeutic-lg border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-text-primary">
            Report {type === 'post' ? 'Post' : 'Reply'}
          </h3>
          <Button
            variant="ghost"
            onClick={handleClose}
            className="p-2"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="text-sm text-text-secondary mb-6">
            Help us maintain a safe and supportive community. Your report will be reviewed by our moderation team.
          </p>

          {/* Report Reasons */}
          <div className="space-y-3 mb-6">
            <label className="block text-sm font-medium text-text-primary mb-3">
              Why are you reporting this {type}?
            </label>
            {reportReasons.map((reason) => (
              <label
                key={reason.value}
                className={`flex items-start space-x-3 p-4 rounded-lg border cursor-pointer transition-therapeutic ${
                  selectedReason === reason.value
                    ? 'border-primary bg-primary-50' :'border-border hover:border-primary-200 hover:bg-surface'
                }`}
              >
                <input
                  type="radio"
                  name="reportReason"
                  value={reason.value}
                  checked={selectedReason === reason.value}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="mt-1 text-primary focus:ring-primary"
                />
                <div className="flex-1">
                  <div className="font-medium text-text-primary text-sm">
                    {reason.label}
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    {reason.description}
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Additional Details */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Additional details (optional)
            </label>
            <textarea
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              placeholder="Provide any additional context that might help our review..."
              className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows="4"
              maxLength={500}
            />
            <div className="text-xs text-text-secondary mt-1">
              {additionalDetails.length}/500 characters
            </div>
          </div>

          {/* Warning Notice */}
          <div className="p-4 bg-warning-50 rounded-lg border border-warning-200 mb-6">
            <div className="flex items-start space-x-3">
              <Icon name="AlertTriangle" size={16} className="text-warning-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-warning-800 mb-1">
                  Important Notice
                </h4>
                <p className="text-xs text-warning-700">
                  False reports may result in restrictions on your account. Please only report content that genuinely violates our community guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-3 p-6 border-t border-border">
          <Button variant="ghost" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleSubmit}
            disabled={!selectedReason || isSubmitting}
            loading={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Report'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;