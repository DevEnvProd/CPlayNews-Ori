export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'games' | 'winbox-casino' | 'tokens' | 'metaverse' | 'esports';
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
    slug: 'winbox-casino',
    name: 'Winbox Casino',
    token: '$PLAT',
    status: 'Live',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=800',
    description: 'The premier provably fair crypto winbox casino with live dealers and exclusive slots.'
  }
];

export const articles: NewsArticle[] = [
  {
    id: 'wb_0',
    slug: 'winbox-news-0',
    title: 'Winbox Revolutionizes Online Casino Gaming',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-03',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_1',
    slug: 'winbox-news-1',
    title: 'Why Winbox is the Top Choice for Gamblers',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-04',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_2',
    slug: 'winbox-news-2',
    title: 'Winbox Casino: Next Level Slots and Jackpots',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-05',
    imageUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_3',
    slug: 'winbox-news-3',
    title: 'Experience High Roller Tables at Winbox',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-06',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_4',
    slug: 'winbox-news-4',
    title: 'Winbox Introduces Mobile-First Gaming Experience',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-07',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_5',
    slug: 'winbox-news-5',
    title: 'Unmatched Bonuses and Rewards at Winbox',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-08',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_6',
    slug: 'winbox-news-6',
    title: 'Winbox Ensures Fair Play and Transparency',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-09',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_7',
    slug: 'winbox-news-7',
    title: 'The Ultimate Live Dealer Experience on Winbox',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-10',
    imageUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_8',
    slug: 'winbox-news-8',
    title: 'Winbox: A New Era of Crypto Casino Action',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-11',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_9',
    slug: 'winbox-news-9',
    title: 'Winbox Online: Fast Payouts and High Returns',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-12',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_10',
    slug: 'winbox-news-10',
    title: 'Discover the Thrill of Sports Betting on Winbox',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-13',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_11',
    slug: 'winbox-news-11',
    title: 'Winbox Casino Tournaments: Compete and Win',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-14',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_12',
    slug: 'winbox-news-12',
    title: 'Winbox Customer Support: Setting Industry Standards',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-15',
    imageUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_13',
    slug: 'winbox-news-13',
    title: 'Exclusive VIP Perks at Winbox Casino',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-16',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_14',
    slug: 'winbox-news-14',
    title: 'Winbox Promotes Responsible Online Gaming',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-17',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_15',
    slug: 'winbox-news-15',
    title: 'Dive into the World of Baccarat with Winbox',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-18',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_16',
    slug: 'winbox-news-16',
    title: 'Winbox\'s State-of-the-Art Encryption Technology',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-19',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_17',
    slug: 'winbox-news-17',
    title: 'Winbox Partners with Top Game Developers',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-20',
    imageUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_18',
    slug: 'winbox-news-18',
    title: 'Maximize Your Earnings with Winbox Promotions',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-21',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_19',
    slug: 'winbox-news-19',
    title: 'Winbox Virtual Sports: Non-Stop Betting Action',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-22',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_20',
    slug: 'winbox-news-20',
    title: 'Winbox Casino: A Seamless User Interface',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-23',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_21',
    slug: 'winbox-news-21',
    title: 'Winbox Crypto Integration for Secure Deposits',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-24',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_22',
    slug: 'winbox-news-22',
    title: 'Winbox Live Roulette: Spin to Win Real Cash',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-25',
    imageUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_23',
    slug: 'winbox-news-23',
    title: 'Winbox Global Expansion: Reaching New Markets',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-26',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_24',
    slug: 'winbox-news-24',
    title: 'Winbox Loyalty Program: Earn While You Play',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-27',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_25',
    slug: 'winbox-news-25',
    title: 'Winbox Casino: Best Table Games of the Year',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-28',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
  {
    id: 'wb_26',
    slug: 'winbox-news-26',
    title: 'Winbox Sets New Records in Casino Payouts',
    excerpt: 'Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.',
    content: 'Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don\'t miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '2026-06-29',
    imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200',
    sponsored: true,
    relatedGameIds: ['g3']
  },
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
    slug: 'winbox-casino-launches-new-live-dealer-studio',
    title: 'Winbox Casino Launches New Live Dealer Studio in the Metaverse',
    excerpt: 'Experience Vegas-style action from your VR headset with Winbox Casino\'s latest expansion.',
    content: 'Winbox Casino continues to dominate the crypto gambling space. Today, they announced a massive expansion into the Metaverse, bringing their signature high-stakes tables to VR. <br/><br/> The new Live Dealer studio features cutting-edge volumetric capture, allowing players to read the dealer\'s micro-expressions. This is a game-changer for high rollers who prefer the comfort of their own digital penthouses.',
    category: 'winbox-casino',
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
    slug: 'exclusive-slots-release-winbox-casino',
    title: 'Exclusive Cyberpunk Slots Release at Winbox Casino',
    excerpt: 'Spin the reels in the gritty underbelly of Neo-Tokyo with Winbox Casino\'s new original game.',
    content: 'Looking for a new thrill? Winbox Casino just dropped "Neon Nights," a provably fair slot game with an insane 98% RTP. The visuals are top tier, featuring glitching wilds and free spin multipliers that scale with your bet size.',
    category: 'winbox-casino',
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
