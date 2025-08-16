import { ArrowRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const SectionWrapper = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      id: "item-1",
      question:
        "How does Cyphlens protect data beyond the login?",
      answer:
        "Most cybersecurity defenses focus on stopping hackers and fraudsters at the login page. Cyphlens provides a second level of defense against the ones who break through, using visual, identity-bound access that protects your content even after authentication.",
      isOpen: true,
    },
    {
      id: "item-2",
      question: "What makes Cyphlens different from traditional MFA?",
      answer:
        "Cyphlens replaces frustrating MFA interruptions with swipe-based authentication that provides secure, intuitive access without copying codes, switching apps, or waiting. It's designed for user experience without compromising security.",
      isOpen: false,
    },
    {
      id: "item-3",
      question:
        "How does Cyphlens ensure compliance with regulations like HIPAA and GDPR?",
      answer:
        "Cyphlens provides comprehensive audit trails for all access events, identity verification for all access attempts, instant access revocation capabilities, time-bound access controls, and detailed reporting for compliance audits.",
      isOpen: false,
    },
    {
      id: "item-4",
      question:
        "Can Cyphlens integrate with our existing collaboration tools?",
      answer:
        "Yes, Cyphlens layers seamlessly into platforms your team already uses like Slack, Teams, and email. It protects your data without forcing new workflows or slowing anyone down.",
      isOpen: false,
    },
    {
      id: "item-5",
      question:
        "What industries benefit most from Cyphlens?",
      answer:
        "Cyphlens is designed for finance, healthcare, legal, HR, and executive teams that share sensitive data. It's particularly valuable for organizations dealing with complex permission structures, high-stakes data flows, and remote teams.",
      isOpen: false,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full items-end justify-center gap-8 py-8 md:py-16 px-4 md:px-0">
      {/* Left Column - Heading and CTA */}
      <div className="flex flex-col w-full lg:w-1/2 max-w-[680px] items-start gap-4 lg:pr-10">
        {/* Subtitle with dot */}
        <div className="flex items-center">
          <div className="flex flex-col w-6 h-2 items-start pr-4">
            <div className="w-2 h-2 bg-wezomcomblack rounded" />
          </div>
          <div className="[font-family:'IBM_Plex_Mono',Helvetica] font-semibold text-wezomcomblack text-xs md:text-[13px] leading-4">
            SECURITY FAQ
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="[font-family:'Manrope',Helvetica] font-bold text-wezomcomblack text-3xl md:text-5xl lg:text-[64px] tracking-[-3.84px] leading-tight md:leading-[64px] max-w-[18ch]">
          Secure What Matters.
        </h2>

        {/* CTA Button */}
        <div className="pt-2">
          <Button className="h-14 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 [font-family:'IBM_Plex_Mono',Helvetica] font-semibold text-white text-base tracking-[-0.16px] leading-[22.4px] px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            SEE CYPHLENS IN ACTION
            <div className="pl-4 md:pl-6">
              <ArrowRightIcon className="w-3 md:w-4 h-3 md:h-4" />
            </div>
          </Button>
        </div>
      </div>

      {/* Right Column - FAQ Accordion */}
      <div className="flex flex-col w-full lg:w-1/2 max-w-[680px] items-start">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
          aria-label="Frequently asked questions"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="mt-2 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-fuchsia-100 hover:border-fuchsia-200 transition-colors duration-300"
            >
              <AccordionTrigger className="flex min-h-12 md:min-h-16 px-4 md:px-6 py-4 md:py-6 [font-family:'Manrope',Helvetica] font-semibold text-slate-900 text-lg md:text-xl tracking-[-0.40px] leading-7 hover:no-underline text-left hover:text-fuchsia-700 transition-colors duration-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6 [font-family:'Manrope',Helvetica] font-medium text-slate-600 text-sm leading-[19.6px]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
