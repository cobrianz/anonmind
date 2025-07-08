import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import TagFilter from './components/TagFilter';
import PostsFeed from './components/PostsFeed';
import Sidebar from './components/Sidebar';

const Homepage = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Mock tags data
  const availableTags = [
    { id: 'anxiety', name: 'Anxiety', emoji: '😰', count: 234 },
    { id: 'depression', name: 'Depression', emoji: '😞', count: 189 },
    { id: 'stress', name: 'Stress', emoji: '😤', count: 156 },
    { id: 'loneliness', name: 'Loneliness', emoji: '😔', count: 98 },
    { id: 'therapy', name: 'Therapy', emoji: '🗣️', count: 87 },
    { id: 'recovery', name: 'Recovery', emoji: '🌱', count: 76 },
    { id: 'self-care', name: 'Self Care', emoji: '🧘', count: 65 },
    { id: 'panic-attacks', name: 'Panic Attacks', emoji: '😱', count: 54 },
    { id: 'relationships', name: 'Relationships', emoji: '💕', count: 43 },
    { id: 'work-stress', name: 'Work Stress', emoji: '💼', count: 38 },
    { id: 'family', name: 'Family', emoji: '👨‍👩‍👧‍👦', count: 32 },
    { id: 'grief', name: 'Grief', emoji: '💔', count: 29 }
  ];

  const handleTagToggle = (tagId) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleClearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <CrisisHotlineBanner />
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <Breadcrumb />
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {/* Recent Posts Section */}
              <section id="recent-posts" className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground">
                    Recent Stories
                  </h2>
                  <div className="text-sm text-text-secondary">
                    {selectedTags.length > 0 && (
                      <span>{selectedTags.length} filter{selectedTags.length !== 1 ? 's' : ''} active</span>
                    )}
                  </div>
                </div>

                {/* Tag Filter */}
                <TagFilter
                  tags={availableTags}
                  selectedTags={selectedTags}
                  onTagToggle={handleTagToggle}
                  onClearAll={handleClearAllTags}
                />

                {/* Posts Feed */}
                <PostsFeed selectedTags={selectedTags} />
              </section>
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24">
                <Sidebar />
              </div>
            </div>
          </div>

          {/* Mobile Sidebar Content */}
          <div className="lg:hidden mt-12 space-y-8">
            <div className="bg-error-50 rounded-lg p-6 border border-error-200">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-error-800 mb-4">Need Immediate Help?</h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:988"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-error text-error-foreground rounded-lg font-medium hover:bg-error-600 transition-therapeutic focus-ring"
                  >
                    <span>Call 988</span>
                  </a>
                  <a
                    href="sms:741741"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-error text-error-foreground rounded-lg font-medium hover:bg-error-600 transition-therapeutic focus-ring"
                  >
                    <span>Text 741741</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloatingActionButton />
    </div>
  );
};

export default Homepage;