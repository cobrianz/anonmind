import React from 'react';
import ResourceCard from './ResourceCard';

const ResourceGrid = ({ resources, onCall, onWebsite, onDirections, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-card rounded-lg shadow-therapeutic-sm border border-border p-6 animate-pulse">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="h-5 bg-surface rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-surface rounded mb-3 w-full"></div>
              </div>
              <div className="w-5 h-5 bg-surface rounded ml-4"></div>
            </div>
            <div className="flex space-x-2 mb-4">
              <div className="h-6 bg-surface rounded-full w-16"></div>
              <div className="h-6 bg-surface rounded-full w-12"></div>
              <div className="h-6 bg-surface rounded-full w-20"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-surface rounded w-2/3"></div>
              <div className="h-4 bg-surface rounded w-1/2"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-8 bg-surface rounded w-16"></div>
              <div className="h-8 bg-surface rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No Resources Found</h3>
        <p className="text-text-secondary max-w-md mx-auto">
          Try adjusting your search terms or filters to find relevant mental health resources.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onCall={onCall}
          onWebsite={onWebsite}
          onDirections={onDirections}
        />
      ))}
    </div>
  );
};

export default ResourceGrid;