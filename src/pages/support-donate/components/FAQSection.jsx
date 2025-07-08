import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      category: 'Donations',
      questions: [
        {
          id: 'donation-1',
          question: 'How are donations used?',
          answer: `Your donations directly support platform maintenance (75%), crisis support integration (15%), community programs (8%), and administrative costs (2%). We publish detailed annual reports showing exactly how every dollar is spent.`
        },
        {
          id: 'donation-2',
          question: 'Is my donation secure?',
          answer: `Yes, we use industry-standard encryption and work with trusted payment processors like PayPal and Stripe. We never store your payment information on our servers, and all transactions are processed securely.`
        },
        {
          id: 'donation-3',
          question: 'Can I make recurring donations?',
          answer: `Absolutely! Recurring donations help us plan better and maintain consistent service. You can set up monthly, quarterly, or annual donations through our payment partners and cancel anytime.`
        },
        {
          id: 'donation-4',
          question: 'Are donations tax-deductible?',
          answer: `Yes, AnonMind is a registered 501(c)(3) nonprofit organization. You'll receive a tax-deductible receipt for all donations, which you can use when filing your taxes.`
        },
        {
          id: 'donation-5',question: 'What if I want to donate anonymously?',
          answer: `We respect your privacy. You can choose to donate anonymously, and your name won't appear in any public donor lists. However, you'll still receive a tax receipt for your records.`
        }
      ]
    },
    {
      category: 'Volunteering',
      questions: [
        {
          id: 'volunteer-1',question: 'What volunteer opportunities are available?',
          answer: `We offer various roles including content moderation, crisis support, technical assistance, community outreach, content creation, and translation services. Each role has different time commitments and requirements.`
        },
        {
          id: 'volunteer-2',question: 'Do I need special qualifications to volunteer?',
          answer: `Requirements vary by role. Crisis support volunteers need mental health training or experience, while content moderators need good judgment and communication skills. We provide training for all positions.`
        },
        {
          id: 'volunteer-3',question: 'How much time do I need to commit?',
          answer: `Time commitments range from a few hours per week to 20+ hours, depending on your availability and chosen role. We work with your schedule and appreciate any time you can contribute.`
        },
        {
          id: 'volunteer-4',question: 'Is volunteer training provided?',
          answer: `Yes! We provide comprehensive training for all volunteer positions, including ongoing support and resources. Training covers platform policies, crisis intervention, and role-specific skills.`
        },
        {
          id: 'volunteer-5',question: 'Can I volunteer remotely?',
          answer: `Most volunteer positions are remote-friendly. You can contribute from anywhere with an internet connection. Some roles may require specific time zones for coverage purposes.`
        }
      ]
    },
    {
      category: 'Platform',
      questions: [
        {
          id: 'platform-1',question: 'How do you ensure user safety and privacy?',
          answer: `We use end-to-end encryption, don't collect personal information, employ trained moderators, and have partnerships with crisis intervention services. User anonymity is our top priority.`
        },
        {
          id: 'platform-2',
          question: 'What happens in a crisis situation?',
          answer: `Our platform integrates with crisis hotlines and emergency services. Trained volunteers can identify crisis situations and connect users with immediate professional help while maintaining anonymity.`
        },
        {
          id: 'platform-3',
          question: 'How is content moderated?',
          answer: `We use a combination of automated systems and trained human moderators to review content. Our community guidelines prioritize safety while preserving the supportive nature of discussions.`
        },
        {
          id: 'platform-4',
          question: 'Can I trust the advice given on the platform?',
          answer: `Our platform provides peer support, not professional medical advice. We clearly distinguish between community support and professional help, and encourage users to seek professional care when needed.`
        }
      ]
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about donations, volunteering, and our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((category) => (
            <div key={category.category} className="mb-8">
              <h3 className="text-xl font-heading font-medium text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <Icon 
                    name={
                      category.category === 'Donations' ? 'Heart' :
                      category.category === 'Volunteering' ? 'Users' : 'Shield'
                    } 
                    size={16} 
                    color="white" 
                  />
                </div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="bg-card rounded-lg shadow-therapeutic-sm overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-therapeutic focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                      aria-expanded={openFAQ === faq.id}
                    >
                      <span className="font-medium text-foreground pr-4">
                        {faq.question}
                      </span>
                      <Icon
                        name={openFAQ === faq.id ? 'ChevronUp' : 'ChevronDown'}
                        size={20}
                        className={`text-text-secondary transition-therapeutic ${
                          openFAQ === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-border pt-4">
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="max-w-2xl mx-auto mt-12 bg-card rounded-lg shadow-therapeutic-sm p-6 sm:p-8 text-center">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="HelpCircle" size={24} color="white" />
          </div>
          <h3 className="text-xl font-heading font-medium text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary mb-6">
            Can't find what you're looking for? Our support team is here to help with any questions about donations, volunteering, or our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              iconName="Mail"
              iconPosition="left"
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;