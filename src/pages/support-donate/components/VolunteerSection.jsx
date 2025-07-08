import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
    availability: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const skillOptions = [
    { id: 'moderation', label: 'Content Moderation', icon: 'Shield' },
    { id: 'crisis', label: 'Crisis Support', icon: 'Phone' },
    { id: 'content', label: 'Content Creation', icon: 'PenTool' },
    { id: 'tech', label: 'Technical Support', icon: 'Code' },
    { id: 'outreach', label: 'Community Outreach', icon: 'Users' },
    { id: 'translation', label: 'Translation', icon: 'Globe' }
  ];

  const availabilityOptions = [
    'A few hours per week',
    '5-10 hours per week',
    '10-20 hours per week',
    'Flexible schedule',
    'Weekends only',
    'Emergency response only'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillToggle = (skillId) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillId)
        ? prev.skills.filter(id => id !== skillId)
        : [...prev.skills, skillId]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Volunteer application submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} color="white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4">
              Thank You for Volunteering!
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We've received your application and will review it within 3-5 business days. Our volunteer coordinator will reach out to you soon with next steps.
            </p>
            <Button 
              variant="primary" 
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4">
            Volunteer With Us
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join our community of volunteers helping to create a safer, more supportive environment for mental health discussions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Volunteer Opportunities */}
            <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8">
              <h3 className="text-xl font-heading font-medium text-foreground mb-6">
                Volunteer Opportunities
              </h3>
              
              <div className="space-y-4">
                {skillOptions.map((skill) => (
                  <div key={skill.id} className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-surface transition-therapeutic">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={skill.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{skill.label}</div>
                      <div className="text-sm text-text-secondary mt-1">
                        {skill.id === 'moderation' && 'Help review and moderate community posts to ensure safety'}
                        {skill.id === 'crisis' && 'Provide immediate support and crisis intervention resources'}
                        {skill.id === 'content' && 'Create educational content and mental health resources'}
                        {skill.id === 'tech' && 'Assist with technical issues and platform improvements'}
                        {skill.id === 'outreach' && 'Help spread awareness and grow our supportive community'}
                        {skill.id === 'translation' && 'Translate content to make resources accessible globally'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8">
              <h3 className="text-xl font-heading font-medium text-foreground mb-6">
                Volunteer Application
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Areas of Interest *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skillOptions.map((skill) => (
                      <label
                        key={skill.id}
                        className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-therapeutic ${
                          formData.skills.includes(skill.id)
                            ? 'border-primary bg-primary-50' :'border-border hover:bg-surface'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill.id)}
                          onChange={() => handleSkillToggle(skill.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          formData.skills.includes(skill.id)
                            ? 'border-primary bg-primary' :'border-border'
                        }`}>
                          {formData.skills.includes(skill.id) && (
                            <Icon name="Check" size={12} color="white" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{skill.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Availability *
                  </label>
                  <select
                    required
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-therapeutic"
                  >
                    <option value="">Select your availability</option>
                    {availabilityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    placeholder="Tell us about any relevant experience you have..."
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-therapeutic resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Why do you want to volunteer? *
                  </label>
                  <textarea
                    required
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    placeholder="Share your motivation for volunteering with AnonMind..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-therapeutic resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;