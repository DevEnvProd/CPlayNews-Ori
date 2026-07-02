import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { articles, games } from '../data';
import { ExternalLink, Zap, Flame, Terminal } from 'lucide-react';

const ArticleCard = ({ article, featured = false }: { article: any, featured?: boolean, key?: React.Key }) => {
  return (
    <Link to={`/news/${article.slug}`} className={`block group ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`bg-black/60 transition-colors duration-300 h-full flex flex-col relative overflow-hidden ${article.category === 'winbox-casino' ? 'neon-border-pink' : 'neon-border-cyan'}`}>
        <div className="corner-pixel top-left" />
        <div className="corner-pixel top-right" />
        <div className="corner-pixel bottom-left" />
        <div className="corner-pixel bottom-right" />
        
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 scale-100 group-hover:scale-105"
          />
          {article.category === 'winbox-casino' && (
             <div className="absolute top-2 right-2 z-20 bg-neon-pink text-void font-mono text-[10px] font-bold px-2 py-1 uppercase drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">
               WINBOX CASINO
             </div>
          )}
          {article.isBreaking && (
             <div className="absolute bottom-2 left-2 z-20 bg-neon-cyan text-void font-mono text-[10px] font-bold px-2 py-1 flex items-center gap-1 uppercase">
               <Zap size={10} /> BREAKING
             </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="text-gray-500 font-mono text-[10px] mb-2 flex justify-between items-center uppercase">
            <span>{article.date} // {article.author}</span>
          </div>
          <h3 className={`font-orbitron text-gray-100 group-hover:text-neon-cyan transition-colors mb-2 ${featured ? 'text-5xl leading-tight' : 'text-xl'}`}>
            {article.title}
          </h3>
          {featured && (
            <p className="font-inter text-gray-400 text-sm mb-4 line-clamp-3">
              {article.excerpt}
            </p>
          )}
          <div className="mt-auto pt-4 border-t border-gray-800/50">
             <span className="text-neon-cyan font-mono text-xs uppercase group-hover:text-glow-cyan transition-all flex items-center gap-1">
               READ_NODE <Terminal size={12} />
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  const breakingNews = articles.find(a => a.isBreaking) || articles[0];
  const otherNews = articles.filter(a => a.id !== breakingNews.id);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ArticleCard article={breakingNews} featured={true} />
        
        {/* Sidebar / Trending / Ad */}
        <div className="flex flex-col gap-6">
          {/* Platinum Casino Ad block */}
          <div className="bg-pink-950/10 neon-border-pink p-5 relative flex flex-col group h-1/2">
             <div className="flex items-center gap-2 text-neon-pink font-mono text-xs mb-3 font-bold uppercase drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] border-b border-pink-900/50 pb-2">
               <Flame size={14} /> WINBOX CASINO SPECIAL
             </div>
             <div className="flex-1 space-y-4">
               <div className="p-3 bg-black/40 border border-pink-900/30">
                 <h4 className="font-orbitron text-xl mb-1 leading-tight uppercase text-white">Winbox Casino 100% Welcome Bonus</h4>
                 <p className="font-inter text-pink-400 text-xs mb-4">Access the highest stakes in the metaverse. Provably fair, unmatched RTP.</p>
                 <Link to="/category/winbox-casino" className="inline-flex items-center text-neon-pink font-bold font-mono text-xs uppercase hover:text-white transition-colors">
                   INITIALIZE →
                 </Link>
               </div>
             </div>
          </div>

          <div className="bg-cyan-950/10 neon-border-cyan p-5 relative flex-1 flex flex-col">
             <h4 className="font-orbitron text-cyan-400 text-sm mb-4 uppercase border-b border-cyan-900/50 pb-2">TRENDING PROJECTS</h4>
             <div className="space-y-4">
               {otherNews.slice(0,3).map((article, idx) => (
                 <Link key={article.id} to={`/news/${article.slug}`} className="block group">
                   <div className="flex justify-between items-center">
                     <span className="font-mono text-xs text-white line-clamp-1 mr-2 group-hover:text-neon-cyan transition-colors">{idx + 1}. {article.title}</span>
                     <span className={`text-[10px] ${idx === 0 ? 'text-neon-green' : 'text-gray-500'}`}>
                       {idx === 0 ? 'HOT' : 'STEADY'}
                     </span>
                   </div>
                 </Link>
               ))}
             </div>
             <div className="mt-auto pt-4 border-t border-cyan-900/30">
               <div className="bg-cyan-900/20 p-2 text-center text-[10px] font-mono tracking-tighter text-cyan-400">
                 TERMINAL ACCESS GRANTED
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-orbitron text-2xl text-white uppercase tracking-wider">Latest <span className="text-neon-cyan">Intel</span></h2>
          <div className="h-px bg-gradient-to-r from-neon-cyan/50 to-transparent flex-1" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherNews.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
      
      {/* Featured Games Mini-DB */}
      <section className="bg-black/60 neon-border-cyan p-6 relative mt-12">
         <div className="corner-pixel top-left" />
         <div className="corner-pixel top-right" />
         <div className="corner-pixel bottom-left" />
         <div className="corner-pixel bottom-right" />
         <h2 className="font-orbitron text-xl mb-6 text-gray-300 uppercase">Monitored <span className="text-white">Assets</span></h2>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
           {games.map(game => (
             <div key={game.id} className="flex gap-4 items-center p-3 border border-cyan-900/30 bg-black/40 hover:bg-cyan-900/20 transition-colors">
               <img src={game.thumbnailUrl} alt={game.name} className="w-16 h-16 object-cover border border-gray-700 grayscale" />
               <div>
                 <Link to={`/game/${game.slug}`} className="font-orbitron text-sm hover:text-neon-cyan block mb-1 text-white">{game.name}</Link>
                 <div className="flex items-center gap-2 font-mono text-[10px]">
                   <span className="text-neon-green">{game.token}</span>
                   <span className="text-gray-500 border border-gray-700 px-1">{game.status}</span>
                 </div>
               </div>
             </div>
           ))}
         </div>
      </section>
    </div>
  );
}
