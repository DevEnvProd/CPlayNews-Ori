import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { articles, games, mockPrices } from '../data';
import { ExternalLink, Terminal, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return <Navigate to="/" />;
  }

  const relatedGames = article.relatedGameIds 
    ? games.filter(g => article.relatedGameIds!.includes(g.id))
    : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <article className="lg:col-span-3">
        <div className="mb-6 font-mono text-xs uppercase flex items-center gap-2">
           <span className="bg-gray-800 text-neon-cyan px-2 py-1">SYS_AUTH: {article.author}</span>
           <span className="text-gray-500">{article.date}</span>
           <span className={`px-2 py-1 ml-auto font-bold ${article.category === 'winbox-casino' ? 'bg-neon-pink text-void' : 'border border-gray-700 text-gray-400'}`}>
             DIR: {article.category}
           </span>
        </div>
        
        <h1 className="font-orbitron text-3xl md:text-5xl text-white uppercase leading-none mb-6 relative drop-shadow-[2px_2px_0_theme(colors.neon-pink)]">
          {article.title}
        </h1>

        <div className="border-t border-b border-gray-800 py-4 mb-8">
          <p className="font-inter text-gray-300 text-lg leading-relaxed font-medium">
            {article.excerpt}
          </p>
        </div>

        <figure className="mb-10 relative overflow-hidden neon-border-cyan group p-1">
           <div className="corner-pixel top-left" />
           <div className="corner-pixel top-right" />
           <div className="corner-pixel bottom-left" />
           <div className="corner-pixel bottom-right" />
           <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-[2s]" />
           {article.sponsored && (
             <figcaption className="absolute bottom-4 right-4 bg-void/80 backdrop-blur border border-neon-pink px-3 py-1 font-mono text-[10px] text-neon-pink flex items-center gap-2">
               <ShieldAlert size={12} /> PROMOTIONAL DATABLOCK
             </figcaption>
           )}
        </figure>

        <div 
          className="prose prose-invert prose-p:font-inter prose-p:text-gray-400 prose-p:leading-relaxed prose-headings:font-orbitron prose-headings:uppercase prose-a:text-neon-cyan prose-strong:text-white max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {article.category === 'winbox-casino' && (
          <div className="bg-gradient-to-r from-neon-pink/20 to-transparent p-[1px] mb-10">
            <div className="bg-void p-8 text-center flex flex-col items-center border border-neon-pink/30">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-2 uppercase">Ready to enter the grid?</h3>
              <p className="font-inter text-gray-400 mb-6 max-w-md">Join Winbox Casino today and claim your 100% deposit bonus on all major crypto assets.</p>
              <Link to="/category/winbox-casino" className="bg-neon-pink text-void font-bold font-mono text-sm px-8 py-3 uppercase hover:shadow-neon-pink transition-shadow flex items-center gap-2">
                PLAY WINBOX CASINO →
              </Link>
            </div>
          </div>
        )}

      </article>

      {/* Sidebar */}
      <aside className="space-y-8">
        {/* Token Watchlist Mock */}
        <div className="bg-black/40 neon-border-cyan p-5 flex flex-col">
          <h4 className="font-orbitron font-bold text-cyan-400 text-sm mb-4 uppercase border-b border-cyan-900/50 pb-2 flex items-center gap-2">
            <Terminal size={14} /> MARKET_PULSE
          </h4>
          <div className="space-y-3 font-mono text-xs">
            {mockPrices.slice(0, 5).map(token => (
              <div key={token.symbol} className="flex justify-between items-center border-b border-gray-800/50 pb-2">
                <span className="text-white">${token.symbol}</span>
                <div className="flex gap-4">
                  <span className="text-gray-400">{token.price}</span>
                  <span className={token.up ? 'text-neon-green' : 'text-red-500'}>{token.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <div className="bg-black/40 neon-border-cyan p-5">
            <h4 className="font-orbitron text-cyan-400 text-sm mb-4 uppercase border-b border-cyan-900/50 pb-2">Linked Assets</h4>
            <div className="space-y-4">
              {relatedGames.map(game => (
                <div key={game.id} className="flex flex-col gap-2 bg-black/60 border border-cyan-900/30 p-2">
                  <img src={game.thumbnailUrl} alt={game.name} className="w-full h-24 object-cover grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h5 className="font-orbitron text-sm text-white uppercase">{game.name}</h5>
                    <span className="font-mono text-[10px] text-neon-green">{game.token}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
