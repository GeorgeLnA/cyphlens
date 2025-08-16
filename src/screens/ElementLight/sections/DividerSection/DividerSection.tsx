import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const DividerSection = (): JSX.Element => {
  // Case studies data
  const caseStudies = [
    {
      id: 1,
      category: "FINANCE",
      title: "Secure sharing with clients who hate friction",
      description: "What Cyphlens Replaces: Login portals, token-based 2FA. Why It's Better: Secure sharing with clients who hate friction.",
      imageUrl: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      videoUrl: "/20250808_0303_Evening Data Focus_remix_01k23pq2eve6yajgmzsegw2kd4.mp4",
      tags: ["FINANCE", "CLIENT ACCESS", "FRICTION-FREE"],
      metrics: [
        { value: "80%", label: "Reduced friction" },
        { value: "99%", label: "Security maintained" },
      ],
    },
    {
      id: 2,
      category: "HEALTHCARE",
      title: "HIPAA-conscious access",
      description: "What Cyphlens Replaces: Static links and PDF handoffs. Why It's Better: HIPAA-conscious access without compromising patient data.",
      imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      videoUrl: "/20250808_0319_Mysterious Atomius Showcase_remix_01k23qmj4gfa39pcjw5qp3skfs.mp4",
      tags: ["HEALTHCARE", "HIPAA", "PATIENT DATA"],
      metrics: [
        { value: "100%", label: "HIPAA compliance" },
        { value: "50%", label: "Faster access" },
      ],
    },
    {
      id: 3,
      category: "LEGAL",
      title: "Compliant access without giving up control",
      description: "What Cyphlens Replaces: Password-protected files, email attachments. Why It's Better: Compliant access without giving up control.",
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      videoUrl: "/20250808_0312_Intense Business Meeting_remix_01k23q7k80fd8sptzcz0sb2h8k.mp4",
      tags: ["LEGAL", "COMPLIANCE", "DOCUMENT CONTROL"],
      metrics: [
        { value: "100%", label: "Document control" },
        { value: "3x", label: "Faster sharing" },
      ],
    },
    {
      id: 4,
      category: "HR & INTERNAL OPS",
      title: "Audit-friendly, revocable access for PII",
      description: "What Cyphlens Replaces: Shared folders, email invites. Why It's Better: Audit-friendly, revocable access for PII with complete oversight.",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      videoUrl: "/20250808_0310_Dynamic Code Generation_simple_compose_01k23q2aw3ed88rtg3kd2emr5v.mp4",
      tags: ["HR", "PII PROTECTION", "AUDIT TRAILS"],
      metrics: [
        { value: "100%", label: "Audit compliance" },
        { value: "Instant", label: "Access revocation" },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#17030A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Real Solutions for
            <span className="block bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Real Problems
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See how Cyphlens transforms complex security challenges into seamless experiences
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:gap-12">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Media Section */}
                <div className="relative overflow-hidden">
                  {cs.videoUrl ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={cs.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${cs.imageUrl})` }}
                      aria-hidden="true"
                    />
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 font-semibold px-4 py-2 rounded-full border-0 shadow-lg">
                      {cs.category}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {cs.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {cs.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {cs.metrics.map((m, mIdx) => (
                      <div
                        key={`${cs.id}-metric-${mIdx}`}
                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200"
                      >
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                          {m.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cs.tags.map((tag, tagIdx) => (
                      <Badge
                        key={`${cs.id}-tag-${tagIdx}`}
                        variant="secondary"
                        className="bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 hover:bg-fuchsia-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      className="w-full md:w-auto h-14 px-8 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span className="text-base">VIEW CASE</span>
                      <ArrowRightIcon className="ml-3 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
