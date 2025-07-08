import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CrisisManagement = () => {
  const [selectedFilter, setSelectedFilter] = useState('active');

  const crisisAlerts = [
    {
      id: 1,
      userId: 'user_a7b9c2d1',
      content: 'I can\'t take this anymore. I\'ve been thinking about ending it all...',
      riskLevel: 'critical',
      timestamp: '5 minutes ago',
      status: 'active',
      interventionType: 'automatic',
      resourcesSent: true,
      followUpRequired: true
    },
    {
      id: 2,
      userId: 'user_e4f6g8h2',
      content: 'Everything feels pointless. I don\'t see a way out of this darkness.',
      riskLevel: 'high',
      timestamp: '2 hours ago',
      status: 'responded',
      interventionType: 'manual',
      resourcesSent: true,
      followUpRequired: false
    },
    {
      id: 3,
      userId: 'user_i9j1k3l4',
      content: 'Having dark thoughts again. Not sure if I can handle this.',
      riskLevel: 'medium',
      timestamp: '4 hours ago',
      status: 'resolved',
      interventionType: 'automatic',
      resourcesSent: true,
      followUpRequired: false
    }
  ];

  const filters = [
    { id: 'active', name: 'Active Alerts', count: crisisAlerts.filter(a => a.status === 'active').length },
    { id: 'all', name: 'All Alerts', count: crisisAlerts.length },
    { id: 'critical', name: 'Critical', count: crisisAlerts.filter(a => a.riskLevel === 'critical').length },
    { id: 'resolved', name: 'Resolved', count: crisisAlerts.filter(a => a.status === 'resolved').length }
  ];

  const filteredAlerts = () => {
    switch (selectedFilter) {
      case 'active':
        return crisisAlerts.filter(a => a.status === 'active');
      case 'critical':
        return crisisAlerts.filter(a => a.riskLevel === 'critical');
      case 'resolved':
        return crisisAlerts.filter(a => a.status === 'resolved');
      default:
        return crisisAlerts;
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'critical': return 'bg-error text-error-foreground';
      case 'high': return 'bg-warning text-warning-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-error-100 text-error-700';
      case 'responded': return 'bg-warning-100 text-warning-700';
      case 'resolved': return 'bg-success-100 text-success-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          Crisis Management
        </h2>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-text-secondary">
            {crisisAlerts.filter(a => a.status === 'active').length} active alerts
          </div>
          <Button variant="danger" size="sm" iconName="AlertTriangle">
            Emergency Protocol
          </Button>
        </div>
      </div>

      {/* Crisis Hotline Info */}
      <div className="bg-error-50 border border-error-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center">
            <Icon name="Phone" size={20} color="white" />
          </div>
          <div>
            <div className="font-medium text-error-800">24/7 Crisis Hotline</div>
            <div className="text-error-600">Call 988 or Text 741741 for immediate support</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-therapeutic ${
              selectedFilter === filter.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary'
            }`}
          >
            {filter.name}
            <span className="ml-2 text-xs opacity-75">({filter.count})</span>
          </button>
        ))}
      </div>

      {/* Crisis Alerts */}
      <div className="space-y-4">
        {filteredAlerts().map(alert => (
          <div key={alert.id} className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getRiskColor(alert.riskLevel)}`}>
                  <Icon name="AlertTriangle" size={20} color="white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-foreground">
                      Crisis Alert - {alert.userId}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </span>
                  </div>
                  <div className="text-sm text-text-secondary mt-1">
                    {alert.timestamp} • {alert.interventionType} intervention
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getRiskColor(alert.riskLevel)}`}>
                {alert.riskLevel.toUpperCase()}
              </span>
            </div>

            {/* Content */}
            <div className="bg-surface rounded-lg p-4 mb-4">
              <div className="text-sm text-text-secondary mb-2">
                <strong>Flagged Content:</strong>
              </div>
              <div className="text-foreground">
                "{alert.content}"
              </div>
            </div>

            {/* Intervention Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className={`text-lg font-semibold ${alert.resourcesSent ? 'text-success' : 'text-error'}`}>
                  {alert.resourcesSent ? '✓' : '✗'}
                </div>
                <div className="text-sm text-text-secondary">Resources Sent</div>
              </div>
              <div className="text-center">
                <div className={`text-lg font-semibold ${alert.followUpRequired ? 'text-warning' : 'text-success'}`}>
                  {alert.followUpRequired ? '!' : '✓'}
                </div>
                <div className="text-sm text-text-secondary">Follow-up Required</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-primary">
                  {alert.interventionType === 'automatic' ? '🤖' : '👤'}
                </div>
                <div className="text-sm text-text-secondary">Intervention Type</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              {alert.status === 'active' && (
                <>
                  <Button
                    variant="danger"
                    size="sm"
                    iconName="Phone"
                  >
                    Call Emergency
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    iconName="MessageCircle"
                  >
                    Send Resources
                  </Button>
                </>
              )}
              <Button
                variant="outline"
                size="sm"
                iconName="User"
              >
                View User Profile
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="FileText"
              >
                Generate Report
              </Button>
              {alert.status === 'active' && (
                <Button
                  variant="success"
                  size="sm"
                  iconName="Check"
                >
                  Mark Resolved
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredAlerts().length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛡️</div>
          <h3 className="text-xl font-medium text-foreground mb-2">
            No active crisis alerts
          </h3>
          <p className="text-text-secondary">
            All crisis situations have been addressed.
          </p>
        </div>
      )}
    </div>
  );
};

export default CrisisManagement;