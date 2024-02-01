export type Product = {
  id: string;
  name: string;
  thumbnail: string;
  thumbnailUrl: string;
  maxTicketsPerPerson: number;
  totalTickets: number;
  ticketsSold: number;
  drawDate: Date;
  price: number;
  description: string;
  productDetails: string;
  category: string;
  additionalAttributes: Record<string, any>;
  images: ProductImage[];
  createdAt: Date;
  updatedAt: Date;
};

type ProductImage = {
  id: string;
  fileName: string;
  mimetype: string;
  size: number;
  key: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string;
};
