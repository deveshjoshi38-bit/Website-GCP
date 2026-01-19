import { ServiceItem, WorkItem, Client, NavItem } from './types';
import { Film, Mic, Video, Layers, Users, Globe, Tv, MonitorPlay, Briefcase, Camera, Music, PenTool } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export const CONTACT_INFO = {
  phone: '+91 98999829363',
  email: 'girlchildproductions@gmail.com',
  location: 'New Delhi, India',
  socials: {
    instagram: 'https://instagram.com/girlchildproductions.29',
    instagramPersonal: 'https://instagram.com/sanya.sachdeva29',
    facebook: 'https://facebook.com/Charnamrit%20Sachdv',
    twitter: 'https://x.com/Charnamrit_S',
    youtube: 'https://youtube.com/@charnamritsachdv9699',
    linkedin: 'https://www.linkedin.com/in/charnamrit-sachdev'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    category: 'Filmmaking & Production',
    items: ['Documentary Filmmaking', 'Digital Films', 'TVCs (Television Commercials)', 'Web Series', 'Short Films', 'Line Production'],
    icon: <Film className="w-6 h-6" />,
  },
  {
    category: 'Animation & Graphics',
    items: ['2D Animated Videos', '3D Animated Videos', 'Explanatory Videos', 'Motion Graphics', 'Visual Effects'],
    icon: <Layers className="w-6 h-6" />,
  },
  {
    category: 'Digital & Content',
    items: ['Content Curation', 'Website Content', 'Newsletters', 'Feature Content', 'Digital Marketing Content', 'Social Media Campaigns'],
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    category: 'Commercial & Brand',
    items: ['Product Shoots', 'Brand Films', 'Corporate Films', 'Launch Films'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    category: 'Audio & Media',
    items: ['Podcasts', 'Sound Design', 'Voiceovers'],
    icon: <Mic className="w-6 h-6" />,
  },
  {
    category: 'Management & Strategy',
    items: ['Artist Management', 'Line Production', 'Digital Marketing Strategy', 'Public Relations'],
    icon: <Users className="w-6 h-6" />,
  },
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: '1',
    title: 'Voices of The Valley',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1543487945-139a97f387d5?q=80&w=1600&auto=format&fit=crop', // Portrait/People vibe
    year: '2023',
    client: 'Discovery',
  },
  {
    id: '2',
    title: 'Urban Rhythm',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop', // Motorcycle/Urban vibe
    year: '2023',
    client: 'Hero Cycles',
  },
  {
    id: '3',
    title: 'The Future of Health',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop', // Medical/Tech vibe
    year: '2022',
    client: 'Niva Bupa',
  },
  {
    id: '4',
    title: 'Echoes of Heritage',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1600&auto=format&fit=crop', // Stage/Lights vibe
    year: '2023',
    client: 'Rekhta',
  },
  {
    id: '5',
    title: 'Ajab Shaan',
    category: 'Music Video',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1600&auto=format&fit=crop', // Performance/Music vibe
    year: '2022',
    client: 'Salim-Sulaiman',
  },
  {
    id: '6',
    title: 'Beyond Borders',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop', // Landscape/Travel vibe
    year: '2021',
    client: 'BBC',
  },
  {
    id: '7',
    title: 'Tech Revolution',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop', // Tech/Office
    year: '2023',
    client: 'NIIT',
  },
  {
    id: '8',
    title: 'Summer Campaign',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop', // Fashion/Shoot
    year: '2022',
    client: 'Fabiosa',
  },
];

export const CLIENT_LOGOS = [
  'Discovery', 'BBC', 'ITV', 'TLC', 'Channel 5', 'NDTV', 'NIIT', 
  'Hero Cycles', 'Niva Bupa', 'Sarvodaya Hospital', 'Salim–Sulaiman', 
  'JK Paper', 'Daily Mail', 'Telegraph', 'Marie Claire', 'Rekhta',
  'Screentripping Films', 'Glida', 'PBF', 'Captain Sales', 'Merchant Records',
  'The Big Forkers', 'Fabiosa', 'Fortum', 'Embee Software', 'Cover Asia Press',
  'Arte', 'Metro', 'Mirror', 'Grazia', 'NBC', 'Glue Creatives', 'Harfun',
  'Solugo', 'Suburb Magazine', 'Tycoon Global'
];

export const WHY_US_POINTS = [
  { title: 'One Stop Solution', desc: 'From concept to final cut, we handle everything so you don’t have to.', link: '/services' },
  { title: 'Budget Agnostic Excellence', desc: 'Premium quality regardless of the budget. We make it work.', link: '/contact' },
  { title: 'Journalistic Integrity', desc: 'Stories rooted in truth, depth, and rigorous research.', link: '/about' },
  { title: 'Global Standards', desc: 'Content created in India, crafted for the world.', link: '/work' },
  { title: 'Creative Agility', desc: 'From rapid social content to feature-length documentaries.', link: '/services' },
  { title: 'End-to-End Production', desc: 'Pre-production, shooting, post-production, and distribution strategy.', link: '/services' },
];