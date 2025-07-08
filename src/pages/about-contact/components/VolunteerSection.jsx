import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const volunteerRoles = [
    {
      icon: "Users",
      title: "Community Moderator",
      description: "Help maintain a safe, supportive environment by reviewing posts and responding to reports",
      commitment: "5-10 hours/week",
      requirements: ["Mental health awareness", "Strong communication skills", "Empathy and patience"]
    },
    {
      icon: "Heart",
      title: "Peer Support Specialist",
      description: "Provide compassionate responses and support to community members sharing their stories",
      commitment: "3-8 hours/week",
      requirements: ["Personal mental health journey", "Active listening skills", "Non-judgmental approach"]
    },
    {
      icon: "BookOpen",
      title: "Resource Curator",
      description: "Research and curate mental health resources, crisis information, and educational content",
      commitment: "2-5 hours/week",
      requirements: ["Research skills", "Mental health knowledge", "Attention to detail"]
    },
    {
      icon: "Shield",
      title: "Crisis Response Volunteer",
      description: "Trained volunteers who help connect users in crisis with appropriate professional resources",
      commitment: "On-call shifts",
      requirements: ["Crisis intervention training", "Mental health background", "Availability for training"]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        availability: '',
        motivation: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.experience && formData.motivation;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary-50 via-background to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Join Our Volunteer Team
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Help us build a stronger, safer community by volunteering your time and skills 
            to support others on their mental health journey.
          </p>
        </div>

        {/* Volunteer Roles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {volunteerRoles.map((role, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-therapeutic-sm border border-border hover:shadow-therapeutic-md transition-therapeutic">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={role.icon} size={24} color="var(--color-secondary)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {role.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-flex items-center space-x-1 text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded-full">
                      <Icon name="Clock" size={12} />
                      <span>{role.commitment}</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {role.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2 text-xs text-text-secondary">
                          <Icon name="CheckCircle" size={12} color="var(--color-success)" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-therapeutic-sm border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Volunteer Application
              </h3>
              <p className="text-text-secondary">
                Tell us about yourself and how you'd like to contribute to our community.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} color="var(--color-success)" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Application Submitted Successfully!
                </h4>
                <p className="text-text-secondary">
                  Thank you for your interest in volunteering. We'll review your application and get back to you within 5-7 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-foreground mb-2">
                      Availability
                    </label>
                    <Input
                      type="text"
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="e.g., Weekends, 5-10 hours/week"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Relevant Experience *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about your background in mental health, community support, or related fields..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-3 focus:ring-primary focus:border-primary transition-therapeutic resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-foreground mb-2">
                    Why do you want to volunteer with AnonMind? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Share your motivation for joining our volunteer team..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-3 focus:ring-primary focus:border-primary transition-therapeutic resize-none"
                  />
                </div>

                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Next Steps</h4>
                      <p className="text-sm text-text-secondary">
                        After submitting your application, you'll receive an email with next steps including 
                        a brief interview and any required training for your chosen volunteer role.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={!isFormValid || isSubmitting}
                  loading={isSubmitting}
                  fullWidth
                  iconName={isSubmitting ? undefined : "Send"}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;