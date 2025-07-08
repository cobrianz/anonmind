import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import MetricsOverview from './components/MetricsOverview';
import ContentModeration from './components/ContentModeration';
import UserManagement from './components/UserManagement';
import CrisisManagement from './components/CrisisManagement';
import Analytics from './components/Analytics';
import SystemHealth from './components/SystemHealth';
import Navigation from './components/Navigation';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock admin authentication check
  const isAuthenticated = true; // In real app, this would check actual auth

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Access Denied
          </h1>
          <p className="text-text-secondary">
            You need administrator privileges to access this page.
          </p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <MetricsOverview />;
      case 'content':
        return <ContentModeration />;
      case 'users':
        return <UserManagement />;
      case 'crisis':
        return <CrisisManagement />;
      case 'analytics':
        return <Analytics />;
      case 'system':
        return <SystemHealth />;
      default:
        return <MetricsOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-text-secondary">
            Manage platform content, users, and system health
          </p>
        </div>

        {/* Navigation */}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content */}
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;