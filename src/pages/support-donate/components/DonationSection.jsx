import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [showMpesaModal, setShowMpesaModal] = useState(false);
  const [mpesaPhone, setMpesaPhone] = useState('');

  const presetAmounts = [
    { value: 10, label: '$10', description: 'Supports 1 week of server costs' },
    { value: 25, label: '$25', description: 'Funds crisis hotline integration' },
    { value: 50, label: '$50', description: 'Maintains platform for 1 month' },
    { value: 100, label: '$100', description: 'Supports moderation team' }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    setIsCustom(true);
    setSelectedAmount(0);
  };

  const getCurrentAmount = () => {
    return isCustom ? parseFloat(customAmount) || 0 : selectedAmount;
  };

  const handleDonate = (method) => {
    const amount = getCurrentAmount();
    if (amount <= 0) return;
    
    if (method === 'mpesa') {
      setShowMpesaModal(true);
      return;
    }
    
    // Mock external payment integration
    const paymentUrls = {
      paypal: `https://www.paypal.com/donate?amount=${amount}&currency=USD&business=anonmind`,
      stripe: `https://donate.stripe.com/anonmind?amount=${amount * 100}`,
      venmo: `https://venmo.com/anonmind?amount=${amount}&note=Mental Health Support`
    };
    
    window.open(paymentUrls[method], '_blank');
  };

  const handleMpesaDonate = () => {
    const amount = getCurrentAmount();
    const kshAmount = Math.round(amount * 130); // Mock USD to KSH conversion
    
    // Mock M-Pesa integration
    alert(`M-Pesa payment initiated:\nAmount: KSH ${kshAmount}\nPhone: ${mpesaPhone}\nPlease complete the payment on your phone.`);
    setShowMpesaModal(false);
    setMpesaPhone('');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4">
            Make a Donation
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your contribution helps us maintain our platform, provide crisis support resources, and keep our community safe and anonymous.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Donation Amount Selection */}
          <div className="bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8 mb-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              Choose Your Contribution
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {presetAmounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => handleAmountSelect(amount.value)}
                  className={`p-4 rounded-lg border-2 transition-therapeutic text-left ${
                    selectedAmount === amount.value && !isCustom
                      ? 'border-primary bg-primary-50 text-primary' :'border-border hover:border-primary-200 hover:bg-surface'
                  }`}
                >
                  <div className="text-2xl font-heading font-semibold mb-1">
                    {amount.label}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {amount.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                  $
                </span>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  className={`w-full pl-8 pr-4 py-3 border rounded-lg transition-therapeutic focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    isCustom ? 'border-primary bg-primary-50' : 'border-border'
                  }`}
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="border-t border-border pt-6">
              <h4 className="text-lg font-medium text-foreground mb-4">
                Choose Payment Method
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleDonate('paypal')}
                  disabled={getCurrentAmount() <= 0}
                  className="flex items-center justify-center space-x-2 py-3"
                >
                  <Icon name="CreditCard" size={20} />
                  <span>PayPal</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDonate('stripe')}
                  disabled={getCurrentAmount() <= 0}
                  className="flex items-center justify-center space-x-2 py-3"
                >
                  <Icon name="CreditCard" size={20} />
                  <span>Credit Card</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDonate('venmo')}
                  disabled={getCurrentAmount() <= 0}
                  className="flex items-center justify-center space-x-2 py-3"
                >
                  <Icon name="Smartphone" size={20} />
                  <span>Venmo</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDonate('mpesa')}
                  disabled={getCurrentAmount() <= 0}
                  className="flex items-center justify-center space-x-2 py-3 bg-success-50 hover:bg-success-100 text-success-700"
                >
                  <Icon name="Smartphone" size={20} />
                  <span>M-Pesa</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Impact Transparency */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl font-heading font-medium text-foreground mb-6">
              How Your Donation Helps
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Server" size={16} color="white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Platform Maintenance</div>
                    <div className="text-sm text-text-secondary">
                      Server costs, security updates, and technical infrastructure
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Shield" size={16} color="white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Safety & Moderation</div>
                    <div className="text-sm text-text-secondary">
                      Content moderation tools and community safety measures
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Phone" size={16} color="white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Crisis Support</div>
                    <div className="text-sm text-text-secondary">
                      24/7 crisis hotline integration and emergency resources
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="BookOpen" size={16} color="white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Resource Development</div>
                    <div className="text-sm text-text-secondary">
                      Curated mental health resources and educational content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* M-Pesa Modal */}
      {showMpesaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg shadow-therapeutic-xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                M-Pesa Payment
              </h3>
              <button
                onClick={() => setShowMpesaModal(false)}
                className="text-text-secondary hover:text-foreground transition-therapeutic"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="text-center">
                <div className="text-2xl font-heading font-semibold text-foreground mb-2">
                  KSH {Math.round(getCurrentAmount() * 130)}
                </div>
                <div className="text-text-secondary">
                  (${getCurrentAmount()} USD)
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="254XXXXXXXXX"
                  value={mpesaPhone}
                  onChange={(e) => setMpesaPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <div className="text-xs text-text-secondary mt-1">
                  Enter your M-Pesa registered phone number
                </div>
              </div>
              
              <div className="bg-success-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Info" size={12} color="white" />
                  </div>
                  <div className="text-sm text-success-700">
                    You will receive an M-Pesa prompt on your phone to complete the payment. 
                    Please ensure you have sufficient balance.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-border">
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowMpesaModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleMpesaDonate}
                  disabled={!mpesaPhone}
                  className="flex-1 bg-success hover:bg-success-600"
                >
                  Pay with M-Pesa
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DonationSection;