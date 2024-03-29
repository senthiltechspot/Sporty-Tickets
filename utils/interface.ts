export interface Player {
  id: number;
  name: string;
  img: any;
  events?: string;
  sports?: string;
}

export interface Advertisement {
  type: string;
  id: number;
  name: string;
  img: any;
  desc: string;
}

export interface Ticket {
  id: number;
  title: string;
  date: string;
  location: string;
  ctaText: string;
  img: any;
  isActive?: boolean;
}