import React from 'react';
import { Terminal, ShieldAlert, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 col-span-1 md:col-span-12">
      <div className="border-b border-cyan-900/50 pb-8 text-center">
        <h1 className="font-orbitron font-black text-4xl text-neon-cyan uppercase mb-4 tracking-wider text-glow-pink">
          SYSTEM OVERVIEW
        </h1>
        <p className="font-mono text-neon-pink text-xs uppercase tracking-[0.2em] shadow-neon-pink inline-block px-4 py-1 border border-neon-pink">
          EST. 2026 // NEON PROTOCOL
        </p>
      </div>

      <section className="prose prose-invert prose-p:font-inter prose-p:text-gray-400 prose-headings:font-orbitron prose-headings:uppercase mx-auto">
        <h2>Mission Directive</h2>
        <p>
          CRYPTO PLAY NEWS operates at the bleeding edge of Web3 gaming and decentralized winbox casinos. 
          Our protocol is simple: deliver unfiltered, high-fidelity signals on the play-to-earn ecosystem, 
          metaverse developments, and digital asset markets.
        </p>
        
        <div className="my-8 bg-black/40 neon-border-cyan p-6 relative">
          <div className="corner-pixel top-left" />
          <div className="corner-pixel top-right" />
          <div className="corner-pixel bottom-left" />
          <div className="corner-pixel bottom-right" />
          <p className="m-0 font-mono text-sm text-cyan-400">
            "In the dark void of the metaverse, information is the only true currency."
          </p>
        </div>

        <h2>Operational Sectors</h2>
        <ul>
          <li><strong>GAMES:</strong> Reviews, patch notes, and meta analysis for on-chain games.</li>
          <li><strong>WINBOX CASINO:</strong> The latest updates in provably fair algorithms, high-roller tables, and platform launches. <em>Note: Operations supported by Winbox Casino.</em></li>
          <li><strong>TOKENS:</strong> Technical breakdown of utility tokens and game economies.</li>
        </ul>

        <h2>Contact Nodes</h2>
        <p>
          Secure communications can be established via our encrypted channels. For advertising inquiries and partner protocols, initialize contact sequence below.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 font-mono text-sm">
          <a href="#" className="flex-1 border border-gray-700 bg-void p-4 text-center hover:border-neon-cyan hover:text-neon-cyan transition-colors flex flex-col items-center gap-2 group">
            <Terminal size={24} className="group-hover:text-glow-cyan" />
            <span>SUBMIT_TIP</span>
          </a>
          <a href="#" className="flex-1 border border-neon-pink bg-neon-pink/10 p-4 text-center text-neon-pink hover:bg-neon-pink hover:text-void transition-colors flex flex-col items-center gap-2 shadow-neon-pink group">
            <ShieldAlert size={24} />
            <span>ADVERTISE</span>
          </a>
          <a href="#" className="flex-1 border border-gray-700 bg-void p-4 text-center hover:border-neon-green hover:text-neon-green transition-colors flex flex-col items-center gap-2 group">
            <Cpu size={24} />
            <span>DEV_API</span>
          </a>
        </div>
      </section>
    </div>
  );
}
