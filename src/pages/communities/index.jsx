import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import Breadcrumb from '../../components/ui/Breadcrumb';
import SearchBar from './components/SearchBar';
import FilterSection from './components/FilterSection';
import CommunityCard from './components/CommunityCard';
import FeaturedCommunities from './components/FeaturedCommunities';
import JoinModal from './components/JoinModal';

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedModal, setSelectedModal] = useState(null);
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  // Mock communities data
  const communities = [
    {
      id: 1,
      name: 'Anxiety Support Circle',
      description: 'A safe space for those dealing with anxiety disorders to share experiences and coping strategies.',
      memberCount: 2847,
      category: 'anxiety',
      activityLevel: 'active',
      isVerified: true,
      isFeatured: true,
      recentActivity: '2 hours ago',
      tags: ['anxiety', 'support', 'coping'],
      memberAvatars: ['👤', '👥', '🟢', '🔵', '🟡'],
      recentPost: 'Just had a panic attack at work. Thank you all for your support yesterday...',
      guidelines: 'Be respectful, no medical advice, support only'
    },
    {
      id: 2,
      name: 'Depression Warriors',
      description: 'Together we fight the darkness. Share your journey and find strength in community.',
      memberCount: 1956,
      category: 'depression',
      activityLevel: 'active',
      isVerified: true,
      isFeatured: true,
      recentActivity: '1 hour ago',
      tags: ['depression', 'recovery', 'hope'],
      memberAvatars: ['🔴', '🟠', '🟣', '⚫', '🟤'],
      recentPost: 'Small wins today: got out of bed, took a shower, made breakfast...',
      guidelines: 'No self-harm content, focus on recovery and hope'
    },
    {
      id: 3,
      name: 'LGBTQ+ Mental Health',
      description: 'Supporting LGBTQ+ individuals with mental health challenges in a judgment-free environment.',
      memberCount: 1234,
      category: 'lgbtq',
      activityLevel: 'moderate',
      isVerified: true,
      isFeatured: false,
      recentActivity: '4 hours ago',
      tags: ['lgbtq', 'identity', 'acceptance'],
      memberAvatars: ['🌈', '🏳️‍🌈', '🔵', '🟡', '🟢'],
      recentPost: 'Coming out to family was hard but therapy helped me prepare...',
      guidelines: 'Respectful discussion only, no discrimination'
    },
    {
      id: 4,
      name: 'Student Mental Health',
      description: 'Academic stress, social pressures, and mental health support for students.',
      memberCount: 3421,
      category: 'students',
      activityLevel: 'active',
      isVerified: false,
      isFeatured: false,
      recentActivity: '30 minutes ago',
      tags: ['students', 'academic', 'stress'],
      memberAvatars: ['📚', '🎓', '🔵', '🟡', '🟢'],
      recentPost: 'Finals week is killing me. Any study tips that help with anxiety?',
      guidelines: 'Academic support and mental health focus'
    },
    {
      id: 5,
      name: 'Parent Support Network',
      description: 'Mental health support for parents dealing with stress, postpartum, and family challenges.',
      memberCount: 987,
      category: 'parents',
      activityLevel: 'moderate',
      isVerified: true,
      isFeatured: false,
      recentActivity: '2 hours ago',
      tags: ['parenting', 'family', 'support'],
      memberAvatars: ['👶', '👨‍👩‍👧', '🟢', '🔵', '🟡'],
      recentPost: 'Postpartum depression is real. Thank you for sharing your stories...',
      guidelines: 'Family-friendly content, parenting support focus'
    },
    {
      id: 6,
      name: 'Crisis Recovery',
      description: 'For those who have experienced mental health crises and are on the path to recovery.',
      memberCount: 654,
      category: 'crisis',
      activityLevel: 'quiet',
      isVerified: true,
      isFeatured: false,
      recentActivity: '6 hours ago',
      tags: ['crisis', 'recovery', 'healing'],
      memberAvatars: ['🌱', '🌟', '🔵', '🟡', '🟢'],
      recentPost: 'Six months since my breakdown. Things are getting better...',
      guidelines: 'No crisis content, recovery focus only'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Communities', count: communities.length },
    { id: 'anxiety', name: 'Anxiety', count: communities.filter(c => c.category === 'anxiety').length },
    { id: 'depression', name: 'Depression', count: communities.filter(c => c.category === 'depression').length },
    { id: 'lgbtq', name: 'LGBTQ+', count: communities.filter(c => c.category === 'lgbtq').length },
    { id: 'students', name: 'Students', count: communities.filter(c => c.category === 'students').length },
    { id: 'parents', name: 'Parents', count: communities.filter(c => c.category === 'parents').length },
    { id: 'crisis', name: 'Crisis Recovery', count: communities.filter(c => c.category === 'crisis').length }
  ];

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || community.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleJoinCommunity = (communityId) => {
    setJoinedCommunities(prev => 
      prev.includes(communityId) 
        ? prev.filter(id => id !== communityId)
        : [...prev, communityId]
    );
  };

  const handleOpenModal = (community) => {
    setSelectedModal(community);
  };

  const handleCloseModal = () => {
    setSelectedModal(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <CrisisHotlineBanner />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Find Your Community
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Connect with others who understand your journey. Join specialized support groups for mental health, recovery, and personal growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm text-text-secondary flex items-center justify-center space-x-6">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
                    {communities.filter(c => c.activityLevel === 'active').length} Active
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-warning rounded-full mr-2"></span>
                    {communities.filter(c => c.activityLevel === 'moderate').length} Moderate
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-text-secondary rounded-full mr-2"></span>
                    {communities.filter(c => c.activityLevel === 'quiet').length} Quiet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <Breadcrumb />
          
          {/* Search and Filter */}
          <div className="mb-8">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <FilterSection
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Featured Communities */}
          <FeaturedCommunities
            communities={communities.filter(c => c.isFeatured)}
            joinedCommunities={joinedCommunities}
            onJoinCommunity={handleJoinCommunity}
            onOpenModal={handleOpenModal}
          />

          {/* All Communities */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground">
                All Communities
              </h2>
              <div className="text-sm text-text-secondary">
                {filteredCommunities.length} of {communities.length} communities
              </div>
            </div>

            {filteredCommunities.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-medium text-foreground mb-2">No communities found</h3>
                <p className="text-text-secondary">
                  Try adjusting your search or filter to find communities that match your interests.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCommunities.map(community => (
                  <CommunityCard
                    key={community.id}
                    community={community}
                    isJoined={joinedCommunities.includes(community.id)}
                    onJoinCommunity={handleJoinCommunity}
                    onOpenModal={handleOpenModal}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Join Modal */}
      {selectedModal && (
        <JoinModal
          community={selectedModal}
          isJoined={joinedCommunities.includes(selectedModal.id)}
          onJoinCommunity={handleJoinCommunity}
          onClose={handleCloseModal}
        />
      )}

      <FloatingActionButton />
    </div>
  );
};

export default Communities;