import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import Breadcrumb from '../../components/ui/Breadcrumb';
import PostContent from './components/PostContent';
import ReplySection from './components/ReplySection';
import RelatedPosts from './components/RelatedPosts';
import ShareModal from './components/ShareModal';
import ReportModal from './components/ReportModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const PostDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const postId = searchParams.get('id') || '1';

  const [currentPost, setCurrentPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportType, setReportType] = useState('post');
  const [reportTargetId, setReportTargetId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data
  const mockPosts = [
    {
      id: '1',
      content: `I've been struggling with anxiety for months now, and it feels like it's getting worse. Every morning I wake up with this heavy feeling in my chest, and simple tasks like going to the grocery store or answering emails feel overwhelming.\n\nI know I should probably talk to someone professional, but I'm scared of being judged or not being taken seriously. Has anyone else felt this way? How did you take that first step to get help?\n\nI just want to feel normal again and not have this constant worry consuming my thoughts. Some days are better than others, but lately, the bad days seem to outnumber the good ones.`,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user1',
      tags: ['anxiety', 'seeking-help', 'daily-struggles'],
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      supportCount: 24,
      replyCount: 8,
      isSupported: false
    },
    {
      id: '2',content: `Today marks 6 months since I started therapy, and I wanted to share some hope with anyone who might be hesitating to take that step.\n\nIt wasn't easy at first. I remember sitting in the waiting room for my first appointment, palms sweating, almost walking out twice. But my therapist made me feel so comfortable and understood.\n\nThe biggest thing I've learned is that healing isn't linear. Some weeks I felt amazing, others I felt like I was back at square one. But overall, the trajectory has been upward.\n\nIf you're on the fence about getting help, please consider it. You deserve support and you deserve to feel better.`,avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user2',
      tags: ['therapy', 'healing-journey', 'hope'],
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      supportCount: 42,
      replyCount: 15,
      isSupported: true
    },
    {
      id: '3',content: `I lost my job last month and I'm struggling to stay positive. The rejection emails keep coming and I'm starting to take it personally.\n\nMy savings are running low and I feel like I'm letting my family down. I know this is temporary but it's hard to see the light at the end of the tunnel right now.\n\nJust needed to get this off my chest. Thanks for listening.`,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user3',
      tags: ['job-loss', 'financial-stress', 'support-needed'],
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      supportCount: 18,
      replyCount: 12,
      isSupported: false
    }
  ];

  const mockReplies = [
    {
      id: 'r1',
      content: `I completely understand what you're going through. I had similar feelings about a year ago, and taking that first step to call a therapist was terrifying but so worth it.\n\nOne thing that helped me was researching therapists online first, reading their bios, and finding someone who specialized in anxiety. Many offer brief phone consultations to see if you're a good fit.\n\nYou're already showing so much strength by recognizing you need support. That's actually the hardest part.`,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reply1',
      timestamp: new Date(Date.now() - 90 * 60 * 1000),
      supportCount: 12,
      isSupported: false,
      replies: [
        {
          id: 'r1-1',
          content: `Thank you so much for this. It really helps to know I'm not alone in feeling scared about reaching out. I think I'll start by looking up some therapists in my area this weekend.`,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reply1-1',
          timestamp: new Date(Date.now() - 60 * 60 * 1000),
          supportCount: 8,
          isSupported: true,
          replies: []
        }
      ]
    },
    {
      id: 'r2',
      content: `Your feelings are completely valid. Anxiety can make everything feel so much harder than it actually is. \n\nSomething that helped me in the beginning was starting with small steps - maybe calling a mental health hotline first, or even just talking to your regular doctor about how you're feeling. They can often provide referrals.\n\nAlso, remember that therapists are trained to help people who are struggling. You won't be judged - you'll be supported.`,avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reply2',
      timestamp: new Date(Date.now() - 120 * 60 * 1000),
      supportCount: 15,
      isSupported: true,
      replies: []
    },
    {
      id: 'r3',content: `I want to echo what others have said - you're not alone in this. The fact that you're here sharing your experience shows incredible courage.\n\nOne practical tip: many therapists offer sliding scale fees or there might be community mental health centers in your area with more affordable options. Don't let cost be a barrier if that's a concern.\n\nSending you so much support. You've got this! 💙`,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reply3',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      supportCount: 9,
      isSupported: false,
      replies: []
    }
  ];

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    setTimeout(() => {
      const post = mockPosts.find(p => p.id === postId);
      if (post) {
        setCurrentPost(post);
        setReplies(mockReplies);
        setRelatedPosts(mockPosts.filter(p => p.id !== postId));
      } else {
        // If post not found, redirect to homepage
        navigate('/homepage');
      }
      setIsLoading(false);
    }, 800);
  }, [postId, navigate]);

  const handleSupportToggle = (id, isSupported) => {
    // Handle support toggle for posts and replies
    console.log(`Toggle support for ${id}: ${isSupported}`);
  };

  const handleShare = (postId) => {
    setIsShareModalOpen(true);
  };

  const handleReport = (id, type = 'post') => {
    setReportTargetId(id);
    setReportType(type);
    setIsReportModalOpen(true);
  };

  const handleAddReply = (replyText) => {
    const newReply = {
      id: `r${Date.now()}`,
      content: replyText,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
      timestamp: new Date(),
      supportCount: 0,
      isSupported: false,
      replies: []
    };
    
    setReplies(prev => [newReply, ...prev]);
    setCurrentPost(prev => ({
      ...prev,
      replyCount: prev.replyCount + 1
    }));
  };

  if (isLoading) {
    return (
      <>
        <CrisisHotlineBanner />
        <Header />
        <div className="min-h-screen bg-background pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-text-secondary">Loading post...</p>
              </div>
            </div>
          </div>
        </div>
        <FloatingActionButton />
      </>
    );
  }

  if (!currentPost) {
    return (
      <>
        <CrisisHotlineBanner />
        <Header />
        <div className="min-h-screen bg-background pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center py-16">
              <Icon name="AlertCircle" size={64} className="text-text-secondary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-text-primary mb-2">
                Post Not Found
              </h2>
              <p className="text-text-secondary mb-6">
                The post you're looking for doesn't exist or has been removed.
              </p>
              <Button
                variant="primary"
                onClick={() => navigate('/homepage')}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
        <FloatingActionButton />
      </>
    );
  }

  return (
    <>
      <CrisisHotlineBanner />
      <Header />
      
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <PostContent
                post={currentPost}
                onSupportToggle={handleSupportToggle}
                onShare={handleShare}
                onReport={(id) => handleReport(id, 'post')}
              />
              
              <ReplySection
                replies={replies}
                onAddReply={handleAddReply}
                onSupportToggle={handleSupportToggle}
                onReport={(id) => handleReport(id, 'reply')}
              />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <RelatedPosts
                  posts={relatedPosts}
                  currentPostId={currentPost.id}
                />
                
                {/* Crisis Resources */}
                <div className="bg-error-50 rounded-lg border border-error-200 p-6">
                  <h3 className="text-lg font-semibold text-error-800 mb-4 flex items-center">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:988"
                      className="flex items-center space-x-3 p-3 bg-error text-error-foreground rounded-lg hover:bg-error-600 transition-therapeutic focus-ring"
                    >
                      <Icon name="Phone" size={18} />
                      <div>
                        <div className="font-medium">Crisis Lifeline</div>
                        <div className="text-sm opacity-90">Call 988</div>
                      </div>
                    </a>
                    <a
                      href="sms:741741"
                      className="flex items-center space-x-3 p-3 bg-error text-error-foreground rounded-lg hover:bg-error-600 transition-therapeutic focus-ring"
                    >
                      <Icon name="MessageSquare" size={18} />
                      <div>
                        <div className="font-medium">Crisis Text Line</div>
                        <div className="text-sm opacity-90">Text 741741</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FloatingActionButton />
      
      {/* Modals */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        postId={currentPost.id}
      />
      
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        postId={reportTargetId}
        type={reportType}
      />
    </>
  );
};

export default PostDetail;