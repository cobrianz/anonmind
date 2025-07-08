import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import DonationSection from './components/DonationSection';
import VolunteerSection from './components/VolunteerSection';
import CommunityAdvocacySection from './components/CommunityAdvocacySection';
import TrustSignalsSection from './components/TrustSignalsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const SupportDonatePage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Support & Donate - AnonMind | Help Us Maintain Anonymous Mental Health Support</title>
        <meta 
          name="description" 
          content="Support AnonMind's mission to provide anonymous mental health support. Donate, volunteer, or help spread awareness to keep our community safe and accessible for everyone." 
        />
        <meta name="keywords" content="mental health donation, volunteer mental health, anonymous support funding, mental health nonprofit, crisis support donation" />
        <meta property="og:title" content="Support & Donate - AnonMind" />
        <meta property="og:description" content="Help us maintain a safe, anonymous space for mental health support. Your contribution makes a real difference." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://anonmind.org/support-donate" />
      </Helmet>

      <CrisisHotlineBanner />
      <Header />
      
      <main className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
        
        <HeroSection />
        <DonationSection />
        <VolunteerSection />
        <CommunityAdvocacySection />
        <TrustSignalsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={20} color="white" />
                </div>
                <span className="text-xl font-heading font-semibold">AnonMind</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Anonymous mental health support for everyone, everywhere.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="opacity-80 hover:opacity-100 transition-therapeutic">Home</a></li>
                <li><a href="/create-post" className="opacity-80 hover:opacity-100 transition-therapeutic">Share Story</a></li>
                <li><a href="/mental-health-resources" className="opacity-80 hover:opacity-100 transition-therapeutic">Resources</a></li>
                <li><a href="/about-contact" className="opacity-80 hover:opacity-100 transition-therapeutic">About</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/support-donate" className="opacity-80 hover:opacity-100 transition-therapeutic">Donate</a></li>
                <li><a href="/support-donate" className="opacity-80 hover:opacity-100 transition-therapeutic">Volunteer</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">Privacy Policy</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">Terms of Service</a></li>
              </ul>
            </div>

            {/* Crisis Support */}
            <div>
              <h4 className="font-heading font-medium mb-4">Crisis Support</h4>
              <div className="space-y-3">
                <a 
                  href="tel:988" 
                  className="flex items-center space-x-2 text-sm bg-error text-error-foreground px-3 py-2 rounded-lg hover:bg-error-600 transition-therapeutic"
                >
                  <Icon name="Phone" size={16} />
                  <span>Crisis: 988</span>
                </a>
                <a 
                  href="sms:741741" 
                  className="flex items-center space-x-2 text-sm bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary-600 transition-therapeutic"
                >
                  <Icon name="MessageSquare" size={16} />
                  <span>Text: 741741</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © {currentYear} AnonMind. All rights reserved. | 501(c)(3) Nonprofit Organization
            </p>
          </div>
        </div>
      </footer>

      <FloatingActionButton />
    </div>
  );
};

export default SupportDonatePage;