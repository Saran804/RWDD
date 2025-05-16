import { RecyclingProgram, EnergyTip, GardeningProject, ProductListing } from '../types';

export const recyclingPrograms: RecyclingProgram[] = [
  {
    id: '1',
    title: 'Weekly Curbside Collection',
    description: 'Place recyclables in your blue bin for weekly collection. Accepts paper, cardboard, plastic containers, glass, and metal cans.',
    schedule: 'Every Wednesday',
    location: 'City-wide service',
    imageUrl: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg'
  },
  {
    id: '2',
    title: 'Electronic Waste Drop-off',
    description: 'Safely dispose of computers, TVs, phones, and other electronic devices at designated collection points.',
    schedule: 'First Saturday of each month',
    location: 'Community Recycling Center, 123 Green St',
    imageUrl: 'https://images.pexels.com/photos/159751/book-read-literature-pages-159751.jpeg'
  },
  {
    id: '3',
    title: 'Hazardous Waste Collection',
    description: 'Special collection for paint, batteries, chemicals, and other hazardous household materials.',
    schedule: 'Quarterly (Jan, Apr, Jul, Oct)',
    location: 'City Environmental Center, 456 Eco Blvd',
    imageUrl: 'https://images.pexels.com/photos/5486845/pexels-photo-5486845.jpeg'
  },
  {
    id: '4',
    title: 'Composting Workshop',
    description: 'Learn how to compost food scraps and yard waste to create nutrient-rich soil for gardens.',
    schedule: 'Monthly workshops',
    location: 'Community Garden, 789 Bloom St',
    imageUrl: 'https://images.pexels.com/photos/6913125/pexels-photo-6913125.jpeg'
  }
];

export const energyTips: EnergyTip[] = [
  {
    id: '1',
    title: 'Replace Light Bulbs with LEDs',
    description: 'LED light bulbs use at least 75% less energy and last 25 times longer than incandescent lighting.',
    impact: 'medium',
    category: 'home',
    imageUrl: 'https://images.pexels.com/photos/279315/pexels-photo-279315.jpeg'
  },
  {
    id: '2',
    title: 'Unplug Electronics When Not in Use',
    description: 'Many devices consume energy even when turned off, a phenomenon known as phantom energy.',
    impact: 'low',
    category: 'home',
    imageUrl: 'https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg'
  },
  {
    id: '3',
    title: 'Install Programmable Thermostat',
    description: 'Program your thermostat to reduce heating/cooling when you\'re asleep or away from home.',
    impact: 'high',
    category: 'home',
    imageUrl: 'https://images.pexels.com/photos/4224335/pexels-photo-4224335.jpeg'
  },
  {
    id: '4',
    title: 'Use Natural Lighting at Work',
    description: 'Position desks near windows and use natural light instead of artificial lighting when possible.',
    impact: 'medium',
    category: 'work',
    imageUrl: 'https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg'
  }
];

export const gardeningProjects: GardeningProject[] = [
  {
    id: '1',
    title: 'Community Vegetable Garden',
    description: 'Join our community in growing seasonal vegetables in shared garden beds. All experience levels welcome!',
    location: 'Riverside Park',
    participants: 12,
    maxParticipants: 20,
    startDate: '2025-04-15',
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg'
  },
  {
    id: '2',
    title: 'Butterfly Garden Initiative',
    description: 'Help plant and maintain a garden designed to attract and support local butterfly populations.',
    location: 'Memorial Park',
    participants: 8,
    maxParticipants: 15,
    startDate: '2025-05-01',
    imageUrl: 'https://images.pexels.com/photos/65294/pexels-photo-65294.jpeg'
  },
  {
    id: '3',
    title: 'School Garden Project',
    description: 'Volunteer to help elementary students learn about growing food and caring for plants.',
    location: 'Lincoln Elementary School',
    participants: 5,
    maxParticipants: 10,
    startDate: '2025-04-10',
    imageUrl: 'https://images.pexels.com/photos/7728942/pexels-photo-7728942.jpeg'
  },
  {
    id: '4',
    title: 'Herb Garden Co-op',
    description: 'Grow and share culinary and medicinal herbs with fellow community members.',
    location: 'Community Center Rooftop',
    participants: 7,
    maxParticipants: 12,
    startDate: '2025-04-22',
    imageUrl: 'https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg'
  }
];

export const productListings: ProductListing[] = [
  {
    id: '1',
    title: 'Reusable Stainless Steel Water Bottle',
    description: 'Rarely used 24oz insulated water bottle. Keeps drinks cold for 24hrs or hot for 12hrs.',
    condition: 'like new',
    category: 'Kitchen',
    imageUrl: 'https://images.pexels.com/photos/1346404/pexels-photo-1346404.jpeg',
    owner: 'Sarah J.'
  },
  {
    id: '2',
    title: 'Bamboo Utensil Set',
    description: 'Eco-friendly travel utensil set including fork, knife, spoon, and chopsticks in a fabric case.',
    condition: 'new',
    category: 'Kitchen',
    imageUrl: 'https://images.pexels.com/photos/1389102/pexels-photo-1389102.jpeg',
    owner: 'Michael T.'
  },
  {
    id: '3',
    title: 'Indoor Composting Bin',
    description: 'Odor-free kitchen compost bin. Perfect for collecting food scraps before taking to outdoor compost.',
    condition: 'good',
    category: 'Garden',
    imageUrl: 'https://images.pexels.com/photos/4503261/pexels-photo-4503261.jpeg',
    owner: 'Jamie K.'
  },
  {
    id: '4',
    title: 'Solar Phone Charger',
    description: 'Portable solar panel charger for phones and small devices. Great for camping or power outages.',
    condition: 'fair',
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    owner: 'Alex P.'
  }
];