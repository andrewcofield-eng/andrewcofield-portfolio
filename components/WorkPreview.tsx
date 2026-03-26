"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredWork = [
  {
    title: "Lowe's Endcap Display",
    metric: "200% sales increase",
    category: "Retail Experience",
    description: "Conceptualized and executed an innovative endcap display for Lowe's Home Improvement.",
    image: "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127243/LowesEncap_hero.jpg",
    href: "/work",
    featured: false,
    links: [],
  },
  {
    title: "InVue In-House Studio",
    metric: "$500,000+ saved",
    category: "Content Production",
    description: "Built in-house photography and video capabilities, eliminating external production costs.",
    image: "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127244/Microsoft_stand_0169_r6zuj3.jpg",
    href: "/work",
    featured: false,
    links: [],
  },
  {
    title: "Sealed Air Virtual Photography",
    metric: "Potential $700,000+ saved",
    category: "3D Rendering",
    description: "Pioneered Adobe Substance as substitute for traditional photography.",
    image: "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774126886/iPack-Prismiq-5curved-Camera_gicysk.jpg",
    href: "/work",
    featured: false,
    links: [],
  },
  {
    title: "3M Visual Attention Service",
    metric: "Science-backed design",
    category: "Research & Strategy",
    description: "Used eye-tracking simulation to prove design decisions with empirical data.",
    image: "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127338/VAS-airspeed-COMPARE_szxjha.png",
    href: "/work",
    featured: false,
    links: [],
  },
];

export default function WorkPreview() {
  return (
    <section className="py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1a1f2e] mb-4">
              Selected Work
            </h2>
            <p className="text-[#1a1f2e]/70 max-w-2xl text-lg">
              Campaigns, systems, and measurable results. The work that demonstrates
              creative vision paired with business impact.
            </p>
          </div>
          <Link
            href="/work"
            className="mt-6 md:mt-0 inline-flex items-center text-[#1a1f2e] font-medium hover:text-[#e07a5f] transition-colors"
          >
            View all projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* AgenticFlow Featured Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 rounded-xl overflow-hidden bg-[#1a1f2e] text-white"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774447587/agenticflowarchitechture_copy_logr4w.png"
                alt="AgenticFlow system architecture"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1f2e]/60 md:block hidden" />
            </div>

            {/* Content side */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e07a5f]/20 text-[#e07a5f] font-mono text-xs uppercase tracking-wider">
                  🚧 Live Project
                </span>
                <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
                  AI & Automation
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">
                AgenticFlow — Autonomous ABM
              </h3>

              <p className="text-white/70 mb-3 text-sm leading-relaxed">
                Thirty years of connecting creative and systems. Now I'm teaching machines to do it.
              </p>

              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                Built from scratch — connecting PIM, DAM, and CRM so AI agents can identify warm
                prospects and generate personalized campaigns automatically. This is the logical
                next chapter, and my next career move.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["LangChain", "FastAPI", "Next.js", "Railway", "Cloudinary"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://agenticflowmarketing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#e07a5f] text-white text-sm font-medium rounded hover:bg-[#e07a5f]/80 transition-colors"
                >
                  Live Site ↗
                </a>
                <a
                  href="https://pim-dam-crm-integration-production-62d7.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-medium rounded hover:bg-white/20 transition-colors"
                >
                  Dashboard ↗
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center px-4 py-2 bg-white/10 text-white text-sm font-medium rounded hover:bg-white/20 transition-colors"
                >
                  See all work
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regular 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredWork.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/work">
                <div className="relative aspect-video bg-[#1a1f2e]/5 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#1a1f2e]/0 group-hover:bg-[#1a1f2e]/20 transition-colors duration-300" />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono text-xs text-[#e07a5f] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-[#1a1f2e]/50">
                    {project.metric}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1a1f2e] mb-2 group-hover:text-[#e07a5f] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#1a1f2e]/70">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}