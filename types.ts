export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface Specialist {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface RiskItem {
  title: string;
  description: string;
  icon: 'gavel' | 'chart' | 'trending';
}