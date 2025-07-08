import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import Breadcrumb from '../../components/ui/Breadcrumb';
import PostForm from './components/PostForm';
import DraftManager from './components/DraftManager';
import PostContent from './components/PostContent';
import AnonymousAvatar from './components/AnonymousAvatar';
import RelatedPosts from './components/RelatedPosts';
import ReplySection from './components/ReplySection';
import ReportModal from './components/ReportModal';
import ShareModal from './components/ShareModal';
import SuccessModal from './components/SuccessModal';
import PrivacyReminder from './components/PrivacyReminder';
import Icon from '../../components/AppIcon';

const PostsPage = () => {
  // Mock data for posts, aligned with PostDetail structure
  const [posts, setPosts] = useState([
    {
      id: '1',
      content: `Feeling overwhelmed with work and could use some advice on managing stress.\n\nThe constant deadlines and pressure are really getting to me. Any tips for staying calm under pressure?`,
      tags: ['stress', 'work'],
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      supportCount: 5,
      isSupported: false,
      replyCount: 1,
      replies: [
        {
          id: 'r1',
          content: 'Try mindfulness exercises! Deep breathing has really helped me.',
          timestamp: new Date(Date.now() - 90 * 60 * 1000),
          supportCount: 2,
          isSupported: false,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reply1',
          replies: [],
        },
      ],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=post1',
    },
    {
      id: '2',
      content: `Struggling with loneliness lately. Anyone else feeling this way?\n\nIt's hard to connect with people when you feel so isolated. Any advice on making new friends?`,
      tags: ['loneliness'],
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      supportCount: 3,
      isSupported: false,
      replyCount: 0,
      replies: [],
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=post2',
    },
  ]);

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [reportTarget, setReportTarget] = useState({ postId: null, type: 'post' });
  const [sharePostId, setSharePostId] = useState(null);

  const handleAddPost = (newPost) => {
    setPosts([
      {
        id: `${Date.now()}`,
        content: newPost.content,
        tags: newPost.tags,
        timestamp: new Date(),
        supportCount: 0,
        isSupported: false,
        replyCount: 0,
        replies: [],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
      },
      ...posts,
    ]);
    localStorage.removeItem('anonmind_draft');
    setIsSuccessModalOpen(true);
  };

  const handleLoadDraft = (draft) => {
    console.log('Loading draft:', draft);
  };

  const handleAddReply = (postId, replyText) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? {
            ...post,
            replyCount: post.replyCount + 1,
            replies: [
              {
                id: `${Date.now()}-${Math.random()}`,
                content: replyText,
                timestamp: new Date(),
                supportCount: 0,
                isSupported: false,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`,
                replies: [],
              },
              ...post.replies,
            ],
          }
        : post
    ));
  };

  const handleSupportToggle = (postId, replyId, newSupportState) => {
    if (replyId) {
      setPosts(posts.map(post =>
        post.id === postId
          ? {
              ...post,
              replies: post.replies.map(reply =>
                reply.id === replyId
                  ? { ...reply, isSupported: newSupportState, supportCount: newSupportState ? reply.supportCount + 1 : reply.supportCount - 1 }
                  : reply
              ),
            }
          : post
      ));
    } else {
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, isSupported: newSupportState, supportCount: newSupportState ? post.supportCount + 1 : post.supportCount - 1 }
          : post
      ));
    }
  };

  const handleReport = (postId, replyId) => {
    setReportTarget({ postId, replyId, type: replyId ? 'reply' : 'post' });
    setIsReportModalOpen(true);
  };

  const handleShare = (postId) => {
    setSharePostId(postId);
    setIsShareModalOpen(true);
  };

  const handleCreateAnother = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <CrisisHotlineBanner />
      <Header />

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-20 lg:pb-0">
          <Breadcrumb />

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Privacy Reminder */}
              <div className="mb-6 sm:mb-8">
                <PrivacyReminder />
              </div>

              {/* Anonymous Avatar */}
              <div className="mb-6 sm:mb-8">
                <AnonymousAvatar />
              </div>

              {/* Draft Manager */}
              <div className="mb-6 sm:mb-8">
                <DraftManager onLoadDraft={handleLoadDraft} />
              </div>

              {/* Post Form */}
              <div className="mb-6 sm:mb-8">
                <PostForm onSubmit={handleAddPost} isSubmitting={false} />
              </div>

              {/* Posts List */}
              <section id="recent-posts" className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6">
                  Recent Stories
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {posts.length > 0 ? (
                    posts.map((post, index) => (
                      <div key={post.id}>
                        <PostContent
                          post={post}
                          onSupportToggle={(postId, newSupportState) => handleSupportToggle(postId, null, newSupportState)}
                          onShare={handleShare}
                          onReport={handleReport}
                        />
                        <div className="mt-4 sm:mt-6 border-t border-border pt-4 sm:pt-6">
                          <ReplySection
                            replies={post.replies}
                            onAddReply={(replyText) => handleAddReply(post.id, replyText)}
                            onSupportToggle={(replyId, newSupportState) => handleSupportToggle(post.id, replyId, newSupportState)}
                            onReport={(replyId) => handleReport(post.id, replyId)}
                            isExpandedByDefault={index === 0}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 sm:py-12 bg-surface rounded-lg">
                      <Icon name="MessageCircle" size={40} smSize={48} className="text-text-secondary mx-auto mb-3 sm:mb-4" />
                      <h4 className="text-base sm:text-lg font-medium text-text-primary mb-2">
                        No posts yet
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary">
                        Share your story to start the conversation.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <RelatedPosts posts={posts} currentPostId={null} />
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
                    <Icon name="Phone" size={18} />
                    <span>Call 988</span>
                  </a>
                  <a
                    href="sms:741741"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-error text-error-foreground rounded-lg font-medium hover:bg-error-600 transition-therapeutic focus-ring"
                  >
                    <Icon name="MessageSquare" size={18} />
                    <span>Text 741741</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloatingActionButton />

      {/* Modals */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        postId={reportTarget.postId}
        type={reportTarget.type}
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        postId={sharePostId}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        onCreateAnother={handleCreateAnother}
      />
    </div>
  );
};

export default PostsPage;
