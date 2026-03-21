import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toolkit | Andrew Cofield",
  description: "Creative direction, visual production, systems architecture, and technology capabilities.",
};

const skillCategories = [
  {
    title: "Creative Direction",
    icon: "🎨",
    description: "Leading teams to develop impactful creative solutions across global brands.",
    skills: [
      "Campaign strategy and concept development",
      "Brand alignment across 12+ global markets",
      "Cross-functional team leadership",
      "Vendor relationship management (printers, animators, photographers)",
      "Presentation design for Walmart, Best Buy, Lowe's, Target",
      "Trade show planning and execution",
    ],
  },
  {
    title: "Visual Production",
    icon: "📷",
    description: "Hands-on capabilities from concept to final production.",
    skills: [
      "Studio photography and art direction",
      "Video production and editing (Final Cut Pro, Premiere)",
      "3D product visualization and rendering",
      "Virtual photography workflows",
      "Packaging design and point-of-sale materials",
      "Graphic design across print and digital",
    ],
  },
  {
    title: "Systems & Operations",
    icon: "⚙️",
    description: "Building the infrastructure that enables creative work at scale.",
    skills: [
      "DAM Administration: AEM Assets, Widen Collective, Web DAM",
      "PIM Implementation: Akeneo (2025 Global Ambassador)",
      "Project Management: Adobe Workfront",
      "Agile/Lean/Scrum certified (Lean Dog Consulting)",
      "System integration and workflow optimization",
      "Cost optimization and ROI improvement",
    ],
  },
  {
    title: "Technology & AI",
    icon: "🤖",
    description: "Leveraging emerging technology to enhance creativity and efficiency.",
    skills: [
      "Adobe Creative Suite expert (Photoshop, Illustrator, InDesign)",
      "AI-assisted workflow development",
      "Building AI agentic platforms",
      "3M VAS eye-tracking and design research",
      "MarTech stack integration",
      "E-commerce platform integration (Magento, AEM Sites)",
    ],
  },
  {
    title: "The Retail Channel",
    icon: "🏪",
    description: "Deep expertise in retail marketing and customer experience.",
    skills: [
      "Endcap and retail display design",
      "Sales presentation development",
      "Trade show booth design and execution",
      "Customer event planning",
      "Sales kit building and management",
      "Retail partner collaboration (Walmart, Target, Lowe's, Best Buy)",
    ],
  },
  {
    title: "Leadership & Growth",
    icon: "🌱",
    description: "Building teams, developing talent, and driving continuous improvement.",
    skills: [
      "Team building and mentorship",
      "Training and development programs",
      "Change management and process adoption",
      "Stakeholder communication and buy-in",
      "Cross-functional collaboration",
      "Continuous learning and adaptation",
    ],
  },
];

export default function ToolkitPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1f2e] mb-6">
            The Toolkit
          </h1>
          <p className="text-xl text-[#1a1f2e]/70 max-w-3xl">
            I'm not just a creative director. I'm a systems builder, a technologist, 
            a salesperson, and a team leader. Here's how I create value.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg p-6 shadow-sm border border-[#1a1f2e]/5 hover:border-[#d4a373]/50 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h2 className="font-serif text-xl font-semibold text-[#1a1f2e] mb-2">
                {category.title}
              </h2>
              <p className="text-[#1a1f2e]/60 text-sm mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-[#1a1f2e]/80 flex items-start">
                    <span className="text-[#d4a373] mr-2">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 p-8 bg-[#1a1f2e] text-[#f7f5f0] rounded-lg">
          <p className="font-serif text-xl mb-4">
            "I'm highly versatile, resilient, and I never stop looking for ways 
            to add value and to learn and grow."
          </p>
          <p className="text-[#f7f5f0]/70">
            — That's what 15+ years and five professional reinventions have taught me.
          </p>
        </div>
      </div>
    </div>
  );
}