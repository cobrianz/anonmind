import React from 'react';
import Icon from '../../../components/AppIcon';

const Analytics = () => {
  const analyticsData = {
    userGrowth: {
      current: 12547,
      previous: 11234,
      change: 11.7
    },
    engagement: {
      postsPerDay: 234,
      repliesPerDay: 876,
      averageSessionTime: '12m 34s'
    },
    communities: {
      totalCommunities: 24,
      activeCommunities: 18,
      averageMembers: 520
    },
    crisis: {
      interventions: 47,
      resolved: 43,
      successRate: 91.5
    }
  };

  const topCommunities = [
    { name: 'Anxiety Support Circle', members: 2847, growth: '+12%' },
    { name: 'Student Mental Health', members: 3421, growth: '+8%' },
    { name: 'Depression Warriors', members: 1956, growth: '+15%' },
    { name: 'LGBTQ+ Mental Health', members: 1234, growth: '+5%' },
    { name: 'Parent Support Network', members: 987, growth: '+18%' }
  ];

  const usageMetrics = [
    { label: 'Daily Active Users', value: '3,247', change: '+8.2%', positive: true },
    { label: 'Posts Created', value: '1,234', change: '+12.5%', positive: true },
    { label: 'Replies Posted', value: '4,567', change: '+15.3%', positive: true },
    { label: 'Communities Joined', value: '892', change: '+7.8%', positive: true },
    { label: 'Crisis Interventions', value: '47', change: '-5.2%', positive: false },
    { label: 'User Reports', value: '15', change: '+20%', positive: false }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          Analytics Dashboard
        </h2>
        <div className="flex items-center space-x-4">
          <select className="px-3 py-2 border border-border rounded-lg text-sm">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Users" size={24} color="white" />
            </div>
            <div className="text-sm font-medium text-success">
              +{analyticsData.userGrowth.change}%
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {analyticsData.userGrowth.current.toLocaleString()}
          </div>
          <div className="text-text-secondary text-sm">Total Users</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={24} color="white" />
            </div>
            <div className="text-sm font-medium text-success">
              +12.5%
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {analyticsData.engagement.postsPerDay}
          </div>
          <div className="text-text-secondary text-sm">Posts per Day</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Users" size={24} color="white" />
            </div>
            <div className="text-sm font-medium text-success">
              +7.8%
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {analyticsData.communities.activeCommunities}
          </div>
          <div className="text-text-secondary text-sm">Active Communities</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <div className="text-sm font-medium text-success">
              {analyticsData.crisis.successRate}%
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {analyticsData.crisis.resolved}
          </div>
          <div className="text-text-secondary text-sm">Crisis Resolved</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Communities */}
        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Top Communities
          </h3>
          <div className="space-y-4">
            {topCommunities.map((community, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">{community.name}</div>
                  <div className="text-sm text-text-secondary">
                    {community.members.toLocaleString()} members
                  </div>
                </div>
                <div className="text-sm font-medium text-success">
                  {community.growth}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Metrics */}
        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Usage Metrics
          </h3>
          <div className="space-y-4">
            {usageMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">{metric.label}</div>
                  <div className="text-sm text-text-secondary">{metric.value}</div>
                </div>
                <div className={`text-sm font-medium ${
                  metric.positive ? 'text-success' : 'text-error'
                }`}>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Timeline */}
      <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Engagement Timeline
        </h3>
        <div className="h-64 bg-surface rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="BarChart3" size={48} className="text-text-secondary mx-auto mb-2" />
            <div className="text-text-secondary">
              Chart placeholder - Integration with charting library needed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;