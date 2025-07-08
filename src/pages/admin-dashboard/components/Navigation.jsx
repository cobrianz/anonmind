import React from 'react';
import Icon from '../../../components/AppIcon';

const Navigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'BarChart3' },
    { id: 'content', name: 'Content Moderation', icon: 'Shield' },
    { id: 'users', name: 'User Management', icon: 'Users' },
    { id: 'crisis', name: 'Crisis Management', icon: 'AlertTriangle' },
    { id: 'analytics', name: 'Analytics', icon: 'TrendingUp' },
    { id: 'system', name: 'System Health', icon: 'Monitor' }
  ];

  return (
    <nav className="bg-card rounded-lg shadow-therapeutic-sm border border-border">
      <div className="flex overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-therapeutic ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground border-b-2 border-primary'
                : 'text-text-secondary hover:text-foreground hover:bg-surface'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;