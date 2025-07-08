import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContentModeration = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const pendingReports = [
    {
      id: 1,
      type: 'post',
      content: 'I don\'t think I can go on anymore. Everything feels hopeless and I just want it to end...',
      reportReason: 'Self-harm content',
      reportedBy: 'Anonymous User',
      timestamp: '2 hours ago',
      priority: 'high',
      status: 'pending'
    },
    {
      id: 2,
      type: 'reply',
      content: 'Just get over it, everyone has problems. Stop being so dramatic.',
      reportReason: 'Harassment',
      reportedBy: 'Anonymous User',
      timestamp: '4 hours ago',
      priority: 'medium',
      status: 'pending'
    },
    {
      id: 3,
      type: 'post',
      content: 'Has anyone tried this new medication? My doctor prescribed it but I\'m worried about side effects.',
      reportReason: 'Medical advice',
      reportedBy: 'Anonymous User',
      timestamp: '6 hours ago',
      priority: 'low',
      status: 'pending'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Reports', count: pendingReports.length },
    { id: 'high', name: 'High Priority', count: pendingReports.filter(r => r.priority === 'high').length },
    { id: 'medium', name: 'Medium Priority', count: pendingReports.filter(r => r.priority === 'medium').length },
    { id: 'low', name: 'Low Priority', count: pendingReports.filter(r => r.priority === 'low').length }
  ];

  const filteredReports = selectedFilter === 'all' 
    ? pendingReports 
    : pendingReports.filter(report => report.priority === selectedFilter);

  const handleAction = (reportId, action) => {
    console.log(`Action ${action} taken on report ${reportId}`);
    // In real app, this would update the backend
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-error-100 text-error-700';
      case 'medium': return 'bg-warning-100 text-warning-700';
      case 'low': return 'bg-success-100 text-success-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          Content Moderation
        </h2>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-text-secondary">
            {filteredReports.length} items pending review
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

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map(report => (
          <div key={report.id} className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  report.type === 'post' ? 'bg-primary-100' : 'bg-secondary-100'
                }`}>
                  <Icon 
                    name={report.type === 'post' ? 'MessageCircle' : 'Reply'} 
                    size={16} 
                    color={report.type === 'post' ? '#3b82f6' : '#8b5cf6'}
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-foreground capitalize">
                      {report.type} Report
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(report.priority)}`}>
                      {report.priority} priority
                    </span>
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    Reported {report.timestamp} by {report.reportedBy}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-surface rounded-lg p-4 mb-4">
              <div className="text-sm text-text-secondary mb-2">
                <strong>Reported Content:</strong>
              </div>
              <div className="text-foreground">
                "{report.content}"
              </div>
            </div>

            {/* Report Reason */}
            <div className="mb-4">
              <div className="text-sm text-text-secondary mb-1">
                <strong>Reason:</strong>
              </div>
              <div className="text-foreground">
                {report.reportReason}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="success"
                size="sm"
                onClick={() => handleAction(report.id, 'approve')}
                iconName="Check"
              >
                Approve
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleAction(report.id, 'remove')}
                iconName="Trash2"
              >
                Remove
              </Button>
              <Button
                variant="warning"
                size="sm"
                onClick={() => handleAction(report.id, 'escalate')}
                iconName="AlertTriangle"
              >
                Escalate
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleAction(report.id, 'contact')}
                iconName="MessageCircle"
              >
                Contact User
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-xl font-medium text-foreground mb-2">
            No reports to review
          </h3>
          <p className="text-text-secondary">
            All content has been reviewed and moderated.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentModeration;