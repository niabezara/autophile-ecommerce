interface ImageUrls {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInterface {
  id: number;
  slug: string;
  name: string;
  image: ImageUrls;
  category: string;
  categoryImage: ImageUrls;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: ImageUrls;
    second: ImageUrls;
    third: ImageUrls;
  };
  others: {
    slug: string;
    name: string;
    image: ImageUrls;
  }[];
}
