import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UserManagement = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const users = [
    {
      id: 1,
      anonymousId: 'user_a7b9c2d1',
      joinDate: '2024-01-15',
      postCount: 23,
      replyCount: 87,
      reportCount: 0,
      crisisFlags: 1,
      status: 'active',
      lastActivity: '2 hours ago',
      riskLevel: 'medium'
    },
    {
      id: 2,
      anonymousId: 'user_e4f6g8h2',
      joinDate: '2024-02-03',
      postCount: 45,
      replyCount: 156,
      reportCount: 2,
      crisisFlags: 0,
      status: 'active',
      lastActivity: '1 day ago',
      riskLevel: 'low'
    },
    {
      id: 3,
      anonymousId: 'user_i9j1k3l4',
      joinDate: '2024-01-28',
      postCount: 12,
      replyCount: 34,
      reportCount: 5,
      crisisFlags: 3,
      status: 'flagged',
      lastActivity: '3 hours ago',
      riskLevel: 'high'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Users', count: users.length },
    { id: 'active', name: 'Active', count: users.filter(u => u.status === 'active').length },
    { id: 'flagged', name: 'Flagged', count: users.filter(u => u.status === 'flagged').length },
    { id: 'high-risk', name: 'High Risk', count: users.filter(u => u.riskLevel === 'high').length }
  ];

  const filteredUsers = () => {
    switch (selectedFilter) {
      case 'active':
        return users.filter(u => u.status === 'active');
      case 'flagged':
        return users.filter(u => u.status === 'flagged');
      case 'high-risk':
        return users.filter(u => u.riskLevel === 'high');
      default:
        return users;
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'bg-error-100 text-error-700';
      case 'medium': return 'bg-warning-100 text-warning-700';
      case 'low': return 'bg-success-100 text-success-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-success-100 text-success-700';
      case 'flagged': return 'bg-error-100 text-error-700';
      case 'suspended': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          User Management
        </h2>
        <div className="text-sm text-text-secondary">
          {users.length} total users
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

      {/* Users Table */}
      <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-text-secondary">User</th>
                <th className="text-left p-4 text-sm font-medium text-text-secondary">Activity</th>
                <th className="text-left p-4 text-sm font-medium text-text-secondary">Risk Level</th>
                <th className="text-left p-4 text-sm font-medium text-text-secondary">Status</th>
                <th className="text-left p-4 text-sm font-medium text-text-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredUsers().map(user => (
                <tr key={user.id} className="hover:bg-surface">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} color="#3b82f6" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {user.anonymousId}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Joined {user.joinDate}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <div className="text-foreground">{user.postCount} posts</div>
                      <div className="text-text-secondary">{user.replyCount} replies</div>
                      <div className="text-text-secondary">Last: {user.lastActivity}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(user.riskLevel)}`}>
                        {user.riskLevel} risk
                      </span>
                      {user.crisisFlags > 0 && (
                        <div className="text-xs text-error">
                          {user.crisisFlags} crisis flag{user.crisisFlags !== 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Eye"
                      >
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="MessageCircle"
                      >
                        Contact
                      </Button>
                      {user.status === 'flagged' && (
                        <Button
                          variant="danger"
                          size="sm"
                          iconName="Ban"
                        >
                          Suspend
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;