import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work | Andrew Cofield",
  description: "Portfolio of creative campaigns, systems architecture, and measurable business results.",
};

const projects = [
  {
    slug: "lowes-endcap",
    title: "Lowe's Endcap Display",
    category: "Retail Experience",
    metric: "200% sales increase",
    summary: "Conceptualized and executed an innovative endcap display for Lowe's Home Improvement, resulting in a 200% increase in sales.",
    description: "Designed and produced a comprehensive retail display solution that transformed product presentation at Lowe's. The project involved coordination with retail partners, manufacturing vendors, and internal teams to deliver a cohesive brand experience that drove measurable sales lift.",
    skills: ["Retail Design", "Trade Show", "Vendor Management", "Sales Strategy"],
  },
  {
    slug: "invue-studio",
    title: "InVue In-House Studio",
    category: "Content Production",
    metric: "$500,000+ saved annually",
    summary: "Built in-house photography and video capabilities, creating commercial content internally and eliminating external production costs.",
    description: "Established a full-service in-house creative studio capable of producing commercial photography and product demonstration videos. Trained team members, equipped the space, and developed workflows that reduced dependency on external agencies while improving turnaround times and brand consistency.",
    skills: ["Studio Management", "Video Production", "Photography", "Cost Optimization"],
  },
  {
    slug: "electrolux-dam",
    title: "Electrolux Global DAM",
    category: "Systems Architecture",
    metric: "12+ global markets served",
    summary: "Implemented AEM Assets as Digital Asset Management system serving marketing teams across 12+ countries.",
    description: "Led the implementation and ongoing administration of AEM Assets as the global DAM solution for Electrolux Small Appliances. Served as both System Administrator and DAM Librarian, managing assets for marketing, engineering, and finance teams. Integrated with Adobe Creative Cloud, Workfront, and e-commerce platforms.",
    skills: ["AEM Assets", "DAM Administration", "System Integration", "Global Operations"],
  },
  {
    slug: "sealed-air-pim",
    title: "Sealed Air PIM/DAM Integration",
    category: "Systems Architecture",
    metric: "2025 Akeneo Global Ambassador",
    summary: "Led PIM and DAM implementation with full MarTech stack integration including Magento, Marketo, and Adobe Dynamic Media.",
    description: "Architected and operationalized a comprehensive product information and digital asset management ecosystem. Integrated Akeneo PIM with AEM Assets, Adobe Dynamic Media, Magento e-commerce, Marketo marketing automation, and Workfront project management. Awarded 2025 Akeneo Champions Global Ambassador recognition.",
    skills: ["Akeneo PIM", "AEM Assets", "MarTech Integration", "Adobe Dynamic Media"],
  },
  {
    slug: "3m-vas",
    title: "3M Visual Attention Service",
    category: "Research & Strategy",
    metric: "Science-backed design decisions",
    summary: "Used eye-tracking simulation software to prove design effectiveness with empirical data rather than subjective opinion.",
    description: "Leveraged 3M's Visual Attention Service (VAS) to bring scientific rigor to design reviews. Used eye-tracking simulation to predict visual attention patterns, proving design decisions with neurological research. Transformed creative conversations from 'I like this' to 'This performs better based on data.'",
    skills: ["Design Research", "Eye Tracking", "Data-Driven Design", "Stakeholder Communication"],
  },
  {
    slug: "agile-marketing",
    title: "Agile Marketing Transformation",
    category: "Process Innovation",
    metric: "Team-trained in Agile/Scrum",
    summary: "Completed intensive Agile training and led marketing department adoption of Agile methodologies.",
    description: "Completed 2-week intensive training on Agile framework, methodologies, and tools from Lean Dog Consulting. Returned to Electrolux and trained the marketing team in Agile principles, implementing Agile tools and ceremonies for campaign development. Improved speed-to-market and cross-functional collaboration.",
    skills: ["Agile", "Scrum", "Lean", "Change Management", "Training"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1f2e] mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-[#1a1f2e]/70 max-w-3xl">
            Campaigns, systems, and measurable results. The work that demonstrates 
            creative vision paired with business impact. Each project represents 
            a problem solved, a system built, or a result achieved.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-[#1a1f2e]/5 h-full flex flex-col"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-[#1a1f2e]/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#1a1f2e]/30">
                  <span className="font-mono text-sm">[Project Image]</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#e07a5f] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-[#1a1f2e]/50">
                    {project.metric}
                  </span>
                </div>
                
                <h2 className="font-serif text-xl font-semibold text-[#1a1f2e] mb-2">
                  {project.title}
                </h2>
                
                <p className="text-[#1a1f2e]/70 text-sm mb-4 flex-1">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-[#1a1f2e]/5 text-[#1a1f2e]/70 rounded font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}