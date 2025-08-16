import React, { useMemo, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

type ExpertiseCategory = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageSrc: string;
};

const CATEGORIES: ExpertiseCategory[] = [
  {
    id: "sending",
    title: "Send with confidence",
    tags: [
      "SECURE MESSAGING",
      "CONTENT PROTECTION",
      "CROSS-DOMAIN SHARING",
      "RECIPIENT CONTROL",
      "DOCUMENT SECURITY",
      "DATA PROTECTION",
    ],
    description:
      "Security that travels with your content means you stay in control-across any domain, to any recipient, even outside your organization. Share documents, data, or messages freely without worrying about misuse or mishandling.",
    imageSrc: "/software.png",
  },
  {
    id: "accessing",
    title: "Access without friction",
    tags: [
      "SWIPE AUTHENTICATION",
      "NO CODES",
      "INSTANT ACCESS",
      "MFA REPLACEMENT",
      "SEAMLESS LOGIN",
      "USER EXPERIENCE",
    ],
    description:
      "Swipe-based authentication replaces frustrating MFA interruptions with secure, intuitive access-no copying codes, no switching apps, no waiting.",
    imageSrc: "/software.png",
  },
  {
    id: "processing",
    title: "Protect what matters",
    tags: [
      "HUMAN-PROOF PROCESSING",
      "TRANSACTION SECURITY",
      "VULNERABLE POINTS",
      "TEAM WORKFLOWS",
      "COMMUNICATION PROTECTION",
      "BUSINESS CONTINUITY",
    ],
    description:
      "Human-proof processing protects your most sensitive transactions and communications at their most vulnerable points, without disrupting how your team works.",
    imageSrc: "/image.png",
  },
  {
    id: "platform",
    title: "Beyond the login",
    tags: [
      "POST-LOGIN SECURITY",
      "ADVANCED PROTECTION",
      "BREACH RESILIENCE",
      "CREDENTIAL DEFENSE",
      "TARGETED ATTACKS",
      "MALWARE PROTECTION",
    ],
    description:
      "Most cybersecurity defenses focus on stopping hackers and fraudsters at the login page. We provide a second level of defense against the ones who break through.",
    imageSrc: "/section-image.png",
  },
  {
    id: "compliance",
    title: "Compliance without Complexity",
    tags: ["HIPAA", "GDPR", "SOC 2", "FINRA", "AUDIT TRAILS", "REPORTING"],
    description:
      "Audit trails, time-bound access, and identity-tied permissions give security leaders what they need – without compromising usability.",
    imageSrc: "/software.png",
  },
  {
    id: "integration",
    title: "Seamless Integration",
    tags: ["SLACK", "TEAMS", "EMAIL", "EXISTING WORKFLOWS", "COLLABORATION", "PLATFORMS"],
    description:
      "Cyphlens layers seamlessly into the platforms your team already uses to collaborate. Whether you're sharing sensitive documents, authenticating users, or sending confidential messages, Cyphlens protects your data without forcing new workflows.",
    imageSrc: "/software.png",
  },
];

// Compliance standards data
const techStackItems = [
  { name: "HIPAA", icon: "/component-3-14.svg" },
  { name: "GDPR", icon: "/component-3-31.svg" },
  { name: "SOC 2", icon: "/component-3-6.svg" },
  { name: "FINRA", icon: "/component-3-31.svg" },
  { name: "ISO 27001", icon: "/component-3-40.svg" },
  { name: "CCPA", icon: "/component-3-12.svg" },
  { name: "PCI DSS", icon: "/component-3-34.svg" },
  { name: "NIST", icon: "/component-3-53.svg" },
];

export const InteractiveExpertise = (): JSX.Element => {
  const [activeId, setActiveId] = useState<string>("sending");

  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0],
    [activeId],
  );

  return (
    <div className="w-full bg-gradient-to-br from-white to-slate-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-200 mb-6">
            <div className="w-2 h-2 bg-fuchsia-500 rounded-full mr-3"></div>
            <span className="[font-family:'IBM_Plex_Mono',Helvetica] font-semibold text-fuchsia-700 text-sm tracking-wide">
              CYPHLENS FEATURES
            </span>
          </div>
          <h2 className="[font-family:'Manrope',Helvetica] font-bold text-slate-900 text-4xl md:text-6xl lg:text-7xl tracking-[-3px] leading-tight mb-6">
            What You Send Shouldn't Be
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 mt-2">
              What Gets Breached
            </span>
          </h2>
          <p className="max-w-3xl mx-auto [font-family:'Manrope',Helvetica] font-medium text-slate-600 text-lg md:text-xl leading-relaxed">
            Cyphlens's unique platform and patented technology is designed to help banks, fintechs, and payment providers build and grow with confidence.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CATEGORIES.map((category, index) => (
            <div 
              key={category.id} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 hover:border-fuchsia-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className="pt-4">
                <h3 className="[font-family:'Manrope',Helvetica] font-bold text-slate-900 text-xl lg:text-2xl mb-4 group-hover:text-fuchsia-700 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6">
                  {category.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={`${category.id}-${tag}`}
                      variant="outline"
                      className="rounded-full border-fuchsia-200 text-fuchsia-700 px-3 py-1 text-xs font-medium bg-fuchsia-50 hover:bg-fuchsia-100 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Learn More Button */}
                <button className="inline-flex items-center text-fuchsia-600 hover:text-fuchsia-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300">
                  Learn More
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Compliance Section */}
        <div className="bg-gradient-to-br from-purple-950 via-violet-900 to-fuchsia-900 rounded-3xl p-12 lg:p-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-300/30 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></div>
              <span className="[font-family:'IBM_Plex_Mono',Helvetica] font-semibold text-fuchsia-200 text-sm tracking-wide">
                COMPLIANCE STANDARDS
              </span>
            </div>
            <h2 className="[font-family:'Manrope',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-6xl tracking-[-3px] leading-tight mb-4">
              Compliance without
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mt-2">
                Complexity
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
              Audit trails, time-bound access, and identity-tied permissions give security leaders what they need – without compromising usability.
            </p>
          </div>

          {/* Compliance grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStackItems.map((standard, index) => (
              <div 
                key={standard.name} 
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-fuchsia-300/50"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{standard.name.slice(0, 2)}</span>
                </div>
                <h3 className="text-white font-semibold text-sm lg:text-base mb-2">
                  {standard.name}
                </h3>
                <p className="text-fuchsia-200 text-xs lg:text-sm opacity-80">
                  {index % 4 === 0 ? "Healthcare data protection" : 
                   index % 4 === 1 ? "European data privacy" :
                   index % 4 === 2 ? "Security controls framework" : 
                   "Financial industry standards"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveExpertise;

