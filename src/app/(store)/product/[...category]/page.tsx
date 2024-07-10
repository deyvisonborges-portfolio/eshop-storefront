import { StoreLayout } from "@/layouts/store-layout";
import { ProductDetails } from "@/views/product-details";

type RouteProps = {
  params: {
    id: string;
    slug: string;
  };
};

export default function ProductPage({ params }: RouteProps) {
  return <ProductDetails />;
}
