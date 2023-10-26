"use client";
import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@/components/Box";
import Image from "@/components/Image";
import Grid from "@/components/grid/Grid";
import Icon from "@/components/icon/Icon";
import FlexBox from "@/components/FlexBox";
import AppStore from "@/components/AppStore";
import Container from "@/components/Container";
import Typography, { Paragraph } from "@/components/Typography";
import { getTheme } from "@/utils/utils";

// styled component
const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 0.3rem 0rem;
  color: ${getTheme("colors.gray.500")};
  cursor: pointer;
  border-radius: 4px;
  :hover {
    color: ${getTheme("colors.gray.100")};
  }
`;

const Footer1: FC = () => {
  return (
    <footer>
      <Box bg="#0F3460">
        <Container p="1rem" color="white">
          <Box py="5rem" overflow="hidden">
            <Grid container spacing={6}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <Image
                    alt="logo"
                    mb="1.25rem"
                    src="/assets/images/logo.svg"
                  />
                </Link>

                <Paragraph mb="1.25rem" color="gray.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </Paragraph>

                <AppStore />
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Typography
                  mb="1.25rem"
                  lineHeight="1"
                  fontSize="25px"
                  fontWeight="600"
                >
                  About Us
                </Typography>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography
                  mb="1.25rem"
                  lineHeight="1"
                  fontSize="25px"
                  fontWeight="600"
                >
                  Customer Care
                </Typography>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography
                  mb="1.25rem"
                  lineHeight="1"
                  fontSize="25px"
                  fontWeight="600"
                >
                  Contact Us
                </Typography>

                <Typography py="0.3rem" color="gray.500">
                  70 Washington Square South, New York, NY 10012, United States
                </Typography>

                <Typography py="0.3rem" color="gray.500">
                  Email: uilib.help@gmail.com
                </Typography>

                <Typography py="0.3rem" mb="1rem" color="gray.500">
                  Phone: +1 1123 456 780
                </Typography>

                <FlexBox className="flex" mx="-5px">
                  {iconList.map((item) => (
                    <a
                      href={item.url}
                      target="_blank"
                      key={item.iconName}
                      rel="noreferrer noopenner"
                    >
                      <Box
                        m="5px"
                        p="10px"
                        size="small"
                        borderRadius="50%"
                        bg="rgba(0,0,0,0.2)"
                      >
                        <Icon size="12px" defaultcolor="auto">
                          {item.iconName}
                        </Icon>
                      </Box>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const aboutLinks = [
  "Careers",
  "Our Stores",
  "Our Cares",
  "Terms & Conditions",
  "Privacy Policy",
];

const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];

const iconList = [
  { iconName: "facebook", url: "https://www.facebook.com/UILibOfficial" },
  { iconName: "twitter", url: "/" },
  {
    iconName: "youtube",
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  { iconName: "google", url: "/" },
  { iconName: "instagram", url: "/" },
];

export default Footer1;
