export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'games' | 'casino' | 'tokens' | 'metaverse' | 'esports';
  author: string;
  date: string;
  imageUrl: string;
  isBreaking?: boolean;
  relatedGameIds?: string[];
  sponsored?: boolean;
}

export interface Game {
  id: string;
  slug: string;
  name: string;
  token: string;
  status: 'Live' | 'Beta' | 'Alpha' | 'Development';
  thumbnailUrl: string;
  description: string;
}

export const games: Game[] = [
  {
    id: 'g1',
    slug: 'cyber-heist-2077',
    name: 'Cyber Heist 2077',
    token: '$HEIST',
    status: 'Live',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    description: 'A cyberpunk-themed play-to-earn extraction shooter.'
  },
  {
    id: 'g2',
    slug: 'neon-drifters',
    name: 'Neon Drifters',
    token: '$DRIFT',
    status: 'Beta',
    thumbnailUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    description: 'High-speed hover-racing with provable ownership of vehicle parts.'
  },
  {
    id: 'g3',
    slug: 'platinum-casino',
    name: 'Platinum Casino',
    token: '$PLAT',
    status: 'Live',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=800',
    description: 'The premier provably fair crypto casino with live dealers and exclusive slots.'
  }
];

export const articles: NewsArticle[] = [
  {
    id: 'a1',
    slug: 'cyber-heist-season-2-drops-massive-token-burn',
    title: 'Cyber Heist Season 2 Drops Massive Token Burn, Economy Reset',
    excerpt: 'The highly anticipated Season 2 of Cyber Heist brings a 5% token mechanics overhaul, completely flipping the meta.',
    content: 'Long awaited by the community, Season 2 of Cyber Heist is finally here. The developers have decided to implement a massive token burn mechanism for the $HEIST ecosystem. Every extraction now burns 1% of the total loot value... <br/><br/> Players are already strategizing new loadouts. Will this be enough to revive the struggling player base?',
    category: 'games',
    author: 'ZERO_COOL',
    date: '2026-04-25',
    imageUrl: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=1200',
    isBreaking: true,
    relatedGameIds: ['g1']
  },
  {
    id: 'a2',
    slug: 'platinum-casino-launches-new-live-dealer-studio',
    title: 'Platinum Casino Launches New Live Dealer Studio in the Metaverse',
    excerpt: 'Experience Vegas-style action from your VR headset with Platinum Casino\'s latest expansion.',
    content: 'Platinum Casino continues to dominate the crypto gambling space. Today, they announced a massive expansion into the Metaverse, bringing their signature high-stakes tables to VR. <br/><br/> The new Live Dealer studio features cutting-edge volumetric capture, allowing players to read the dealer\'s micro-expressions. This is a game-changer for high rollers who prefer the comfort of their own digital penthouses.',
    category: 'casino',
    author: 'DEALER_DAN',
    date: '2026-04-24',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'a3',
    slug: 'neon-drifters-announces-esports-tournament',
    title: 'Neon Drifters Announces $1M Esports Tournament',
    excerpt: 'Gear up for the biggest Web3 racing event of the year, sponsored by major crypto exchanges.',
    content: 'Neon Drifters is pulling out all the stops for their transition out of Beta. A massive $1M tournament has just been announced... <br/><br/> Qualifiers begin next week. Make sure your hover-engines are fully upgraded.',
    category: 'esports',
    author: 'SPEED_DEMON',
    date: '2026-04-23',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200',
    relatedGameIds: ['g2']
  },
  {
    id: 'a4',
    slug: 'exclusive-slots-release-platinum-casino',
    title: 'Exclusive Cyberpunk Slots Release at Platinum Casino',
    excerpt: 'Spin the reels in the gritty underbelly of Neo-Tokyo with Platinum Casino\'s new original game.',
    content: 'Looking for a new thrill? Platinum Casino just dropped "Neon Nights," a provably fair slot game with an insane 98% RTP. The visuals are top tier, featuring glitching wilds and free spin multipliers that scale with your bet size.',
    category: 'casino',
    author: 'SLOT_JUNKIE',
    date: '2026-04-22',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'a5',
    slug: 'top-5-tokens-bull-run',
    title: 'Top 5 Gaming Tokens to Watch in This Bull Run',
    excerpt: 'Our analysts break down the charts for the hottest GameFi narratives right now.',
    content: 'The market is heating up, and gaming tokens are leading the charge. Here are the top 5 tokens you should be keeping an eye on... <br/><br/> 1. $HEIST - With Season 2 out, deflationary pressure is mounting. <br/> 2. ...',
    category: 'tokens',
    author: 'CHART_MASTER',
    date: '2026-04-21',
    imageUrl: 'https://images.unsplash.com/photo-1641315865261-2ec1dc07a4ac?auto=format&fit=crop&q=80&w=1200'
  }
];

export const mockPrices = [
  { symbol: 'BTC', price: '$84,230.50', change: '+2.4%', up: true },
  { symbol: 'ETH', price: '$4,102.10', change: '+1.8%', up: true },
  { symbol: 'HEIST', price: '$1.42', change: '+14.2%', up: true },
  { symbol: 'DRIFT', price: '$0.84', change: '-3.1%', up: false },
  { symbol: 'PLAT', price: '$12.40', change: '+8.9%', up: true },
  { symbol: 'AXS', price: '$18.20', change: '+1.1%', up: true },
  { symbol: 'IMX', price: '$2.80', change: '-1.4%', up: false }
];
