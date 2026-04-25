import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { games, articles } from '../data';
import { Activity, Coins, Box, ChevronRight } from 'lucide-react';

export default function GameDetail() {
  const { slug } = useParams();
  const game = games.find(g => g.slug === slug);

  if (!game) {
    return <Navigate to="/" />;
  }

  const relatedArticles = articles.filter(a => a.relatedGameIds?.includes(game.id));

  return (
    <div className="max-w-5xl mx-auto space-y-8 col-span-1 md:col-span-12">
      {/* Game Header */}
      <div className="relative overflow-hidden neon-border-cyan bg-black/60 aspect-[21/9] sm:aspect-[21/6]">
        <div className="corner-pixel top-left" />
        <div className="corner-pixel top-right" />
        <div className="corner-pixel bottom-left" />
        <div className="corner-pixel bottom-right" />
        <div className="absolute inset-0">
          <img src={game.thumbnailUrl} alt={game.name} className="w-full h-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 flex items-end gap-6 w-full">
           <img src={game.thumbnailUrl} alt={game.name} className="hidden sm:block w-32 h-32 object-cover border border-neon-cyan shadow-neon-cyan p-1 bg-black/50" />
           <div className="flex-1">
             <div className="flex items-center gap-3 mb-2">
               <span className="font-mono text-neon-green text-xs border border-neon-green px-2 py-0.5 bg-neon-green/10">
                 {game.token}
               </span>
               <span className="font-mono text-gray-400 text-xs border border-cyan-900 px-2 py-0.5 bg-black/50">
                 STATUS: {game.status}
               </span>
             </div>
             <h1 className="font-orbitron font-black text-4xl sm:text-5xl text-white uppercase drop-shadow-[2px_2px_0_theme(colors.neon-cyan)]">
               {game.name}
             </h1>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* About */}
          <section className="bg-black/40 neon-border-cyan p-6 relative">
            <h2 className="font-orbitron text-xl text-white mb-4 uppercase flex items-center gap-2 border-b border-cyan-900/50 pb-2">
              <Box size={20} className="text-neon-cyan"/> CORE_PROTOCOL
            </h2>
            <p className="font-inter text-gray-300 leading-relaxed">
              {game.description}
            </p>
          </section>

          {/* Related News */}
          <section>
            <h2 className="font-orbitron text-xl text-white mb-6 uppercase flex items-center gap-2">
              <Activity size={20} className="text-neon-pink"/> NETWORK_ACTIVITY
            </h2>
            <div className="space-y-4">
              {relatedArticles.map(article => (
                <Link key={article.id} to={`/news/${article.slug}`} className="flex items-center gap-4 bg-black/40 border border-cyan-900/50 p-4 hover:bg-cyan-900/20 transition-colors group">
                  <div className="w-24 h-16 shrink-0 overflow-hidden border border-cyan-900/50">
                     <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-gray-200 group-hover:text-white truncate uppercase text-sm">{article.title}</h3>
                    <p className="font-mono text-[10px] text-gray-500 uppercase mt-1">{article.date} // {article.author}</p>
                  </div>
                  <ChevronRight className="text-cyan-900 group-hover:text-neon-cyan shrink-0" />
                </Link>
              ))}
              
              {relatedArticles.length === 0 && (
                <div className="font-mono text-sm text-gray-500 text-center py-8 border border-dashed border-gray-800">
                  NO_ACTIVITY_DETECTED
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-black/40 border border-cyan-900/50 neon-border-cyan p-6 text-center">
            <Coins size={32} className="mx-auto text-neon-green mb-4" />
            <h3 className="font-mono font-bold text-sm text-gray-400 uppercase mb-2">Primary Asset</h3>
            <div className="font-orbitron text-3xl text-neon-green mb-1 text-glow-cyan">{game.token}</div>
            <div className="font-mono text-xs text-gray-500 mb-6">Contract: 0x...a1b2</div>
            <button className="w-full border border-neon-green text-neon-green hover:bg-neon-green hover:text-void font-bold font-mono text-sm py-2 transition-all uppercase">
              TRADE {game.token}
            </button>
          </div>
          
          {game.slug === 'platinum-casino' && (
             <div className="bg-neon-pink text-void border border-neon-pink p-6 text-center shadow-neon-pink">
                <h3 className="font-orbitron font-bold text-xl mb-2 uppercase">Official Partner</h3>
                <p className="font-mono text-xs mb-4 font-bold">100% DEPOSIT BONUS ACTIVE</p>
                <button className="w-full border-2 border-void text-void hover:bg-void hover:text-neon-pink font-bold font-mono text-sm py-2 transition-all uppercase">
                  ACCESS PORTAL
                </button>
             </div>
          )}
        </aside>
      </div>

    </div>
  );
}
