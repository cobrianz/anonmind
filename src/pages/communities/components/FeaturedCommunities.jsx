import React from 'react';
import CommunityCard from './CommunityCard';

const FeaturedCommunities = ({ communities, joinedCommunities, onJoinCommunity, onOpenModal }) => {
  if (communities.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground">
          Featured Communities
        </h2>
        <div className="flex items-center justify-center w-6 h-6 bg-warning rounded-full">
          <span className="text-sm">⭐</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map(community => (
          <CommunityCard
            key={community.id}
            community={community}
            isJoined={joinedCommunities.includes(community.id)}
            onJoinCommunity={onJoinCommunity}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCommunities;