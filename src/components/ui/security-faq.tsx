import React, { useState } from "react";

const SecurityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Cyphlens protect data beyond the login?",
      answer: "Most cybersecurity defenses focus on stopping hackers and fraudsters at the login page. Cyphlens provides a second level of defense against the ones who break through, using visual, identity-bound access that protects your content even after authentication."
    },
    {
      question: "What makes Cyphlens different from traditional MFA?",
      answer: "Cyphlens goes beyond traditional multi-factor authentication by providing visual, identity-bound access that works instantly without codes, delays, or dependencies. It's a more intuitive and secure approach to access control."
    },
    {
      question: "How does Cyphlens ensure compliance with regulations like HIPAA and GDPR?",
      answer: "Cyphlens implements enterprise-grade security measures that meet and exceed regulatory requirements. Our visual identity system provides audit trails and access controls that help organizations maintain compliance with various industry standards."
    },
    {
      question: "Can Cyphlens integrate with our existing collaboration tools?",
      answer: "Yes, Cyphlens is designed to integrate seamlessly with existing collaboration platforms and tools. Our API-first approach ensures compatibility with your current workflow while adding an extra layer of security."
    },
    {
      question: "What industries benefit most from Cyphlens?",
      answer: "Cyphlens is particularly beneficial for industries handling sensitive data such as healthcare, finance, legal services, government, and technology companies. Any organization that needs secure, instant access control can benefit from our solution."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Main heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          SECURITY FAQ
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
          Secure What Matters.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-20">
        <div className="inline-block">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            SEE CYPHLENS IN ACTION
          </button>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gray-600/50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 md:p-8 text-left flex justify-between items-center hover:bg-gray-800/20 transition-colors duration-200"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <div className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  <div className="w-6 h-0.5 bg-white rounded-full"></div>
                  <div className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${openIndex === index ? 'rotate-90 -translate-y-0.5' : 'translate-y-0'}`}></div>
                </div>
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityFAQ;
