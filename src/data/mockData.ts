export type Category = {
  name: string
  icon: string
  description: string
}

export type Listing = {
  id: number
  title: string
  image: string
  price: string
  category: string
  location: string
  rating: number
  reviews: number
  description: string
  badge: string
}

export type Provider = {
  id: number
  name: string
  role: string
  city: string
  rating: number
  reviews: number
  responseTime: string
  completedJobs: number
  price: string
  bio: string
  specialties: string[]
  image: string
}

export const categories: Category[] = [
  { name: 'Home Services', icon: 'home_repair_service', description: 'Repairs & maintenance' },
  { name: 'Design', icon: 'palette', description: 'Styling & layout' },
  { name: 'Wellness', icon: 'self_improvement', description: 'Self care & fitness' },
  { name: 'EV & Auto', icon: 'directions_car', description: 'Tune-ups & upgrades' },
  { name: 'Tech Help', icon: 'desktop_windows', description: 'Setup & troubleshooting' },
  { name: 'Events', icon: 'celebration', description: 'Planning & coordination' },
]

export const listings: Listing[] = [
  {
    id: 1,
    title: 'Interior painting & touch-ups',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    price: '₱2,400',
    category: 'Home Services',
    location: 'Quezon City',
    rating: 4.9,
    reviews: 128,
    description: 'Fast, clean, and detail-focused residential painting for walls and trim.',
    badge: 'Top rated',
  },
  {
    id: 2,
    title: 'Custom website setup for small businesses',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    price: '₱6,800',
    category: 'Tech Help',
    location: 'Makati',
    rating: 5.0,
    reviews: 87,
    description: 'Launch-ready landing pages and digital storefront assistance.',
    badge: 'New',
  },
  {
    id: 3,
    title: 'Private yoga coach for home sessions',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    price: '₱1,500/h',
    category: 'Wellness',
    location: 'Pasig',
    rating: 4.8,
    reviews: 64,
    description: 'Guided mobility, breath work, and flexibility sessions tailored to your home.',
    badge: 'Popular',
  },
  {
    id: 4,
    title: 'Mobile detailing and interior care',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
    price: '₱3,900',
    category: 'EV & Auto',
    location: 'Taguig',
    rating: 4.7,
    reviews: 90,
    description: 'Deep cleaning, paint protection, and interior refresh packages.',
    badge: 'Booked',
  },
  {
    id: 5,
    title: 'Room styling and home staging consultation',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    price: '₱4,250',
    category: 'Design',
    location: 'Alabang',
    rating: 4.9,
    reviews: 41,
    description: 'Transform a room with layout advice, product sourcing, and styling details.',
    badge: 'On trend',
  },
  {
    id: 6,
    title: 'Birthday crew coordination and party setup',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    price: '₱5,500',
    category: 'Events',
    location: 'BGC',
    rating: 4.8,
    reviews: 55,
    description: 'Event-day planning, vendor coordination, and setup support for stress-free hosting.',
    badge: 'Featured',
  },
]

export const providers: Provider[] = [
  {
    id: 1,
    name: 'Angela Flores',
    role: 'Interior stylist',
    city: 'Quezon City',
    rating: 4.9,
    reviews: 128,
    responseTime: 'Usually replies in 1 hour',
    completedJobs: 420,
    price: 'From ₱1,800',
    bio: 'Helps homeowners refresh small spaces with modern styling and practical organizing.',
    specialties: ['Room styling', 'DIY advice', 'Color planning'],
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Marcus Lin',
    role: 'Web designer',
    city: 'Makati',
    rating: 5.0,
    reviews: 81,
    responseTime: 'Usually replies in 30 mins',
    completedJobs: 280,
    price: 'From ₱4,500',
    bio: 'Builds clean, conversion-focused pages for local businesses and founders.',
    specialties: ['Landing page design', 'Brand refresh', 'UI cleanup'],
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Diana Santos',
    role: 'Wellness coach',
    city: 'Pasig',
    rating: 4.8,
    reviews: 64,
    responseTime: 'Usually replies in 2 hours',
    completedJobs: 190,
    price: 'From ₱1,200',
    bio: 'Supports stress reduction and movement routines designed around busy work schedules.',
    specialties: ['Yoga', 'Mobility', 'Recovery'],
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  },
]

export const dashboardStats = [
  { label: 'Active listings', value: '12', change: '+3 this week' },
  { label: 'New leads', value: '48', change: '+12% vs last week' },
  { label: 'Response rate', value: '94%', change: 'High engagement' },
  { label: 'Avg. booking', value: '₱3.2k', change: '+₱480 month-to-date' },
]

export const messages = [
  {
    name: 'Lina J.',
    preview: 'Can we do the painting this weekend?',
    time: '2m ago',
    unread: 2,
  },
  {
    name: 'Rico M.',
    preview: 'Thanks for the quote. I will send the details.',
    time: '1h ago',
    unread: 0,
  },
  {
    name: 'Ana P.',
    preview: 'The home staging mockups look great.',
    time: 'Yesterday',
    unread: 1,
  },
]
