"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    slug: "lowes-endcap",
    title: "Lowe's Endcap Display",
    category: "Retail Experience",
    metric: "200% sales increase",
    summary: "Conceptualized and executed an innovative endcap display for Lowe's Home Improvement, resulting in a 200% increase in sales.",
    skills: ["Retail Design", "Clear Problem Statement", "Vendor Management", "Sales Strategy"],
    images: [
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127243/LowesEncap_hero.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127288/BrushrollCleanDisplay_tbbw7s.png",
    ],
    video: null,
  },
  {
    slug: "invue-studio",
    title: "InVue In-House Studio",
    category: "Content Production",
    metric: "$500,000+ saved annually",
    summary: "Built in-house photography and video capabilities, creating commercial content internally and eliminating external production costs.",
    skills: ["Studio Management", "Video Production", "Photography", "Cost Optimization"],
    images: [
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127240/CT100_Swivel_0155_elpmwe.jpg",
    ],
    video: null,
  },
  {
    slug: "virtual-photography",
    title: "Virtual Photography & 3D Renders",
    category: "Content Innovation",
    metric: "CAD-to-commercial ready",
    summary: "Implemented virtual product photography using Adobe Substance 3D, generating photorealistic renders directly from CAD engineering drawings — eliminating traditional photo shoots.",
    skills: ["Adobe Substance 3D", "CAD Integration", "Virtual Photography", "Content Production"],
    images: [
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774126887/shrinkBeefEyeOfRound-AndCheese-Prismiq.jpg-Camera_dfwmbc.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127365/CS-winebox-Prismiq-Camera_jvuvrh.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127365/farmbrandHamburgerOnTeal-Camera_yv3ix4.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774126648/ipack_vphmx3.jpg",
    ],
    video: null,
  },
  {
    slug: "sealed-air-pim",
    title: "Sealed Air PIM/DAM Integration",
    category: "Systems Architecture",
    metric: "2025 Akeneo Global Ambassador",
    summary: "Led PIM and DAM implementation with full MarTech stack integration including Magento, Marketo, and Adobe Dynamic Media.",
    skills: ["Akeneo PIM", "AEM Assets", "MarTech Integration", "Adobe Dynamic Media"],
    images: [],
    video: "https://vimeo.com/1077690401",
  },
  {
    slug: "3m-vas",
    title: "3M Visual Attention Service",
    category: "Research & Strategy",
    metric: "Science-backed design decisions",
    summary: "Used eye-tracking simulation software to prove design effectiveness with empirical data rather than subjective opinion.",
    skills: ["Design Research", "Eye Tracking", "Data-Driven Design", "Stakeholder Communication"],
    images: [
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127338/VAS-airspeed-COMPARE_szxjha.png",
    ],
    video: null,
  },
  {
    slug: "carnivores-will-go-wild",
    title: "Carnivores Will Go Wild",
    category: "Campaign & Trade Show",
    metric: "IPPE show-stopping booth",
    summary: "Evolved the Cryovac 'Carnivores Will Go Wild' campaign into a compelling, high-impact trade show booth experience at IPPE — the world's largest poultry and meat industry event.",
    skills: ["Campaign Development", "Trade Show Design", "Brand Storytelling", "Experiential Marketing"],
    images: [
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774126688/carnivore1-1_o5otts.png",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127360/20200128_140409-01_rmxbxa.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127357/20200128_135756_gl6ek5.jpg",
    ],
    video: null,
  },
  {
    slug: "electrolux-multi-brand",
    title: "Multi-Brand Creative Leadership",
    category: "Brand Management",
    metric: "6 brands. One in-house team.",
    summary: "Led creative execution across six licensed and owned brands at Electrolux — Eureka, Electrolux, Sanitaire, Frigidaire Small Appliances, 3M Filtrete, and Arm & Hammer — spanning packaging, photography, digital ads, and video, all produced in-house.",
    skills: ["Brand Management", "Packaging Design", "In-House Production"],
    images: [
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127365/AS1000_AirSpeed_Whirlwind_mipqnd.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127293/filtretenew_azkdbi.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127284/anhPkg_ki2wzk.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127281/AirSpeedOneBestBuy_g33dcw.png",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127279/AirSpeedConcept_eg7y0t.png",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127295/HomeSourcePkg_jdkwta.jpg",
      "https://res.cloudinary.com/dv9ttgxvy/image/upload/v1774127296/image17_dt3xof.png",
    ],
    video: null,
  },
  {
    slug: "bubble-wrap-appreciation-day",
    title: "Bubble Wrap Appreciation Day",
    category: "Social & Video Production",
    metric: "$1,200 budget. Zero revisions.",
    summary: "When my director said 'Andrew, a spoof infomercial for our new bubble wrap inflator seems like your kind of thing,' I could not have been more thrilled. Shot, scripted, and produced with almost the entire budget going to the voiceover. Not a single revision on the script or final cut. One of my favorite projects ever.",
    skills: ["Video Production", "Scriptwriting", "Social Media"],
    images: [],
    video: "https://vimeo.com/312193191",
  },
  {
    slug: "dam-hype-video",
    title: "Getting People Pretty DAM Hyped",
    category: "Internal Communications",
    metric: "Stakeholder buy-in through storytelling",
    summary: "I used to make hype videos for a minor league hockey team. When I built AEM Assets as Sealed Air's enterprise DAM, I used those same skills to get internal stakeholders genuinely excited. Big systems need big energy.",
    skills: ["Video Production", "Change Management", "Stakeholder Communication"],
    images: [],
    video: "https://vimeo.com/1133198133",
  },
];

function Slideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-[#1a1f2e]/5 h-full flex flex-col"
            >
              {/* Media */}
              <div className="aspect-video bg-[#1a1f2e]/5 relative overflow-hidden">
                {project.video ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${project.video.split("vimeo.com/")[1].split("?")[0]}`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                ) : project.images.length > 0 ? (
                  <Slideshow images={project.images} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[#1a1f2e]/30">
                    <span className="font-mono text-sm">[Project Image]</span>
                  </div>
                )}
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