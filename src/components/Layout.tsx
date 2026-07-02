import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { mockPrices } from '../data';
import { Ticket, Gamepad2, Coins, Globe, Trophy, ExternalLink } from 'lucide-react';

const Ticker = () => {
  return (
    <div className="w-full h-10 overflow-hidden border-y border-pink-900/50 flex items-center bg-black/40 relative font-mono text-sm">
      <motion.div 
        className="flex gap-8 px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...mockPrices, ...mockPrices].map((coin, idx) => (
          <div key={idx} className="flex font-bold items-center gap-2">
            <span className={idx % 2 === 0 ? "text-neon-cyan" : "text-neon-pink"}>{coin.symbol}</span>
            <span className={idx % 2 === 0 ? "text-neon-cyan" : "text-neon-pink"}>{coin.price}</span>
            <span className={coin.up ? "neon-text-green" : "text-neon-pink"}>{coin.change}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="border-b border-cyan-900/50 pt-4 pb-4 bg-void/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col glitch-hover" data-text="CRYPTO PLAY NEWS">
            <h1 className="font-orbitron font-black text-4xl leading-none text-neon-cyan text-glow-pink">
              CRYPTO PLAY NEWS
            </h1>
            <p className="font-orbitron font-bold text-neon-pink tracking-[0.3em] text-[10px] mt-1">
              YOUR DAILY DOSE OF BLOCKCHAIN GAMING
            </p>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 text-[11px] font-mono uppercase text-cyan-400 bg-cyan-950/30 px-4 py-2 border border-cyan-800">
             <span className="flex items-center gap-2 text-white/80 pr-2 border-r border-cyan-800/50">
               <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
               SYSTEM LIVE
             </span>
             <Link to="/category/games" className="font-mono text-sm text-gray-300 hover:text-neon-cyan hover:text-glow-cyan transition-all flex items-center gap-2">
                <Gamepad2 size={16} /> GAMES
             </Link>
             <Link to="/category/winbox-casino" className="font-mono text-sm text-neon-pink hover:text-white drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] transition-all flex items-center gap-2">
                <Ticket size={16} /> WINBOX CASINO
             </Link>
             <Link to="/category/tokens" className="font-mono text-sm text-gray-300 hover:text-neon-cyan hover:text-glow-cyan transition-all flex items-center gap-2">
                <Coins size={16} /> TOKENS
             </Link>
             <Link to="/about" className="font-mono text-sm text-gray-300 hover:text-neon-cyan hover:text-glow-cyan transition-all flex items-center gap-2">
                <Globe size={16} /> ABOUT
             </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-neon-cyan/30 bg-void mt-24 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-screen"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="inline-flex flex-col mb-4">
              <span className="font-orbitron font-black text-xl tracking-tighter text-neon-cyan opacity-80">
                CRYPTO PLAY
              </span>
              <span className="font-orbitron font-bold text-neon-pink tracking-[0.3em] text-[10px]">
                NEWS
              </span>
            </Link>
            <p className="text-gray-500 font-mono text-xs max-w-sm">
              Your daily dose of blockchain gaming. Breaking news, game reviews, token analysis, and industry trends.
            </p>
          </div>
          <div>
            <h3 className="font-orbitron text-white mb-4">CATEGORIES</h3>
            <ul className="space-y-2 font-mono text-xs text-gray-400">
              <li><Link to="/category/games" className="hover:text-neon-cyan">Game News</Link></li>
              <li><Link to="/category/winbox-casino" className="hover:text-neon-pink">Winbox Casino</Link></li>
              <li><Link to="/category/tokens" className="hover:text-neon-green">Token Analysis</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-orbitron text-white mb-4">PARTNERS</h3>
             <ul className="space-y-2 font-mono text-xs text-gray-400">
              <li><Link to="/category/winbox-casino" className="hover:text-neon-pink">Winbox Casino</Link></li>
              <li><Link to="/about" className="hover:text-neon-cyan">Advertise With Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-gray-600">
          <p>© 2026 CRYPTO PLAY NEWS. All rights reserved.</p>
          <p>Not financial advice. Do your own research.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-void text-white font-inter">
      <div className="cyber-grid"></div>
      <div className="scanlines"></div>
      <Header />
      <Ticker />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
