export type Category = {
  name: string
  icon: string
  description: string
}

export type Listing = {
  id: number
  providerId?: number
  title: string
  image: string
  price: string
  priceValue: number
  category: string
  subcategory: string
  location: string
  rating: number
  reviews: number
  description: string
  badge: string
  freeQuote: boolean
  credentials: string[]
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

export type ChatMessage = {
  id: number
  from: 'me' | 'them'
  text: string
  time: string
}

export type Conversation = {
  id: number
  name: string
  role: string
  image: string
  preview: string
  time: string
  unread: number
  category: 'Services' | 'Jobs' | 'Housing' | 'For Sale' | 'Gigs'
  contextTitle: string
  listingId?: number
  providerId?: number
  online: boolean
  thread: ChatMessage[]
}

export const categories: Category[] = [
  { name: 'Services', icon: 'home_repair_service', description: 'Repairs, care & professional help' },
  { name: 'For Sale', icon: 'storefront', description: 'Furniture, electronics & vehicles' },
  { name: 'Housing', icon: 'home_work', description: 'Apartments, rooms & offices' },
  { name: 'Jobs', icon: 'work', description: 'Full-time & contract positions' },
  { name: 'Community', icon: 'groups', description: 'Classes, events & volunteers' },
  { name: 'Gigs', icon: 'bolt', description: 'Short-term & project work' },
  { name: 'Resumes', icon: 'badge', description: 'Skills and work experience' },
]

export const categorySubcategories: Record<string, string[]> = {
  Services: ['Home Services', 'Electrical', 'Plumbing', 'Cleaning', 'Renovation', 'Automotive', 'Wellness', 'Tech Help', 'Design', 'Events'],
  'For Sale': ['Electronics', 'Furniture', 'Appliances', 'Vehicles', 'Clothing', 'Baby & Kids', 'Cargo Bikes'],
  Housing: ['Apartments', 'Rooms', 'Shared Housing', 'Vacation Rentals', 'Office & Commercial'],
  Jobs: ['Administrative', 'Technology', 'Healthcare', 'Sales', 'Education', 'Construction'],
  Community: ['Activities', 'Classes', 'Events', 'Volunteers', 'Lost & Found'],
  Gigs: ['Computer', 'Creative', 'Domestic', 'Labor', 'Event'],
  Resumes: ['Administrative', 'Technology', 'Creative', 'Skilled Trades', 'Healthcare'],
}

export const listings: Listing[] = [
  {
    id: 1,
    providerId: 1,
    title: 'Interior painting & touch-ups',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    price: '₱2,400',
    priceValue: 2400,
    category: 'Services',
    subcategory: 'Home Services',
    location: 'Quezon City',
    rating: 4.9,
    reviews: 128,
    description: 'Fast, clean, and detail-focused residential painting for walls and trim.',
    badge: 'Top rated',
    freeQuote: true,
    credentials: ['TESDA NC-II', 'Tax-compliant', 'Condo work permit ready'],
  },
  {
    id: 2,
    providerId: 2,
    title: 'Custom website setup for small businesses',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    price: '₱6,800',
    priceValue: 6800,
    category: 'Services',
    subcategory: 'Tech Help',
    location: 'Makati',
    rating: 5.0,
    reviews: 87,
    description: 'Launch-ready landing pages and digital storefront assistance.',
    badge: 'New',
    freeQuote: true,
    credentials: ['Tax-compliant', 'Background checked'],
  },
  {
    id: 3,
    providerId: 3,
    title: 'Private yoga coach for home sessions',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    price: '₱1,500/h',
    priceValue: 1500,
    category: 'Services',
    subcategory: 'Wellness',
    location: 'Pasig',
    rating: 4.8,
    reviews: 64,
    description: 'Guided mobility, breath work, and flexibility sessions tailored to your home.',
    badge: 'Popular',
    freeQuote: false,
    credentials: ['TESDA NC-II', 'Insurance'],
  },
  {
    id: 4,
    providerId: 1,
    title: 'Mobile detailing and interior care',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
    price: '₱3,900',
    priceValue: 3900,
    category: 'Services',
    subcategory: 'Automotive',
    location: 'Taguig',
    rating: 4.7,
    reviews: 90,
    description: 'Deep cleaning, paint protection, and interior refresh packages.',
    badge: 'Booked',
    freeQuote: true,
    credentials: ['TESDA NC-II', 'Tax-compliant'],
  },
  {
    id: 5,
    providerId: 1,
    title: 'Room styling and home staging consultation',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    price: '₱4,250',
    priceValue: 4250,
    category: 'Services',
    subcategory: 'Design',
    location: 'Alabang',
    rating: 4.9,
    reviews: 41,
    description: 'Transform a room with layout advice, product sourcing, and styling details.',
    badge: 'On trend',
    freeQuote: true,
    credentials: ['Tax-compliant', 'Insurance'],
  },
  {
    id: 6,
    providerId: 1,
    title: 'Birthday crew coordination and party setup',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    price: '₱5,500',
    priceValue: 5500,
    category: 'Services',
    subcategory: 'Events',
    location: 'BGC',
    rating: 4.8,
    reviews: 55,
    description: 'Event-day planning, vendor coordination, and setup support for stress-free hosting.',
    badge: 'Featured',
    freeQuote: true,
    credentials: ['Tax-compliant', 'Insurance'],
  },
  { id: 7, providerId: 2, title: 'Licensed residential electrical repair', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80', price: '₱1,800', priceValue: 1800, category: 'Services', subcategory: 'Electrical', location: 'Mandaluyong', rating: 4.9, reviews: 112, description: 'Circuit repair, outlet installation, breaker troubleshooting, and safety inspection.', badge: 'Verified', freeQuote: true, credentials: ['PRC licensed', 'TESDA NC-II', 'Tax-compliant', 'Condo work permit ready'] },
  { id: 8, providerId: 1, title: 'Pipe repair and plumbing installation', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80', price: '₱1,200', priceValue: 1200, category: 'Services', subcategory: 'Plumbing', location: 'Pasay', rating: 4.8, reviews: 96, description: 'Leak detection, faucet replacement, toilet repair, and pipe installation.', badge: 'Popular', freeQuote: true, credentials: ['PRC licensed', 'TESDA NC-II', 'Condo work permit ready'] },
  { id: 9, providerId: 1, title: 'Deep home cleaning crew', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80', price: '₱950', priceValue: 950, category: 'Services', subcategory: 'Cleaning', location: 'Marikina', rating: 4.7, reviews: 73, description: 'Kitchen, bathroom, floor, and post-renovation deep cleaning for homes and offices.', badge: 'Available', freeQuote: false, credentials: ['Background checked', 'Tax-compliant'] },
  { id: 10, providerId: 1, title: 'Bathroom renovation package', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=900&q=80', price: '₱38,000', priceValue: 38000, category: 'Services', subcategory: 'Renovation', location: 'Cavite', rating: 4.9, reviews: 38, description: 'Tiling, fixture replacement, waterproofing, and full bathroom finishing.', badge: 'Featured', freeQuote: true, credentials: ['PRC licensed', 'Tax-compliant', 'Insurance', 'Condo work permit ready'] },
  { id: 11, title: 'Used MacBook Air M2 13-inch', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80', price: '₱42,500', priceValue: 42500, category: 'For Sale', subcategory: 'Electronics', location: 'Manila', rating: 4.8, reviews: 22, description: 'Lightly used laptop with charger and original box. Meetup in Manila or Metro Manila delivery.', badge: 'Verified seller', freeQuote: false, credentials: ['Original receipt', 'Authenticity verified'] },
  { id: 12, title: 'Solid wood dining table set', image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80', price: '₱12,800', priceValue: 12800, category: 'For Sale', subcategory: 'Furniture', location: 'Pasig', rating: 4.6, reviews: 18, description: 'Six-seat solid wood dining set in excellent condition. Buyer may arrange pickup.', badge: 'Good condition', freeQuote: false, credentials: ['Seller verified'] },
  { id: 13, title: 'Front-load washing machine', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80', price: '₱18,500', priceValue: 18500, category: 'For Sale', subcategory: 'Appliances', location: 'Las Piñas', rating: 4.7, reviews: 31, description: 'Fully functional inverter washing machine with remaining service warranty.', badge: 'Warranty', freeQuote: false, credentials: ['Warranty included', 'Original receipt'] },
  { id: 14, title: 'Toyota Vios 2020 for sale', image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80', price: '₱455,000', priceValue: 455000, category: 'For Sale', subcategory: 'Vehicles', location: 'BGC', rating: 4.9, reviews: 12, description: 'Well-maintained automatic sedan with complete records and clean registration.', badge: 'Clean title', freeQuote: false, credentials: ['Authenticity verified', 'Original receipt'] },
  { id: 15, title: 'Studio apartment near Ortigas', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80', price: '₱22,000/mo', priceValue: 22000, category: 'Housing', subcategory: 'Apartments', location: 'Pasig', rating: 4.8, reviews: 44, description: 'Fully furnished studio with internet, air-conditioning, and 24-hour security.', badge: 'Available now', freeQuote: true, credentials: ['Verified landlord', 'Condo work permit ready', 'Ready for occupancy'] },
  { id: 16, title: 'Furnished room near UP Diliman', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80', price: '₱8,500/mo', priceValue: 8500, category: 'Housing', subcategory: 'Rooms', location: 'Quezon City', rating: 4.6, reviews: 35, description: 'Private furnished room with utilities and Wi-Fi included in the monthly rent.', badge: 'New listing', freeQuote: false, credentials: ['Verified landlord', 'Ready for occupancy'] },
  { id: 17, title: 'Executive assistant', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80', price: '₱35,000/mo', priceValue: 35000, category: 'Jobs', subcategory: 'Administrative', location: 'Makati', rating: 4.7, reviews: 19, description: 'Full-time executive support role for a growing retail operations team.', badge: 'Full-time', freeQuote: false, credentials: ['TESDA NC-II', 'Work permit ready'] },
  { id: 18, title: 'Junior web developer', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80', price: '₱45,000/mo', priceValue: 45000, category: 'Jobs', subcategory: 'Technology', location: 'Taguig', rating: 4.9, reviews: 27, description: 'Hybrid Vue and TypeScript role supporting internal business applications.', badge: 'Hybrid', freeQuote: false, credentials: ['Tax-compliant', 'Work permit ready'] },
  { id: 19, title: 'Weekend community yoga class', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80', price: '₱300', priceValue: 300, category: 'Community', subcategory: 'Classes', location: 'BGC', rating: 4.8, reviews: 51, description: 'Beginner-friendly outdoor yoga class open to all fitness levels.', badge: 'Community', freeQuote: false, credentials: ['Verified organizer'] },
  { id: 20, title: 'Same-day moving helper', image: 'https://images.unsplash.com/photo-1600518464441-9306b1c0bd5c?auto=format&fit=crop&w=900&q=80', price: '₱2,000', priceValue: 2000, category: 'Gigs', subcategory: 'Labor', location: 'Metro Manila', rating: 4.7, reviews: 66, description: 'Two-person moving team available for apartment moves and item transport.', badge: 'Same day', freeQuote: true, credentials: ['TESDA NC-II', 'Background checked'] },
  { id: 21, title: 'Product photographer for one-day shoot', image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=900&q=80', price: '₱8,000', priceValue: 8000, category: 'Gigs', subcategory: 'Creative', location: 'Makati', rating: 4.9, reviews: 33, description: 'Catalog, social media, and ecommerce product photography with basic editing.', badge: 'Portfolio', freeQuote: true, credentials: ['Tax-compliant', 'Work permit ready'] },
  { id: 23, title: 'Mid-century modern lounge chair', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80', price: '₱9,500', priceValue: 9500, category: 'For Sale', subcategory: 'Furniture', location: 'Quezon City', rating: 4.8, reviews: 14, description: 'Authentic-inspired mid-century lounge chair with restored teak legs and premium upholstery.', badge: 'Vintage', freeQuote: false, credentials: ['Seller verified'] },
  { id: 24, title: 'Electric cargo bike', image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=900&q=80', price: '₱68,000', priceValue: 68000, category: 'For Sale', subcategory: 'Cargo Bikes', location: 'Mandaluyong', rating: 4.9, reviews: 9, description: 'Electric cargo bike with long-range battery, cargo box, and rear child seat option.', badge: 'Test ride', freeQuote: false, credentials: ['Original receipt', 'Authenticity verified'] },
  { id: 25, title: '1-bedroom apartment near BGC', image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=900&q=80', price: '₱28,500/mo', priceValue: 28500, category: 'Housing', subcategory: 'Apartments', location: 'Taguig', rating: 4.8, reviews: 39, description: 'Fully furnished 1-bedroom unit with pool access, covered parking, and 24-hour security.', badge: 'Available now', freeQuote: true, credentials: ['Verified landlord', 'Condo work permit ready', 'Ready for occupancy'] },
  { id: 26, title: 'Experienced nursing aide resume', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80', price: 'Negotiable', priceValue: 0, category: 'Resumes', subcategory: 'Healthcare', location: 'Manila', rating: 4.8, reviews: 21, description: 'Certified nursing aide available for clinic, home care, and part-time shifts.', badge: 'Available', freeQuote: true, credentials: ['PRC licensed', 'TESDA NC-II', 'Background checked'] },
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

export const messages: Conversation[] = [
  {
    id: 1,
    name: 'Lina J.',
    role: 'Residential painter',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    preview: 'Can we do the painting this weekend?',
    time: '2m ago',
    unread: 2,
    category: 'Services',
    contextTitle: 'Interior painting & touch-ups',
    listingId: 1,
    online: true,
    thread: [
      { id: 1, from: 'them', text: 'Hi! I saw your painting listing. Can you tell me about your turnaround time?', time: '9:18 AM' },
      { id: 2, from: 'me', text: 'Absolutely. I can do a two-room refresh in about 3 days and keep the site spotless.', time: '9:20 AM' },
      { id: 3, from: 'them', text: 'Perfect. Could you send the full quote for my living room and kitchen?', time: '9:22 AM' },
    ],
  },
  {
    id: 2,
    name: 'Rico M.',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    preview: 'Thanks for the quote. I will send the details.',
    time: '1h ago',
    unread: 0,
    category: 'Services',
    contextTitle: 'Pipe repair and plumbing installation',
    listingId: 8,
    online: false,
    thread: [
      { id: 1, from: 'me', text: 'Hello, Rico. I reviewed the pipe leak details you shared.', time: '10:02 AM' },
      { id: 2, from: 'them', text: 'Thanks for the quote. I will send the bathroom photos and available schedule.', time: '10:14 AM' },
    ],
  },
  {
    id: 3,
    name: 'Ana P.',
    role: 'Design client',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    preview: 'The home staging mockups look great.',
    time: 'Yesterday',
    unread: 1,
    category: 'Services',
    contextTitle: 'Room styling and home staging',
    listingId: 5,
    online: true,
    thread: [
      { id: 1, from: 'them', text: 'The home staging mockups look great. Can we add warm lighting to the living room?', time: 'Yesterday, 4:32 PM' },
      { id: 2, from: 'me', text: 'Yes. I can include a warmer palette and two lighting options in the next revision.', time: 'Yesterday, 4:40 PM' },
    ],
  },
  {
    id: 4,
    name: 'PeopleOps Manila',
    role: 'Recruiter',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=300&q=80',
    preview: 'Can you join an interview on Friday?',
    time: '18m ago',
    unread: 3,
    category: 'Jobs',
    contextTitle: 'Junior web developer',
    listingId: 18,
    online: true,
    thread: [
      { id: 1, from: 'them', text: 'Thanks for applying for our Junior Web Developer position.', time: '11:20 AM' },
      { id: 2, from: 'me', text: 'Thank you. I am interested and available for a technical interview.', time: '11:26 AM' },
      { id: 3, from: 'them', text: 'Can you join an interview on Friday at 10:00 AM?', time: '11:31 AM' },
    ],
  },
  {
    id: 5,
    name: 'Mara Lim',
    role: 'Operations hiring manager',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80',
    preview: 'Please send your executive assistant portfolio.',
    time: 'Yesterday',
    unread: 0,
    category: 'Jobs',
    contextTitle: 'Executive assistant',
    listingId: 17,
    online: false,
    thread: [
      { id: 1, from: 'them', text: 'Please send your executive assistant portfolio and earliest start date.', time: 'Yesterday, 1:05 PM' },
      { id: 2, from: 'me', text: 'I have attached the requested experience summary. I can start in two weeks.', time: 'Yesterday, 1:18 PM' },
    ],
  },
]
