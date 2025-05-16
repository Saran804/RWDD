export interface RecyclingProgram {
  id: string;
  title: string;
  description: string;
  schedule: string;
  location: string;
  imageUrl: string;
}

export interface EnergyTip {
  id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  category: 'home' | 'work' | 'travel';
  imageUrl: string;
}

export interface GardeningProject {
  id: string;
  title: string;
  description: string;
  location: string;
  participants: number;
  maxParticipants: number;
  startDate: string;
  imageUrl: string;
}

export interface ProductListing {
  id: string;
  title: string;
  description: string;
  condition: 'new' | 'like new' | 'good' | 'fair';
  category: string;
  imageUrl: string;
  owner: string;
}