// Product Variant Interface
export type Variant = {
  type: string;
  value: string;
};

// Product Inventory Interface
export type Inventory = {
  quantity: number;
  inStock: boolean;
};

// Product Interface
export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};
