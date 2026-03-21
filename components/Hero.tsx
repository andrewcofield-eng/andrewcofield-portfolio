"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f7f5f0] pt-16">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4a373]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm text-[#e07a5f] mb-6 tracking-wider uppercase"
        >
          A Creative Director&apos;s Story
        </motion.p>

        {/* Main Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1f2e] leading-tight mb-4">
            &ldquo;Give me facts, I might listen.
            <br />
            <span className="text-[#e07a5f] italic">Tell me a story</span> and you have my attention.&rdquo;
          </p>
          <footer className="font-mono text-sm text-[#1a1f2e]/60 mt-6">
            — Professor John McHale, Illinois State University
          </footer>
        </motion.blockquote>

        {/* Second Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 pl-4 border-l-2 border-[#d4a373]"
        >
          <p className="font-serif text-2xl md:text-3xl text-[#1a1f2e]/80 italic mb-2">
            &ldquo;Above all else?&rdquo;
          </p>
          <p className="font-serif text-2xl md:text-3xl text-[#1a1f2e] font-semibold">
            &ldquo;Clarity!&rdquo;
          </p>
        </motion.div>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg text-[#1a1f2e]/70 max-w-2xl mb-8 leading-relaxed"
        >
          I don&apos;t think the standard resume format is particularly good for storytelling. 
          Today, we use AI tools to write resumes for ATS systems. I send those too. 
          But if you&apos;re here, let me try something different.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-xl text-[#1a1f2e] font-medium mb-12"
        >
          Let me tell you my story.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/story"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1a1f2e] text-[#f7f5f0] font-medium rounded hover:bg-[#e07a5f] transition-colors duration-300"
          >
            Read My Story
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1a1f2e] text-[#1a1f2e] font-medium rounded hover:bg-[#1a1f2e] hover:text-[#f7f5f0] transition-colors duration-300"
          >
            See My Work
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-[#1a1f2e]/40" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}