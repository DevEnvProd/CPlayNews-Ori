import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data';
import { Terminal, Zap } from 'lucide-react';

const CategoryCard = ({ article }: { article: any; key?: React.Key }) => {
  return (
    <Link to={`/news/${article.slug}`} className={`flex flex-col sm:flex-row gap-6 bg-black/40 ${article.category === 'winbox-casino' ? 'neon-border-pink hover:bg-pink-900/10' : 'neon-border-cyan hover:bg-cyan-900/10'} transition-colors duration-300 p-4 group relative`}>
      <div className="corner-pixel top-left" />
      <div className="corner-pixel top-right" />
      <div className="corner-pixel bottom-left" />
      <div className="corner-pixel bottom-right" />
      <div className="w-full sm:w-1/3 aspect-video relative overflow-hidden flex-shrink-0 border border-cyan-900/50">
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
        />
        {article.isBreaking && (
           <div className="absolute top-2 left-2 z-20 bg-neon-cyan text-void font-mono text-[10px] font-bold px-2 py-1 flex items-center gap-1 uppercase shadow-neon-cyan">
             <Zap size={10} /> BREAKING
           </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-gray-500 font-mono text-[10px] mb-2 uppercase">
          {article.date} // {article.author} 
          {article.sponsored && <span className="text-neon-pink ml-2 font-bold">[SPONSORED]</span>}
        </div>
        <h3 className="font-orbitron text-xl text-gray-100 group-hover:text-neon-cyan transition-colors leading-tight mb-2 uppercase">
          {article.title}
        </h3>
        <p className="font-inter text-gray-400 text-sm mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-auto">
           <span className="text-gray-500 font-mono text-xs uppercase group-hover:text-white transition-all flex items-center gap-1">
             ACCESS_LOG <Terminal size={12} />
           </span>
        </div>
      </div>
    </Link>
  );
};

export default function Category() {
  const { cat } = useParams();
  
  const categoryArticles = articles.filter(a => a.category === cat);
  
  let accentColor = 'text-neon-cyan';
  let accentBorder = 'border-neon-cyan';
  let bgGlow = 'bg-neon-cyan/5';
  
  if (cat === 'winbox-casino') {
    accentColor = 'text-neon-pink';
    accentBorder = 'border-neon-pink';
    bgGlow = 'bg-neon-pink/5';
  } else if (cat === 'tokens') {
    accentColor = 'text-neon-green';
    accentBorder = 'border-neon-green';
    bgGlow = 'bg-neon-green/5';
  }

  return (
    <div className="max-w-4xl mx-auto col-span-1 md:col-span-12">
      <div className={`mb-12 border-l-4 ${accentBorder} pl-6 py-2 ${bgGlow}`}>
        <h1 className={`font-orbitron text-4xl uppercase ${accentColor}`}>
          DIR: {cat}
        </h1>
        <p className="font-mono text-gray-400 text-sm mt-2 uppercase">
          Querying {categoryArticles.length} records...
        </p>
      </div>

      <div className="space-y-6">
        {categoryArticles.map(article => (
          <CategoryCard key={article.id} article={article} />
        ))}
        
        {categoryArticles.length === 0 && (
          <div className="text-center font-mono text-gray-500 border border-gray-800 border-dashed p-12">
            NO_RECORDS_FOUND
          </div>
        )}
      </div>
    </div>
  );
}
