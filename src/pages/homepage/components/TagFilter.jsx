import React from 'react';
import Icon from '../../../components/AppIcon';

const TagFilter = ({ tags, selectedTags, onTagToggle, onClearAll }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-medium text-foreground mr-2">Filter by topic:</h3>
        
        {/* Clear all button */}
        {selectedTags.length > 0 && (
          <button
            onClick={onClearAll}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm text-text-secondary hover:text-primary border border-border rounded-full hover:border-primary transition-therapeutic focus-ring"
          >
            <Icon name="X" size={14} />
            <span>Clear all</span>
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag.id);
          return (
            <button
              key={tag.id}
              onClick={() => onTagToggle(tag.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-therapeutic focus-ring ${
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-therapeutic-sm'
                  : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary border border-border'
              }`}
            >
              <span className="mr-2">{tag.emoji}</span>
              {tag.name}
              {tag.count > 0 && (
                <span className={`ml-2 text-xs ${
                  isSelected ? 'opacity-80' : 'opacity-60'
                }`}>
                  {tag.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TagFilter;