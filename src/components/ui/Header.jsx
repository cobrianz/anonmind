import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Share Story', path: '/create-post', icon: 'PenTool' },
    { label: 'Posts', path: '/posts', icon: 'Heart' },
    { label: 'Resources', path: '/mental-health-resources', icon: 'Heart' },
    { label: 'Support Us', path: '/support-donate', icon: 'HandHeart' },
    { label: 'About', path: '/about-contact', icon: 'Info' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-1000 bg-background/95 backdrop-blur-therapeutic border-b border-border ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-2 focus-ring rounded-sm"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={20} color="white" className="lg:w-6 lg:h-6" />
              </div>
              <span className="text-xl lg:text-2xl font-heading font-semibold text-foreground">
                AnonMind
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-sm text-sm font-medium transition-therapeutic focus-ring ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary-50' :'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Crisis Hotline & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Crisis Hotline */}
              <a
                href="tel:988"
                className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-error text-error-foreground rounded-sm text-sm font-medium hover:bg-error-600 transition-therapeutic focus-ring"
                aria-label="Crisis Hotline - Call 988"
              >
                <Icon name="Phone" size={16} />
                <span className="hidden md:inline">Crisis: 988</span>
                <span className="md:hidden">988</span>
              </a>

              {/* Mobile Crisis Button */}
              <a
                href="tel:988"
                className="sm:hidden flex items-center justify-center w-10 h-10 bg-error text-error-foreground rounded-sm hover:bg-error-600 transition-therapeutic focus-ring"
                aria-label="Crisis Hotline - Call 988"
              >
                <Icon name="Phone" size={18} />
              </a>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                onClick={toggleMobileMenu}
                className="lg:hidden p-2"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-9000 bg-background/95 backdrop-blur-therapeutic">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link 
                to="/homepage" 
                className="flex items-center space-x-2 focus-ring rounded-sm"
                onClick={closeMobileMenu}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={20} color="white" />
                </div>
                <span className="text-xl font-heading font-semibold text-foreground">
                  AnonMind
                </span>
              </Link>
              <Button
                variant="ghost"
                onClick={closeMobileMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <Icon name="X" size={24} />
              </Button>
            </div>

            {/* Crisis Hotline Prominent */}
            <div className="p-4 bg-error-50 border-b border-error-200">
              <a
                href="tel:988"
                className="flex items-center justify-center space-x-3 w-full py-4 bg-error text-error-foreground rounded-lg text-lg font-medium hover:bg-error-600 transition-therapeutic focus-ring"
                onClick={closeMobileMenu}
              >
                <Icon name="Phone" size={24} />
                <span>Crisis Hotline: 988</span>
              </a>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 w-full px-4 py-4 rounded-lg text-lg font-medium transition-therapeutic focus-ring ${
                        isActivePath(item.path)
                          ? 'text-primary bg-primary-50' :'text-text-secondary hover:text-primary hover:bg-surface'
                      }`}
                    >
                      <Icon name={item.icon} size={24} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-border">
              <p className="text-sm text-text-secondary text-center">
                Safe space for anonymous mental health support
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;