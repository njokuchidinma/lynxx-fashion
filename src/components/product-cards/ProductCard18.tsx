import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@/components/Box";
import Image from "@/components/Image";
import Rating from "@/components/rating";
import FlexBox from "@/components/FlexBox";
import NavLink from "@/components/nav-link";
import { Paragraph } from "@/components/Typography";
import { currency } from "@/utils/utils";

const StyledFlexBox = styled(FlexBox)({
  gap: "1rem",
  alignItems: "center",
  "& a": { flexShrink: 0 },
  "& img": { transition: "0.3s" },
  ":last-of-type": { marginBottom: 0 },
  ":hover": { img: { transform: "scale(1.1)" } },
});

// ===========================================
type ProductCard18Props = {
  slug: string;
  image: string;
  title: string;
  price: number;
  rating: number;
};
// ===========================================

const ProductCard18: FC<ProductCard18Props> = (props) => {
  const { image, title, price, slug, rating } = props;

  return (
    <StyledFlexBox mb="1rem">
      <Link href={`/product/${slug}`}>
        <Box maxWidth={100} bg="gray.300">
          <Image width="100%" alt="product" src={image} />
        </Box>
      </Link>

      <Box>
        <NavLink href="#">
          <Paragraph fontSize={16}>{title}</Paragraph>
        </NavLink>

        <Paragraph fontWeight={700} my={1}>
          {currency(price)}
        </Paragraph>

        <Rating value={rating} size="small" color="warn" />
      </Box>
    </StyledFlexBox>
  );
};

export default ProductCard18;
