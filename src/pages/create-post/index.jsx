import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import PostForm from './components/PostForm';
import AnonymousAvatar from './components/AnonymousAvatar';
import PrivacyReminder from './components/PrivacyReminder';
import SuccessModal from './components/SuccessModal';
import DraftManager from './components/DraftManager';
import Icon from '../../components/AppIcon';

const CreatePost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({ content: '', tags: [] });
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear any saved draft
      localStorage.removeItem('anonmind_draft');
      
      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({ content: '', tags: [] });
      
    } catch (error) {
      console.error('Error submitting post:', error);
      // Handle error (show error message, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoadDraft = (draft) => {
    setFormData({
      content: draft.content,
      tags: draft.tags
    });
  };

  const handleCreateAnother = () => {
    setShowSuccessModal(false);
    // Form is already reset, just close modal
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <CrisisHotlineBanner />
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="PenTool" size={32} color="white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-2">
            Share Your Story
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your experience matters. Share anonymously with a supportive community that understands your journey.
          </p>
        </div>

        {/* Draft Manager */}
        <DraftManager onLoadDraft={handleLoadDraft} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Column */}
          <div className="lg:col-span-2 space-y-6">
            <PostForm 
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
              initialData={formData}
            />
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <AnonymousAvatar />
            <PrivacyReminder />
            
            {/* Quick Tips */}
            <div className="bg-card rounded-lg shadow-therapeutic-sm p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Lightbulb" size={20} className="mr-2 text-accent-600" />
                Sharing Tips
              </h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success-600 mt-0.5 flex-shrink-0" />
                  <span>Be authentic - your genuine experience helps others</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success-600 mt-0.5 flex-shrink-0" />
                  <span>Use relevant tags to help others find your post</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success-600 mt-0.5 flex-shrink-0" />
                  <span>Remember that sharing can be healing for both you and others</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success-600 mt-0.5 flex-shrink-0" />
                  <span>Take your time - there's no rush to share</span>
                </li>
              </ul>
            </div>

            {/* Community Guidelines */}
            <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-accent-800 mb-2 flex items-center">
                <Icon name="Users" size={16} className="mr-2" />
                Community Guidelines
              </h4>
              <ul className="text-xs text-accent-700 space-y-1">
                <li>• Be respectful and supportive</li>
                <li>• No personal attacks or judgment</li>
                <li>• Avoid sharing personal contact information</li>
                <li>• Report inappropriate content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="mt-12 bg-error-50 border border-error-200 rounded-lg p-6">
          <div className="text-center">
            <Icon name="AlertTriangle" size={24} className="text-error-600 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-error-800 mb-2">
              Need Immediate Help?
            </h3>
            <p className="text-sm text-error-700 mb-4">
              If you're in crisis or having thoughts of self-harm, please reach out for immediate support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:988"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-error text-error-foreground rounded-lg hover:bg-error-600 transition-therapeutic focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
              >
                <Icon name="Phone" size={16} />
                <span>Call 988 - Crisis Lifeline</span>
              </a>
              <a
                href="sms:741741"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-error-600 text-error-foreground rounded-lg hover:bg-error-700 transition-therapeutic focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
              >
                <Icon name="MessageSquare" size={16} />
                <span>Text 741741 - Crisis Text Line</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <FloatingActionButton />
      
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        onCreateAnother={handleCreateAnother}
      />
    </div>
  );
};

export default CreatePost;