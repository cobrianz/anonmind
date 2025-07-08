import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MissionSection = () => {
  const values = [
    {
      icon: "Shield",
      title: "Privacy First",
      description: "Your identity remains completely anonymous. Share without fear of judgment or exposure."
    },
    {
      icon: "Heart",
      title: "Peer Support",
      description: "Connect with others who understand your journey. Real experiences, genuine empathy."
    },
    {
      icon: "Users",
      title: "Community Driven",
      description: "Built by the community, for the community. Every voice matters in our safe space."
    },
    {
      icon: "Zap",
      title: "Instant Access",
      description: "24/7 support when you need it most. No appointments, no waiting lists."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            To create a world where mental health conversations happen without stigma, 
            where everyone has access to peer support, and where anonymity empowers 
            authentic sharing and healing.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
              Why We Started AnonMind
            </h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                Mental health struggles affect millions, yet many suffer in silence due to stigma, 
                fear of judgment, or lack of accessible support. Traditional therapy, while valuable, 
                isn't always available or affordable for everyone.
              </p>
              <p>
                We recognized that sometimes the most powerful healing comes from connecting with 
                others who've walked similar paths. Peer support has been proven to reduce isolation, 
                provide hope, and offer practical coping strategies.
              </p>
              <p>
                AnonMind was born from the belief that everyone deserves a safe space to share their 
                story, seek support, and offer encouragement to others—all while maintaining complete 
                anonymity and privacy.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-therapeutic-lg">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Person writing in journal with soft lighting"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;