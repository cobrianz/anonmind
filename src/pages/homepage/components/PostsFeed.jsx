import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Icon from '../../../components/AppIcon';

const PostsFeed = ({ selectedTags }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Mock posts data
  const mockPosts = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1c4?w=150&h=150&fit=crop&crop=face",
      content: `I've been struggling with anxiety for months now. Every morning feels like climbing a mountain. The constant worry about things that might never happen is exhausting. I know I should probably talk to someone, but I'm scared of being judged. Has anyone else felt this overwhelming fear of the unknown? Sometimes I wonder if I'm just being dramatic, but the physical symptoms are so real - racing heart, sweating, can't concentrate. I just want to feel normal again.`,
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      mood: 'struggling',
      tags: [
        { id: 'anxiety', name: 'Anxiety', emoji: '😰' },
        { id: 'fear', name: 'Fear', emoji: '😨' }
      ],
      supportCount: 24,
      replyCount: 8,
      isSupported: false
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Today marks 6 months since I started therapy, and I wanted to share some hope with anyone who's on the fence about getting help. I was terrified to make that first appointment. I thought I could handle everything on my own, but I was drowning. My therapist helped me understand that asking for help isn't weakness - it's courage. The journey isn't linear, and there are still tough days, but I have tools now. I have hope. If you're reading this and struggling, please know that it's okay to not be okay, and it's okay to ask for help.`,
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      mood: 'improving',
      tags: [
        { id: 'therapy', name: 'Therapy', emoji: '🗣️' },
        { id: 'hope', name: 'Hope', emoji: '🌟' },
        { id: 'recovery', name: 'Recovery', emoji: '🌱' }
      ],
      supportCount: 67,
      replyCount: 15,
      isSupported: true
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `The loneliness is the hardest part. I moved to a new city for work six months ago, and I haven't made any real connections. I spend most weekends alone, scrolling through social media, watching everyone else seem so happy and connected. I know I should put myself out there more, but social anxiety makes it feel impossible. Even simple things like going to a coffee shop or joining a gym class feel overwhelming. I miss having people who really know me. How do you build meaningful relationships as an adult? Sometimes I feel like I'm invisible.`,
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      mood: 'struggling',
      tags: [
        { id: 'loneliness', name: 'Loneliness', emoji: '😔' },
        { id: 'social-anxiety', name: 'Social Anxiety', emoji: '😰' },
        { id: 'friendship', name: 'Friendship', emoji: '👥' }
      ],
      supportCount: 31,
      replyCount: 12,
      isSupported: false
    },
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `I wanted to share something that's been helping me lately. I started a gratitude journal three weeks ago, and it's been surprisingly powerful. Every morning, I write down three things I'm grateful for, no matter how small. Today it was: my morning coffee, a text from my sister, and the fact that I got out of bed even though depression was telling me not to. It doesn't cure everything, but it helps shift my focus from what's wrong to what's still good. Some days it's harder to find things to write, but that's when I need it most.`,
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
      mood: 'improving',
      tags: [
        { id: 'depression', name: 'Depression', emoji: '😞' },
        { id: 'gratitude', name: 'Gratitude', emoji: '🙏' },
        { id: 'coping', name: 'Coping', emoji: '💪' }
      ],
      supportCount: 45,
      replyCount: 9,
      isSupported: false
    },
    {
      id: 5,
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      content: `Panic attacks are terrifying. I had one at work yesterday during a meeting, and I felt so embarrassed. My heart was racing, I couldn't breathe properly, and I felt like I was going to die. I had to excuse myself and spent 20 minutes in the bathroom trying to calm down. I'm worried my colleagues think I'm unstable or can't handle pressure. The worst part is not knowing when the next one will hit. I've been avoiding situations that might trigger them, but that's making my world smaller and smaller. I feel trapped by my own mind.`,
      timestamp: new Date(Date.now() - 14400000), // 4 hours ago
      mood: 'struggling',
      tags: [
        { id: 'panic-attacks', name: 'Panic Attacks', emoji: '😱' },
        { id: 'work-stress', name: 'Work Stress', emoji: '💼' },
        { id: 'embarrassment', name: 'Embarrassment', emoji: '😳' }
      ],
      supportCount: 28,
      replyCount: 11,
      isSupported: false
    },
    {
      id: 6,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: `I've been clean from self-harm for 100 days today. I never thought I'd make it this far. The urges still come, especially when I'm overwhelmed or feel like I've disappointed someone. But I've learned to recognize the warning signs and have developed healthier coping mechanisms. I call my therapist, go for a run, or use ice cubes on my skin instead. It's not easy, and some days are harder than others, but I'm proud of how far I've come. To anyone struggling with this, please know that recovery is possible. You're stronger than you think.`,
      timestamp: new Date(Date.now() - 18000000), // 5 hours ago
      mood: 'improving',
      tags: [
        { id: 'self-harm', name: 'Self-Harm Recovery', emoji: '🩹' },
        { id: 'milestone', name: 'Milestone', emoji: '🎯' },
        { id: 'recovery', name: 'Recovery', emoji: '🌱' }
      ],
      supportCount: 89,
      replyCount: 23,
      isSupported: true
    }
  ];

  // Filter posts based on selected tags
  const getFilteredPosts = () => {
    if (selectedTags.length === 0) return mockPosts;
    
    return mockPosts.filter(post => 
      post.tags.some(tag => selectedTags.includes(tag.id))
    );
  };

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPosts(getFilteredPosts());
      setLoading(false);
    }, 500);
  }, [selectedTags]);

  const loadMorePosts = () => {
    setLoadingMore(true);
    // Simulate loading more posts
    setTimeout(() => {
      const additionalPosts = mockPosts.slice(0, 3).map(post => ({
        ...post,
        id: post.id + 100,
        timestamp: new Date(post.timestamp.getTime() - 86400000) // 1 day earlier
      }));
      setPosts(prev => [...prev, ...additionalPosts]);
      setLoadingMore(false);
      setHasMore(false); // For demo purposes
    }, 1000);
  };

  // Skeleton loading component
  const PostSkeleton = () => (
    <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 border border-border animate-pulse">
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-10 h-10 bg-surface rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-surface rounded w-24 mb-2"></div>
          <div className="h-3 bg-surface rounded w-16"></div>
        </div>
        <div className="h-6 bg-surface rounded-full w-20"></div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-surface rounded w-full"></div>
        <div className="h-4 bg-surface rounded w-full"></div>
        <div className="h-4 bg-surface rounded w-3/4"></div>
      </div>
      <div className="flex space-x-2 mb-4">
        <div className="h-6 bg-surface rounded-full w-16"></div>
        <div className="h-6 bg-surface rounded-full w-20"></div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex space-x-4">
          <div className="h-8 bg-surface rounded-full w-16"></div>
          <div className="h-8 bg-surface rounded-full w-12"></div>
        </div>
        <div className="h-4 bg-surface rounded w-20"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {[...Array(6)].map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex items-center justify-center w-16 h-16 bg-surface rounded-full mx-auto mb-4">
          <Icon name="MessageSquare" size={32} className="text-text-secondary" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No posts found</h3>
        <p className="text-text-secondary mb-6">
          {selectedTags.length > 0 
            ? "Try adjusting your filters or check back later for new posts."
            : "Be the first to share your story and start the conversation."
          }
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load more button */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={loadMorePosts}
            disabled={loadingMore}
            className="flex items-center space-x-2 mx-auto px-6 py-3 bg-surface text-text-secondary rounded-lg hover:bg-primary-50 hover:text-primary transition-therapeutic focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingMore ? (
              <>
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span>Loading more posts...</span>
              </>
            ) : (
              <>
                <Icon name="ChevronDown" size={20} />
                <span>Load more posts</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PostsFeed;