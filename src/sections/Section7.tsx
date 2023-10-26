"use client";
import { FC } from "react";
import Grid from "@/components/grid/Grid";
import Container from "@/components/Container";
import { BannerCard1, BannerCard2 } from "@/components/banner";

const Section5: FC = () => {
  return (
    <Container mt="4rem">
      <Grid container spacing={5}>
        <Grid item md={4} xs={12}>
          <BannerCard1
            url="#"
            title="For Men's"
            subTitle="Starting At $29"
            img="/assets/images/banners/men's-fashion.jpg"
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard2
            url="#"
            text3="Sale"
            text2="Black Friday"
            text1="Up to 20% Off"
            img="/assets/images/banners/banner2.jpg"
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <BannerCard1
            url="#"
            title="For Women's"
            subTitle="25% Off"
            img="/assets/images/banners/womens-fashion.jpg"
            contentPosition="right"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section5;
