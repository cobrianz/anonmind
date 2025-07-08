import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactOptions = [
    {
      icon: "Mail",
      title: "General Inquiries",
      description: "Questions about the platform, partnerships, or general support",
      email: "hello@anonmind.org"
    },
    {
      icon: "Shield",
      title: "Crisis Resources",
      description: "Submit mental health resources or crisis intervention information",
      email: "resources@anonmind.org"
    },
    {
      icon: "Briefcase",
      title: "Partnerships",
      description: "Collaborate with us to expand mental health support",
      email: "partnerships@anonmind.org"
    },
    {
      icon: "Camera",
      title: "Media Inquiries",
      description: "Press, interviews, and media-related questions",
      email: "media@anonmind.org"
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
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We're here to help, listen, and support our community. Reach out to us through 
            any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
              Contact Options
            </h3>
            <div className="space-y-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-therapeutic-sm border border-border hover:shadow-therapeutic-md transition-therapeutic">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={option.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {option.title}
                      </h4>
                      <p className="text-text-secondary text-sm mb-3">
                        {option.description}
                      </p>
                      <a 
                        href={`mailto:${option.email}`}
                        className="text-primary hover:text-primary-600 font-medium text-sm transition-therapeutic"
                      >
                        {option.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-6">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-therapeutic"
                  aria-label="Follow us on Twitter"
                >
                  <Icon name="Twitter" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-therapeutic"
                  aria-label="Follow us on Instagram"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-therapeutic"
                  aria-label="Follow us on LinkedIn"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-therapeutic-sm border border-border">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} color="var(--color-success)" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-text-secondary">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
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
                        Email *
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
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-3 focus:ring-primary focus:border-primary transition-therapeutic resize-none"
                    />
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
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;