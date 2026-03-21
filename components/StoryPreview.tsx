"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const chapters = [
  {
    number: "01",
    title: "The Photographer",
    period: "2001-2003",
    description: "SIU. Commercial photography. A dream of becoming a professor.",
  },
  {
    number: "02",
    title: "The Pivot",
    period: "Senior Year",
    description: "My son was born. I became a jeweler. Then digital media called.",
  },
  {
    number: "03",
    title: "The Designer",
    period: "2011-2016",
    description: "Electrolux. Promoted to Creative Director. Built systems, not just pixels.",
  },
  {
    number: "04",
    title: "The Systems Builder",
    period: "2016-2024",
    description: "Sealed Air. PIM. DAM. 3D visualization. Infrastructure for storytelling.",
  },
  {
    number: "05",
    title: "The AI Explorer",
    period: "Now",
    description: "Building an AI agentic ABM platform. Looking for what's next.",
  },
];

export default function StoryPreview() {
  return (
    <section className="py-24 bg-[#1a1f2e] text-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Five Chapters of Reinvention
          </h2>
          <p className="text-[#f7f5f0]/70 max-w-2xl text-lg">
            I&apos;ve shifted and reinvented myself every time my professional roles demanded it. 
            From aspiring professor to AI platform builder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/story" className="block group">
                <div className="p-6 bg-[#252b3d] rounded-lg border border-[#f7f5f0]/10 hover:border-[#d4a373]/50 transition-colors duration-300 h-full">
                  <span className="font-mono text-sm text-[#d4a373] mb-2 block">
                    Chapter {chapter.number}
                  </span>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-[#d4a373] transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-[#f7f5f0]/50 mb-3 font-mono">
                    {chapter.period}
                  </p>
                  <p className="text-[#f7f5f0]/70">
                    {chapter.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/story"
            className="inline-flex items-center text-[#d4a373] hover:text-[#f7f5f0] transition-colors font-medium"
          >
            Read the full story
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}