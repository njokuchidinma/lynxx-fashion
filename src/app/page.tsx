import { Fragment } from "react";
import Box from "@/components/Box";
import api from "@/utils/__api__/fashion";
import Navbar from "@/components/navbar/Navbar";
import Section1 from "@/sections/Section1";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
import Section6 from "@/sections/Section6";
import Section7 from "@/sections/Section7";
import Section8 from "@/sections/Section8";
import Section9 from "@/sections/Section9";
import Section10 from "@/sections/Section10";


const FashionTwo = async () => {
    const blogs = await api.getBlogs();
    const brands = await api.getBrands();
    const products = await api.getProducts();
    const serviceList = await api.getServices();
    const categories = await api.getCategories();
    const saleProducts = await api.getSaleProducts();
    const latestProducts = await api.getLatestProducts();
    const popularProducts = await api.getPopularProducts();
    const featureProducts = await api.getFeatureProducts();
    const bestWeekProducts = await api.getBestWeekProducts();
    const mainCarouselData = await api.getMainCarouselData();
  
    return (
      <Fragment>
        {/* NAVBAR AREA */}
        <Navbar />
  
        <Box bg="white">
          {/* HERO CAROUSEL AREA */}
          <Section1 data={mainCarouselData} />
  
          {/* SERVICES AREA */}
          <Section2 serviceList={serviceList} />
  
          {/* BEST SELLING CATEGORIES AREA */}
          <Section3 categories={categories} />
  
          {/* BEST SELLING PRODUCTS AREA */}
          <Section4 products={products} />
  
          {/* DISCOUNT OFFER BANNERS AREA */}
          <Section5 />
  
          {/* FEATURED PRODUCTS AREA */}
          <Section6 products={featureProducts} />
  
          {/* SUMMER SALE OFFER AREA */}
          <Section7 />
  
          {/* LATEST ARTICLES AREA */}
          <Section8 blogs={blogs} />
  
          {/* CLIENTS CAROUSEL AREA */}
          <Section9 brands={brands} />
  
          {/* SALE, LATEST, POPULAR PRODUCTS AREA */}
          <Section10
            saleProducts={saleProducts}
            latestProducts={latestProducts}
            popularProducts={popularProducts}
            bestWeekProducts={bestWeekProducts}
          />
        </Box>
      </Fragment>
    );
  };
  
  export default FashionTwo;
  