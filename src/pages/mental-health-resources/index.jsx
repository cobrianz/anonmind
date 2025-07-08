import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import Breadcrumb from '../../components/ui/Breadcrumb';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import FilterSection from './components/FilterSection';
import FeaturedResources from './components/FeaturedResources';
import ResourceGrid from './components/ResourceGrid';
import CategorySection from './components/CategorySection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const MentalHealthResources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCost, setSelectedCost] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'category'
  const [loading, setLoading] = useState(false);

  // Mock resources data
  const allResources = [
    {
      id: 'crisis-1',
      name: 'National Suicide Prevention Lifeline',
      description: 'Free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week, across the United States.',
      phone: '988',
      website: 'https://suicidepreventionlifeline.org',
      address: 'Nationwide Service',
      icon: 'Phone',
      category: 'Crisis Hotlines',
      country: 'us',
      availability: '24/7',
      cost: 'Free',
      verified: true
    },
    {
      id: 'crisis-2',
      name: 'Crisis Text Line',
      description: 'Free, 24/7 support for those in crisis. Text HOME to 741741 from anywhere in the US to text with a trained Crisis Counselor.',
      phone: '741741',
      website: 'https://crisistextline.org',
      address: 'Text-based Service',
      icon: 'MessageSquare',
      category: 'Crisis Hotlines',
      country: 'us',
      availability: '24/7',
      cost: 'Free',
      verified: true
    },
    {
      id: 'crisis-3',
      name: 'SAMHSA National Helpline',
      description: 'Free, confidential, 24/7, 365-day-a-year treatment referral and information service for individuals and families facing mental health disorders.',
      phone: '1-800-662-4357',
      website: 'https://samhsa.gov',
      address: 'Nationwide Service',
      icon: 'HeartHandshake',
      category: 'Crisis Hotlines',
      country: 'us',
      availability: '24/7',
      cost: 'Free',
      verified: true
    },
    {
      id: 'therapy-1',
      name: 'BetterHelp',
      description: 'Professional counseling done securely online. Get matched with a licensed therapist and start therapy in under 48 hours.',
      website: 'https://betterhelp.com',
      address: 'Online Platform',
      icon: 'Users',
      category: 'Therapy Services',
      country: 'us',
      availability: 'Flexible',
      cost: 'Paid',
      verified: true
    },
    {
      id: 'therapy-2',
      name: 'Talkspace',
      description: 'Online therapy with licensed therapists. Text, audio, and video messaging with your dedicated therapist.',
      website: 'https://talkspace.com',
      address: 'Online Platform',
      icon: 'MessageCircle',
      category: 'Therapy Services',
      country: 'us',
      availability: 'Business Hours',
      cost: 'Paid',
      verified: true
    },
    {
      id: 'therapy-3',
      name: 'Psychology Today',
      description: 'Find therapists, psychiatrists, support groups, and treatment centers in your area. Comprehensive directory of mental health professionals.',
      website: 'https://psychologytoday.com',
      address: 'Directory Service',
      icon: 'Search',
      category: 'Therapy Services',
      country: 'us',
      availability: 'Business Hours',
      cost: 'Free',
      verified: true
    },
    {
      id: 'support-1',
      name: 'NAMI Support Groups',
      description: 'Free support groups for people with mental health conditions and their families. Peer-led groups available nationwide.',
      phone: '1-800-950-6264',
      website: 'https://nami.org',
      address: 'Multiple Locations',
      icon: 'Heart',
      category: 'Support Groups',
      country: 'us',
      availability: 'Scheduled',
      cost: 'Free',
      verified: true
    },
    {
      id: 'support-2',
      name: 'Depression and Bipolar Support Alliance',
      description: 'Peer-directed support groups for people living with depression and bipolar disorder. Online and in-person options available.',
      phone: '1-800-826-3632',
      website: 'https://dbsalliance.org',
      address: 'Multiple Locations',
      icon: 'Users2',
      category: 'Support Groups',
      country: 'us',
      availability: 'Scheduled',
      cost: 'Free',
      verified: true
    },
    {
      id: 'support-3',
      name: 'Anxiety and Depression Association',
      description: 'Support groups and resources for people with anxiety and depression. Find local groups and online communities.',
      website: 'https://adaa.org',
      address: 'Multiple Locations',
      icon: 'Shield',
      category: 'Support Groups',
      country: 'us',
      availability: 'Scheduled',
      cost: 'Free',
      verified: true
    },
    {
      id: 'self-help-1',
      name: 'Headspace',
      description: 'Meditation and mindfulness app with guided sessions for stress, anxiety, sleep, and focus. Free and premium content available.',
      website: 'https://headspace.com',
      address: 'Mobile App',
      icon: 'Brain',
      category: 'Self-Help Tools',
      country: 'us',
      availability: '24/7',
      cost: 'Free',
      verified: true
    },
    {
      id: 'self-help-2',
      name: 'Calm',
      description: 'Sleep stories, meditation, and relaxation techniques. Daily sessions for anxiety, stress relief, and better sleep.',
      website: 'https://calm.com',
      address: 'Mobile App',
      icon: 'Moon',
      category: 'Self-Help Tools',
      country: 'us',
      availability: '24/7',
      cost: 'Paid',
      verified: true
    },
    {
      id: 'self-help-3',
      name: 'MindShift',
      description: 'Free app designed to help teens and young adults cope with anxiety. Uses cognitive behavioral therapy strategies.',
      website: 'https://anxietycanada.com/resources/mindshift-app',
      address: 'Mobile App',
      icon: 'Smartphone',
      category: 'Self-Help Tools',
      country: 'ca',
      availability: '24/7',
      cost: 'Free',
      verified: true
    }
  ];

  // Filter resources based on search and filters
  const filteredResources = useMemo(() => {
    let filtered = allResources;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.name.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.category.toLowerCase().includes(query)
      );
    }

    // Country filter
    if (selectedCountry !== 'all') {
      filtered = filtered.filter(resource => resource.country === selectedCountry);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'crisis': 'Crisis Hotlines',
        'therapy': 'Therapy Services',
        'support': 'Support Groups',
        'self-help': 'Self-Help Tools'
      };
      filtered = filtered.filter(resource => resource.category === categoryMap[selectedCategory]);
    }

    // Cost filter
    if (selectedCost !== 'all') {
      filtered = filtered.filter(resource => 
        selectedCost === 'free' ? resource.cost === 'Free' : resource.cost !== 'Free'
      );
    }

    // Availability filter
    if (selectedAvailability !== 'all') {
      if (selectedAvailability === '24/7') {
        filtered = filtered.filter(resource => resource.availability === '24/7');
      } else if (selectedAvailability === 'business') {
        filtered = filtered.filter(resource => 
          resource.availability === 'Business Hours' || 
          resource.availability === 'Scheduled' ||
          resource.availability === 'Flexible'
        );
      }
    }

    return filtered;
  }, [searchQuery, selectedCountry, selectedCategory, selectedCost, selectedAvailability]);

  // Group resources by category for category view
  const resourcesByCategory = useMemo(() => {
    const grouped = {};
    filteredResources.forEach(resource => {
      if (!grouped[resource.category]) {
        grouped[resource.category] = [];
      }
      grouped[resource.category].push(resource);
    });
    return grouped;
  }, [filteredResources]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedCountry !== 'all') count++;
    if (selectedCategory !== 'all') count++;
    if (selectedCost !== 'all') count++;
    if (selectedAvailability !== 'all') count++;
    return count;
  }, [searchQuery, selectedCountry, selectedCategory, selectedCost, selectedAvailability]);

  // Handle actions
  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleWebsite = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  const handleDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com?q=${encodedAddress}`, '_blank', 'noopener,noreferrer');
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCountry('all');
    setSelectedCategory('all');
    setSelectedCost('all');
    setSelectedAvailability('all');
  };

  // Simulate loading when filters change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCountry, selectedCategory, selectedCost, selectedAvailability]);

  return (
    <>
      <Helmet>
        <title>Mental Health Resources - AnonMind</title>
        <meta name="description" content="Find crisis support, therapy services, support groups, and self-help tools. Access verified mental health resources with location-based filtering." />
        <meta name="keywords" content="mental health resources, crisis hotline, therapy services, support groups, self-help tools" />
      </Helmet>

      <CrisisHotlineBanner />
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb />
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={24} color="white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground">
                Mental Health Resources
              </h1>
            </div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Find verified crisis support, therapy services, support groups, and self-help tools. 
              All resources are carefully curated to provide safe and effective mental health support.
            </p>
          </div>

          {/* Featured Resources */}
          <FeaturedResources 
            onCall={handleCall}
            onWebsite={handleWebsite}
          />

          {/* Filter Section */}
          <FilterSection
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedCost={selectedCost}
            onCostChange={setSelectedCost}
            selectedAvailability={selectedAvailability}
            onAvailabilityChange={setSelectedAvailability}
            onClearFilters={handleClearFilters}
            activeFiltersCount={activeFiltersCount}
          />

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-foreground">
                {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
              </span>
              {activeFiltersCount > 0 && (
                <span className="text-sm text-text-secondary">
                  ({activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} applied)
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                size="sm"
                iconName="Grid3X3"
                onClick={() => setViewMode('grid')}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === 'category' ? 'primary' : 'ghost'}
                size="sm"
                iconName="List"
                onClick={() => setViewMode('category')}
              >
                Category
              </Button>
            </div>
          </div>

          {/* Resources Display */}
          {viewMode === 'grid' ? (
            <ResourceGrid
              resources={filteredResources}
              onCall={handleCall}
              onWebsite={handleWebsite}
              onDirections={handleDirections}
              loading={loading}
            />
          ) : (
            <div className="space-y-8">
              {Object.entries(resourcesByCategory).map(([category, resources]) => (
                <CategorySection
                  key={category}
                  category={category}
                  resources={resources}
                  onCall={handleCall}
                  onWebsite={handleWebsite}
                  onDirections={handleDirections}
                />
              ))}
            </div>
          )}

          {/* Emergency Footer */}
          <div className="mt-16 p-6 bg-gradient-to-r from-error-50 to-error-100 rounded-lg border border-error-200">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Icon name="AlertTriangle" size={24} className="text-error-600" />
                <h3 className="text-lg font-semibold text-error-900">
                  In Crisis? Get Immediate Help
                </h3>
              </div>
              <p className="text-error-800 mb-4">
                If you're having thoughts of suicide or are in immediate danger, don't wait. 
                Reach out for help right now.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="danger"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => handleCall('988')}
                >
                  Call 988 - Crisis Lifeline
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => handleCall('741741')}
                >
                  Text 741741 - Crisis Text Line
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloatingActionButton />
    </>
  );
};

export default MentalHealthResources;