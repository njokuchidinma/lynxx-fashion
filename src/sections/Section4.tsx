"use client";
import { FC, useEffect, useState } from "react";
import { H2 } from "@/components/Typography";
import Container from "@/components/Container";
import { ProductCard17 } from "@/components/product-cards";
import { Carousel, CarouselWrapper } from "@/components/carousel";
import useWindowSize from "@/hooks/useWindowSize";
import Product from "@/models/product.model";

// ======================================================================
type Section4Props = { products: Product[] };
// ======================================================================

const Section4: FC<Section4Props> = ({ products }) => {
  const width: any = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Best Selling Product
      </H2>

      <CarouselWrapper>
        <Carousel totalSlides={products.length} visibleSlides={visibleSlides}>
          {products.map((product) => (
            <ProductCard17
              id={product.id}
              key={product.id}
              slug={product.slug}
              title={product.title}
              price={product.price}
              images={product.images as string[]}
              imgUrl={product.thumbnail}
              category={product.categories[0]}
              reviews={product.reviews?.length || 4}
            />
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
};

export default Section4;
