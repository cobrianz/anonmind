import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How does anonymity work on AnonMind?",
      answer: `We don't collect any personally identifiable information when you post. No names, emails, or account creation required. Each post is assigned a random anonymous identifier that changes with each session, ensuring complete privacy.`
    },
    {
      question: "Is AnonMind a replacement for professional therapy?",
      answer: `No, AnonMind is designed to complement, not replace, professional mental health care. We provide peer support and community connection. For clinical treatment, we encourage users to seek help from licensed mental health professionals.`
    },
    {
      question: "How do you handle crisis situations?",
      answer: `We have automated systems that detect crisis language and immediately provide users with professional crisis resources. Our moderation team is trained to escalate serious situations to appropriate authorities when necessary, while still maintaining user anonymity.`
    },
    {
      question: "Can I delete my posts after sharing?",
      answer: `Since posts are anonymous and not tied to accounts, we can't provide individual deletion controls. However, you can report your own post for removal if needed. Our moderation team will review and remove it promptly.`
    },
    {
      question: "How do you prevent harmful or triggering content?",
      answer: `We use AI-powered content filtering combined with community reporting and human moderation. Content that includes detailed self-harm methods, substance abuse instructions, or other potentially harmful information is automatically flagged and reviewed.`
    },
    {
      question: "Is my data secure and private?",
      answer: `Yes, we use industry-standard encryption and security measures. We don't store personal information, and all posts are encrypted. We regularly undergo security audits and comply with privacy regulations to protect our community.`
    },
    {
      question: "How can I support the AnonMind platform?",
      answer: `You can support us by sharing your story, offering encouragement to others, spreading awareness about mental health, or making a donation. We also welcome volunteers who want to help with moderation and community support.`
    },
    {
      question: "What happens if someone violates community guidelines?",
      answer: `Violations are reviewed by our moderation team. Depending on severity, actions may include content removal, temporary restrictions, or permanent bans. We prioritize education and community healing over punishment whenever possible.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary">
            Get answers to common questions about our platform, privacy, and community guidelines.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl border border-border shadow-therapeutic-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-therapeutic focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-expanded={openFAQ === index}
              >
                <h3 className="text-lg font-heading font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <Icon 
                  name="ChevronDown" 
                  size={20} 
                  className={`text-text-secondary transition-therapeutic flex-shrink-0 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="HelpCircle" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a
              href="mailto:hello@anonmind.org"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-600 transition-therapeutic focus:outline-none focus:ring-3 focus:ring-primary focus:ring-offset-3"
            >
              <Icon name="Mail" size={20} />
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;