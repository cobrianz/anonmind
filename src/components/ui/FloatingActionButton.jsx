import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Hide FAB on create-post page
  const shouldHideFAB = location.pathname === '/create-post';

  useEffect(() => {
    if (shouldHideFAB) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show when scrolling up or at top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY, shouldHideFAB]);

  // Don't render if should be hidden
  if (shouldHideFAB) return null;

  return (
    <Link
      to="/create-post"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-therapeutic-lg hover:bg-primary-600 hover:shadow-therapeutic-md hover:scale-105 focus:outline-none focus:ring-3 focus:ring-primary focus:ring-offset-3 transition-therapeutic flex items-center justify-center group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Create new post"
      title="Share your story"
    >
      <Icon 
        name="Plus" 
        size={24} 
        className="group-hover:rotate-90 transition-therapeutic" 
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-therapeutic pointer-events-none whitespace-nowrap">
        Share your story
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </Link>
  );
};

export default FloatingActionButton;