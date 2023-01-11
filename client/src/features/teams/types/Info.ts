import { Venue } from '../../../app/types';

export interface TeamInfo {
  team: {
    id: number;
    name: string;
    logo: string;
    founded: number;
    country: string;
  };
  venue: Venue;
}
