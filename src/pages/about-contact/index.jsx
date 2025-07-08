import React from 'react';
import Header from '../../components/ui/Header';
import CrisisHotlineBanner from '../../components/ui/CrisisHotlineBanner';
import FloatingActionButton from '../../components/ui/FloatingActionButton';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ImpactSection from './components/ImpactSection';
import ContactSection from './components/ContactSection';
import CommunityGuidelinesSection from './components/CommunityGuidelinesSection';
import FAQSection from './components/FAQSection';
import TrustSection from './components/TrustSection';
import VolunteerSection from './components/VolunteerSection';
import Icon from '../../components/AppIcon';

const AboutContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CrisisHotlineBanner />
      <Header />
      <FloatingActionButton />
      
      <main className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
        
        <HeroSection />
        <MissionSection />
        <ImpactSection />
        <ContactSection />
        <CommunityGuidelinesSection />
        <FAQSection />
        <TrustSection />
        <VolunteerSection />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={20} color="white" />
                </div>
                <span className="text-xl font-heading font-bold">AnonMind</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                A safe, anonymous space for mental health support and community connection.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-therapeutic">
                  <Icon name="Twitter" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-therapeutic">
                  <Icon name="Instagram" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-therapeutic">
                  <Icon name="Linkedin" size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="opacity-80 hover:opacity-100 transition-therapeutic">Home</a></li>
                <li><a href="/create-post" className="opacity-80 hover:opacity-100 transition-therapeutic">Share Story</a></li>
                <li><a href="/mental-health-resources" className="opacity-80 hover:opacity-100 transition-therapeutic">Resources</a></li>
                <li><a href="/support-donate" className="opacity-80 hover:opacity-100 transition-therapeutic">Support Us</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-heading font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">Community Guidelines</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">Privacy Policy</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">Terms of Service</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-therapeutic">Contact Us</a></li>
              </ul>
            </div>

            {/* Crisis Resources */}
            <div>
              <h3 className="font-heading font-semibold mb-4">Crisis Support</h3>
              <div className="space-y-3">
                <a
                  href="tel:988"
                  className="flex items-center space-x-2 text-sm bg-error text-error-foreground px-3 py-2 rounded-lg hover:bg-error-600 transition-therapeutic"
                >
                  <Icon name="Phone" size={16} />
                  <span>Crisis Hotline: 988</span>
                </a>
                <a
                  href="sms:741741"
                  className="flex items-center space-x-2 text-sm bg-error text-error-foreground px-3 py-2 rounded-lg hover:bg-error-600 transition-therapeutic"
                >
                  <Icon name="MessageSquare" size={16} />
                  <span>Text: 741741</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} AnonMind. All rights reserved. | 
              <span className="ml-1">Made with ❤️ for mental health awareness</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutContactPage;