export interface Team {
    id: number;
    name: string;
    logo: string;
  }
  
  export interface TeamInfo {
    team: {
      id: number;
      name: string;
      logo: string;
      founded: number;
      country: string;
    };
    venue: {
      id: number;
      name: string;
      address: string;
      city: string;
      capacity: number;
      image: string;
    };
  }
  