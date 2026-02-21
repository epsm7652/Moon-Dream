import productCandle1 from "@/assets/product-candle-1.jpg";
import productCandle2 from "@/assets/product-candle-2.jpg";
import productCandle3 from "@/assets/product-candle-3.jpg";
import productCandle4 from "@/assets/product-candle-4.jpg";
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  scent: string;
  petSafe: { dog: boolean; cat: boolean; bird: boolean };
  allergens: string[];
  inStock: boolean;
}
export const categories = [
  { id: "all", label: "All" },
  { id: "signature", label: "Signature" },
  { id: "seasonal", label: "Seasonal" },
  { id: "pet-safe", label: "Pet Safe" },
  { id: "gift-sets", label: "Gift Sets" },
];
export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Amber",
    price: 28.00,
    description: "A rich blend of warm amber, sandalwood, and a hint of dark vanilla. Perfect for evening relaxation.",
    category: "signature",
    image: productCandle1,
    scent: "Amber & Vanilla",
    petSafe: { dog: true, cat: true, bird: false },
    allergens: [],
    inStock: true,
  },
  {
    id: "2",
    name: "Lunar Glow",
    price: 32.00,
    description: "Pure soy wax infused with white tea and jasmine. A calming, clean fragrance for any space.",
    category: "signature",
    image: productCandle2,
    scent: "White Tea & Jasmine",
    petSafe: { dog: true, cat: true, bird: true },
    allergens: [],
    inStock: true,
  },
  {
    id: "3",
    name: "Lavender Eclipse",
    price: 25.00,
    description: "French lavender meets smoky cedar in this deeply soothing blend. Ideal for meditation and sleep.",
    category: "seasonal",
    image: productCandle3,
    scent: "Lavender & Cedar",
    petSafe: { dog: true, cat: false, bird: false },
    allergens: ["lavender"],
    inStock: true,
  },
  {
    id: "4",
    name: "Rose Ember",
    price: 35.00,
    description: "Delicate rose petals paired with warm ember and oud. A luxurious, romantic fragrance.",
    category: "gift-sets",
    image: productCandle4,
    scent: "Rose & Oud",
    petSafe: { dog: true, cat: true, bird: false },
    allergens: ["rose"],
    inStock: true,
  },
];
