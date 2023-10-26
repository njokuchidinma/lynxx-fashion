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
import { Paragraph } from "@/components/Typography";
import { deviceSize } from "@/utils/constants";
import { getTheme } from "@/utils/utils";

// styled component
const StyledLink = styled(Link)`
  display: block;
  padding: 0.35rem 0rem;
  color: ${getTheme("colors.gray.500")};
  cursor: pointer;
  border-radius: 4px;
  :hover {
    color: ${getTheme("colors.gray.100")};
  }
  z-index: 999;
  position: relative;
`;

const StyledBox = styled(Box)`
  margin-right: auto;
  margin-left: auto;

  @media only screen and (max-width: ${deviceSize.sm}px) {
    margin-right: unset;
    margin-left: unset;
  }
`;

const Wrapper = styled(Box)`
  margin-bottom: 1rem;
  padding: 40px;
  color: white;
  overflow: hidden;
  border-radius: 8px;
  background-color: #0f3460;

  @media only screen and (max-width: 900px) {
    margin-bottom: 3.75rem;
  }
`;

const Footer2: FC = () => {
  return (
    <footer>
      <Wrapper>
        <Link href="/">
          <Image mb="1.5rem" src="/assets/images/logo.svg" alt="logo" />
        </Link>

        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Paragraph mb="1.25rem" color="gray.500" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <StyledBox maxWidth="230px" mt="-0.35rem">
              <div>
                {customerCareLinks.map((item, ind) => (
                  <StyledLink href="/" key={ind}>
                    {item}
                  </StyledLink>
                ))}
              </div>

              <FlexBox mx="-5px" mt="1rem">
                {iconList.map((item, ind) => (
                  <Link href="/" key={ind}>
                    <Box
                      m="5px"
                      size="small"
                      p="10px"
                      bg="rgba(0,0,0,0.2)"
                      borderRadius="50%"
                      cursor="pointer"
                    >
                      <Icon size="12px" defaultcolor="auto">
                        {item}
                      </Icon>
                    </Box>
                  </Link>
                ))}
              </FlexBox>
            </StyledBox>
          </Grid>
        </Grid>
      </Wrapper>
    </footer>
  );
};

const customerCareLinks = [
  "Help Center",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];

const iconList = ["facebook", "twitter", "youtube", "google", "instagram"];

export default Footer2;
