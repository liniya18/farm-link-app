export interface Produce {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: 'Vegetables' | 'Fruits' | 'Grains' | 'Dairy' | 'Other';
  image: string;
  farmerId: string;
  farmerName: string;
  location: string;
  description: string;
  stock: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'consumer';
  location?: string;
  avatar?: string;
}
