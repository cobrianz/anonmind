import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = () => {
  const metrics = [
    {
      title: 'Active Users',
      value: '12,547',
      change: '+8.2%',
      changeType: 'positive',
      icon: 'Users',
      color: 'bg-primary'
    },
    {
      title: 'Posts Today',
      value: '1,234',
      change: '+12.5%',
      changeType: 'positive',
      icon: 'MessageCircle',
      color: 'bg-secondary'
    },
    {
      title: 'Crisis Interventions',
      value: '47',
      change: '-5.2%',
      changeType: 'negative',
      icon: 'AlertTriangle',
      color: 'bg-warning'
    },
    {
      title: 'Communities',
      value: '24',
      change: '+2',
      changeType: 'positive',
      icon: 'Users',
      color: 'bg-accent'
    },
    {
      title: 'Reports Pending',
      value: '15',
      change: '+3',
      changeType: 'negative',
      icon: 'Flag',
      color: 'bg-error'
    },
    {
      title: 'System Health',
      value: '99.8%',
      change: '+0.1%',
      changeType: 'positive',
      icon: 'Monitor',
      color: 'bg-success'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                <Icon name={metric.icon} size={24} color="white" />
              </div>
              <div className={`text-sm font-medium ${
                metric.changeType === 'positive' ? 'text-success' : 'text-error'
              }`}>
                {metric.change}
              </div>
            </div>
            <div className="text-2xl font-heading font-semibold text-foreground mb-1">
              {metric.value}
            </div>
            <div className="text-text-secondary text-sm">
              {metric.title}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Recent Posts
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-text-secondary">
                    Anonymous user posted in #anxiety
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    {i} minutes ago
                  </div>
                </div>
                <div className="text-xs bg-primary-50 text-primary px-2 py-1 rounded">
                  Live
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            System Alerts
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                <Icon name="AlertTriangle" size={16} color="white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-foreground font-medium">
                  High CPU usage detected
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  Server load at 85% - monitoring
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Icon name="Check" size={16} color="white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-foreground font-medium">
                  Database backup completed
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  Daily backup successful
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-error rounded-full flex items-center justify-center">
                <Icon name="AlertCircle" size={16} color="white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-foreground font-medium">
                  Failed login attempts
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  15 attempts from same IP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsOverview;