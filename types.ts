// Original API response structure
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

// Transformed dashboard user structure
export interface DashboardUser {
  id: number;
  fullName: string;
  email: string;
  city: string;
}