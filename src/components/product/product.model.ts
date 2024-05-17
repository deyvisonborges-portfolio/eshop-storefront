export type ProductModel = {
  description: string; // Some product description
  reviews: number; // ex.: ***** 5,8
  price: number; // ex.: R$ 20
  priceWithDiscount: number; // ex.: R$ 20,00 / R$ 19,00
  priceNote?: string; //  ex.: R$ 20 /per item
  deliveryNote?: string; // ex.: <Icon> Free shipping
  addressNote?: string; // ex.: <Icon> United States
  categoryName?: string; // ELETRONICS
  attributes?: [{ sizes?: string[]; colors?: string[] }];
};
