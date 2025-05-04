export type Feedback = {
  id: string;
  category: 'product' | 'service' | 'general';
  rating: number;
  message: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  createdAt: string;
};

export type SentimentData = {
  positive: number;
  neutral: number;
  negative: number;
};