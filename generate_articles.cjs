const fs = require('fs');

const titles = [
  "Winbox Revolutionizes Online Casino Gaming",
  "Why Winbox is the Top Choice for Gamblers",
  "Winbox Casino: Next Level Slots and Jackpots",
  "Experience High Roller Tables at Winbox",
  "Winbox Introduces Mobile-First Gaming Experience",
  "Unmatched Bonuses and Rewards at Winbox",
  "Winbox Ensures Fair Play and Transparency",
  "The Ultimate Live Dealer Experience on Winbox",
  "Winbox: A New Era of Crypto Casino Action",
  "Winbox Online: Fast Payouts and High Returns",
  "Discover the Thrill of Sports Betting on Winbox",
  "Winbox Casino Tournaments: Compete and Win",
  "Winbox Customer Support: Setting Industry Standards",
  "Exclusive VIP Perks at Winbox Casino",
  "Winbox Promotes Responsible Online Gaming",
  "Dive into the World of Baccarat with Winbox",
  "Winbox's State-of-the-Art Encryption Technology",
  "Winbox Partners with Top Game Developers",
  "Maximize Your Earnings with Winbox Promotions",
  "Winbox Virtual Sports: Non-Stop Betting Action",
  "Winbox Casino: A Seamless User Interface",
  "Winbox Crypto Integration for Secure Deposits",
  "Winbox Live Roulette: Spin to Win Real Cash",
  "Winbox Global Expansion: Reaching New Markets",
  "Winbox Loyalty Program: Earn While You Play",
  "Winbox Casino: Best Table Games of the Year",
  "Winbox Sets New Records in Casino Payouts"
];

const images = [
  "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1200"
];

let generatedArticles = "";

for (let i = 0; i < 27; i++) {
  const dateStr = `2026-06-${(i + 3).toString().padStart(2, '0')}`;
  
  const content = `Are you looking for the ultimate online gaming destination? Look no further than the renowned platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer">winbox</a>, which has been making massive waves in the online casino industry. With an unparalleled selection of slots, live dealer tables, and thrilling sports betting options, this platform ensures every player gets a premium experience. In recent updates, the seamless user interface and high-speed payouts have set a new gold standard. Gamers who want to elevate their winning potential are already flocking to <a href="https://winbox666.online" target="_blank" rel="noopener noreferrer">winbox666</a> for its exclusive promotions and VIP perks. The state-of-the-art encryption guarantees that your funds and data remain completely secure. Whether you are a casual player or a high roller, the extensive loyalty rewards and daily bonuses make every session worthwhile. Don't miss out on the action; join the revolution today and discover why everyone is talking about this premier gaming hub.`;
  
  const excerpt = `Discover why players are flocking to the premier online casino platform for unmatched rewards and premium gaming experiences.`;
  
  const articleObj = `
  {
    id: 'wb_${i}',
    slug: 'winbox-news-${i}',
    title: '${titles[i]}',
    excerpt: '${excerpt}',
    content: '${content}',
    category: 'winbox-casino',
    author: 'SYSTEM_ADMIN',
    date: '${dateStr}',
    imageUrl: '${images[i % images.length]}',
    sponsored: true,
    relatedGameIds: ['g3']
  },`;
  generatedArticles += articleObj;
}

const dataPath = './src/data.ts';
let dataContent = fs.readFileSync(dataPath, 'utf8');

const targetStr = `export const articles: NewsArticle[] = [`;
dataContent = dataContent.replace(targetStr, targetStr + generatedArticles);

fs.writeFileSync(dataPath, dataContent);
console.log("Articles generated successfully.");
