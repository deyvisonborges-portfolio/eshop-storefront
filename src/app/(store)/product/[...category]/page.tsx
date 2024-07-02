import { Button } from "@/components/core/button";
import Image from "next/image";

type RouteProps = {
  params: {
    id: string;
    slug: string;
  };
};

export default function ProductPage({ params }: RouteProps) {
  console.log(params)
  return (
    <section>
      <div className="gallery">
        <Image
          src=""
          alt="Product description"
          height={800}
          width={800}
        />
        <div className="gallery-timeline">
          <Image
            src=""
            alt="Product description"
            height={200}
            width={200}
          />
          <Image
            src=""
            alt="Product description"
            height={200}
            width={200}
          />
          <Image
            src=""
            alt="Product description"
            height={200}
            width={200}
          />
          <Image
            src=""
            alt="Product description"
            height={200}
            width={200}
          />
        </div>
      </div>
      <h1>Product name</h1>
      <p>R$ 120,00</p>
      <span>SKU: NJC83763</span>
      <input type="text" />

      <Button>Adicionar</Button>

      <div className="variant">
        <div className="variant-item">M</div>
        <div className="variant-item">L</div>
      </div>

      <p>
        Product description long text Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar
        tellus eleifend. Integer porttitor elit id euismod elementum. Nulla vel
        molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies
        pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.
      </p>
    </section>
  );
}
