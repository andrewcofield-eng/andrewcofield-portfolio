import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Andrew Cofield",
  description: "Get in touch with Andrew Cofield - Creative Director, systems builder, and AI explorer.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1f2e] mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-[#1a1f2e]/70 max-w-2xl mx-auto">
            I'm looking for my next opportunity. I'd love to hear what you're building 
            and how I might help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#1a1f2e] mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="font-mono text-sm text-[#e07a5f] uppercase tracking-wider mb-2">
                  Email
                </p>
                <a 
                  href="mailto:andrewcofield@gmail.com"
                  className="text-lg text-[#1a1f2e] hover:text-[#e07a5f] transition-colors"
                >
                  andrewcofield@gmail.com
                </a>
              </div>
              
              <div>
                <p className="font-mono text-sm text-[#e07a5f] uppercase tracking-wider mb-2">
                  Phone
                </p>
                <a 
                  href="tel:309-212-2157"
                  className="text-lg text-[#1a1f2e] hover:text-[#e07a5f] transition-colors"
                >
                  309.212.2157
                </a>
              </div>
              
              <div>
                <p className="font-mono text-sm text-[#e07a5f] uppercase tracking-wider mb-2">
                  LinkedIn
                </p>
                <a 
                  href="https://linkedin.com/in/andrew-cofield-8b2a887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#1a1f2e] hover:text-[#e07a5f] transition-colors"
                >
                  linkedin.com/in/andrew-cofield-8b2a887
                </a>
              </div>
              
              <div>
                <p className="font-mono text-sm text-[#e07a5f] uppercase tracking-wider mb-2">
                  Location
                </p>
                <p className="text-lg text-[#1a1f2e]">
                  Charlotte, NC
                </p>
              </div>
            </div>
          </div>

          {/* Quick Intro */}
          <div className="bg-[#1a1f2e] text-[#f7f5f0] rounded-lg p-8">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              What I'm Looking For
            </h2>
            <p className="text-[#f7f5f0]/80 mb-6 leading-relaxed">
              I'm seeking a role where I can combine creative leadership with systems thinking. 
              Whether it's building a brand, architecting content infrastructure, or exploring 
              AI-powered marketing — I want to add value and continue growing.
            </p>
            
            <div className="space-y-3">
              <p className="font-mono text-sm text-[#d4a373] uppercase tracking-wider">
                Ideal Roles
              </p>
              <ul className="space-y-2 text-[#f7f5f0]/90">
                <li>• Creative Director</li>
                <li>• Director of Creative Operations</li>
                <li>• Head of Digital Asset Management</li>
                <li>• Marketing Technology Lead</li>
                <li>• AI-Powered Marketing Innovation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 text-center">
          <p className="font-serif text-xl text-[#1a1f2e] italic">
            "I'm a salesman, a marketer, a technologist, a designer, an artist, 
            a teacher, a dad joke teller, and I love to be part of a team."
          </p>
          <p className="mt-4 text-[#1a1f2e]/60">
            — Let's build something together.
          </p>
        </div>
      </div>
    </div>
  );
}