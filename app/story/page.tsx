import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Story | Andrew Cofield",
  description: "From aspiring photography professor to AI platform builder. Five chapters of reinvention.",
};

const chapters = [
  {
    number: "01",
    title: "The Photographer",
    period: "2001-2003",
    location: "Southern Illinois University",
    content: `I went to Southern Illinois University to become a photography professor. Art, design, communication, technology — photography seemed to pull it all together.

I loved the darkroom. The way light and chemistry created something permanent from a moment. I loved teaching, too — sharing knowledge and watching someone else grow, nothing better.

But life had other plans.`,
  },
  {
    number: "02",
    title: "The Pivot",
    period: "Senior Year",
    location: "Life Happened",
    content: `My son was born my senior year.

I needed to earn a living, so I became a jeweler. It was creative work, precise work, satisfying work, but pretty isolating. At the end of the day, I had something shiny to show for it.

When that company closed, I went back to school for digital media at Illinois State University. I was building on the same foundation — art, design, communication, technology — just with new tools.

That's where I met Professor McHale. That's where I learned that stories matter more than facts, and clarity matters above all.`,
  },
  {
    number: "03",
    title: "The Designer",
    period: "2011-2016",
    location: "Electrolux Small Appliances",
    content: `I was hired as a designer at Electrolux. Six months later, I was promoted to Creative Director.

That shift from designer to CD forced me to think about systems, not just pixels. I couldn't personally execute every piece of creative anymore — I had to build the machine that made great creative possible.

I built DAM systems. I implemented Workfront for project management. I discovered that good design isn't just opinion — it's science.

I used 3M's Visual Attention Service to prove that design decisions could be empirically validated. Eye-tracking simulation software showed stakeholders that design wasn't just "what feels right" — it was measurable, testable, scientific.

I led creative for Electrolux, Frigidaire, Eureka, 3M, Arm & Hammer — guiding projects from concept to completion across global markets.`,
  },
  {
    number: "04",
    title: "The Systems Builder",
    period: "2016-2024",
    location: "Sealed Air Corporation",
    content: `At Sealed Air, my role evolved from storytelling to building the infrastructure for storytelling.

When I first started at Sealed Air, I was back to creative design. I came up with ads. I made Bubble Wrap Appreciation Day Videos. The team grew. My Creative Director discovered my technical capabilities and saw how well I worked with IT building systems. My role changed.

I led the strategic building and operations of systems that deliver product information and marketing assets across multiple channels. PIM systems. DAM platforms. 3D visualization pipelines.

I became the person who makes the creative work possible at scale.

I was awarded the 2025 Akeneo Champions Global Ambassador award for my work with PIM implementation and promotion.

I operationalized AEM Assets with Adobe Dynamic Media, integrating DAM with AEM Sites, Magento, Marketo, Workfront, and Adobe Creative Cloud.`,
  },
  {
    number: "05",
    title: "The AI Explorer",
    period: "Now",
    location: "Charlotte, NC",
    content: `Now I'm building an AI agentic ABM platform while I look for my next opportunity.

I'm combining everything — the creative vision, the systems thinking, the technical skills — to explore what's next.

I've learned that I'm highly versatile, resilient, and I never stop looking for ways to add value and to learn and grow.

I'm a salesman, a marketer, a technologist, a designer, an artist, a teacher, a dad joke teller, and I love to be part of a team.

I've been better at telling stories for my employers than telling my own. This site is my attempt to change that.`,
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1f2e] mb-6">
            My Story
          </h1>
          <p className="text-xl text-[#1a1f2e]/70 max-w-2xl mx-auto">
            Five chapters of reinvention. From aspiring professor to AI platform builder.
          </p>
        </div>

        {/* Chapters */}
        <div className="space-y-16">
          {chapters.map((chapter, index) => (
            <article key={chapter.number} className="relative">
              {/* Timeline line */}
              {index !== chapters.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-px bg-[#1a1f2e]/20" />
              )}
              
              <div className="flex gap-8">
                {/* Chapter number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1a1f2e] text-[#f7f5f0] flex items-center justify-center font-serif text-xl font-bold">
                  {chapter.number}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-wrap items-baseline gap-4 mb-4">
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1a1f2e]">
                      {chapter.title}
                    </h2>
                    <span className="font-mono text-sm text-[#e07a5f]">
                      {chapter.period} · {chapter.location}
                    </span>
                  </div>
                  
                  <div className="prose prose-lg text-[#1a1f2e]/80 leading-relaxed whitespace-pre-line">
                    {chapter.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-24 text-center">
          <p className="font-serif text-2xl text-[#1a1f2e] italic mb-6">
            "Above all else?"
          </p>
          <p className="font-serif text-3xl text-[#1a1f2e] font-bold mb-8">
            "Clarity!"
          </p>
          <Link
            href="/work"
            className="inline-flex items-center px-8 py-4 bg-[#1a1f2e] text-[#f7f5f0] font-medium rounded hover:bg-[#e07a5f] transition-colors"
          >
            See What I've Built
          </Link>
        </div>
      </div>
    </div>
  );
}