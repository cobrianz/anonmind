import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Define breadcrumb mappings
  const breadcrumbMap = {
    '/homepage': [
      { label: 'Home', path: '/homepage' }
    ],
    '/create-post': [
      { label: 'Home', path: '/homepage' },
      { label: 'Share Story', path: '/create-post' }
    ],
    '/post-detail': [
      { label: 'Home', path: '/homepage' },
      { label: 'Post Details', path: '/post-detail' }
    ],
    '/mental-health-resources': [
      { label: 'Home', path: '/homepage' },
      { label: 'Resources', path: '/mental-health-resources' }
    ],
    '/support-donate': [
      { label: 'Home', path: '/homepage' },
      { label: 'Support Us', path: '/support-donate' }
    ],
    '/about-contact': [
      { label: 'Home', path: '/homepage' },
      { label: 'About', path: '/about-contact' }
    ]
  };

  const currentPath = location.pathname;
  const breadcrumbs = breadcrumbMap[currentPath] || [
    { label: 'Home', path: '/homepage' }
  ];

  // Don't show breadcrumb if only one item (Home page)
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <Icon 
                  name="ChevronRight" 
                  size={16} 
                  className="text-text-secondary mx-2" 
                />
              )}
              
              {isLast ? (
                <span 
                  className="text-text-primary font-medium"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-text-secondary hover:text-primary transition-therapeutic focus-ring rounded-xs px-1 py-0.5"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;