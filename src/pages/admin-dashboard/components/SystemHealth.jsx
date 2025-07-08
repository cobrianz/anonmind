import React from 'react';
import Icon from '../../../components/AppIcon';

const SystemHealth = () => {
  const systemMetrics = {
    uptime: '99.98%',
    responseTime: '245ms',
    cpuUsage: '68%',
    memoryUsage: '72%',
    diskUsage: '45%',
    activeConnections: '1,247'
  };

  const serverStatus = [
    { name: 'Web Server', status: 'healthy', uptime: '99.9%', load: '45%' },
    { name: 'Database', status: 'healthy', uptime: '99.8%', load: '67%' },
    { name: 'Redis Cache', status: 'healthy', uptime: '100%', load: '23%' },
    { name: 'File Storage', status: 'warning', uptime: '98.5%', load: '89%' },
    { name: 'Email Service', status: 'healthy', uptime: '99.7%', load: '12%' }
  ];

  const recentLogs = [
    { timestamp: '2024-01-15 14:30:22', level: 'INFO', message: 'User authentication successful' },
    { timestamp: '2024-01-15 14:25:15', level: 'WARNING', message: 'High memory usage detected on server-02' },
    { timestamp: '2024-01-15 14:20:08', level: 'ERROR', message: 'Failed to connect to external API' },
    { timestamp: '2024-01-15 14:15:45', level: 'INFO', message: 'Database backup completed successfully' },
    { timestamp: '2024-01-15 14:10:33', level: 'INFO', message: 'Scheduled maintenance task completed' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'bg-success-100 text-success-700';
      case 'warning': return 'bg-warning-100 text-warning-700';
      case 'error': return 'bg-error-100 text-error-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getLogLevelColor = (level) => {
    switch (level) {
      case 'INFO': return 'bg-blue-100 text-blue-700';
      case 'WARNING': return 'bg-warning-100 text-warning-700';
      case 'ERROR': return 'bg-error-100 text-error-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          System Health
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-sm text-text-secondary">All systems operational</span>
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={24} color="white" />
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {systemMetrics.uptime}
          </div>
          <div className="text-text-secondary text-sm">Uptime</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} color="white" />
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {systemMetrics.responseTime}
          </div>
          <div className="text-text-secondary text-sm">Response Time</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
              <Icon name="Cpu" size={24} color="white" />
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {systemMetrics.cpuUsage}
          </div>
          <div className="text-text-secondary text-sm">CPU Usage</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Icon name="HardDrive" size={24} color="white" />
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {systemMetrics.memoryUsage}
          </div>
          <div className="text-text-secondary text-sm">Memory Usage</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Database" size={24} color="white" />
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {systemMetrics.diskUsage}
          </div>
          <div className="text-text-secondary text-sm">Disk Usage</div>
        </div>

        <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
              <Icon name="Wifi" size={24} color="white" />
            </div>
          </div>
          <div className="text-2xl font-heading font-semibold text-foreground mb-1">
            {systemMetrics.activeConnections}
          </div>
          <div className="text-text-secondary text-sm">Active Connections</div>
        </div>
      </div>

      {/* Server Status */}
      <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Server Status
        </h3>
        <div className="space-y-4">
          {serverStatus.map((server, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  server.status === 'healthy' ? 'bg-success' : 
                  server.status === 'warning' ? 'bg-warning' : 'bg-error'
                }`}></div>
                <div>
                  <div className="font-medium text-foreground">{server.name}</div>
                  <div className="text-sm text-text-secondary">
                    Uptime: {server.uptime}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-text-secondary">
                  Load: {server.load}
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(server.status)}`}>
                  {server.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Logs */}
      <div className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Recent System Logs
        </h3>
        <div className="space-y-3">
          {recentLogs.map((log, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
              <span className={`px-2 py-1 text-xs font-medium rounded ${getLogLevelColor(log.level)}`}>
                {log.level}
              </span>
              <div className="flex-1">
                <div className="text-sm text-foreground">{log.message}</div>
                <div className="text-xs text-text-secondary mt-1">{log.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;