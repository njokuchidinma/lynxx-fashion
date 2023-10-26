import { FC } from "react";
import Link from "next/link";
import NextImage from "next/legacy/image";
import Box from "@/components/Box";
import Card from "@/components/Card";
import Grid from "@/components/grid/Grid";
import FlexBox from "@/components/FlexBox";
import NavLink from "@/components/nav-link";
import Typography, { H3, SemiSpan, Small } from "@/components/Typography";
import { StyledMegaMenu1 } from "./styles";
import { MegaMenu3Props } from "./type";

const MegaMenu3: FC<MegaMenu3Props> = ({
  data: { categories, rightImage },
  minWidth = "760px",
}) => {
  return categories ? (
    <StyledMegaMenu1 className="mega-menu">
      <Card ml="1rem" minWidth={minWidth} boxShadow="regular">
        <FlexBox px="1.25rem" py="0.875rem">
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories?.map((item, ind) => (
                <Grid item md={3} key={ind}>
                  {item.href ? (
                    <NavLink className="title-link" href={item.href}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <SemiSpan className="title-link">{item.title}</SemiSpan>
                  )}
                  {item.subCategories?.map((sub, ind) => (
                    <NavLink key={ind} className="child-link" href={sub.href}>
                      {sub.title}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Link href={rightImage.href}>
              <Box position="relative" width="153px" height="100%">
                <NextImage
                  src={rightImage.imgUrl}
                  layout="fill"
                  objectFit="contain"
                  alt="bonik"
                />
              </Box>
            </Link>
          )}
        </FlexBox>

        <Link href="/sale-page-2">
          <Grid
            container
            spacing={0}
            flexWrap="wrap-reverse"
            containerHeight="100%"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              <Box px="1.25rem">
                <H3 mb="0.5rem">Big Sale Upto 60% Off</H3>

                <Typography color="text.muted" mb="0.5rem">
                  Handcrafted from genuine Italian Leather
                </Typography>

                <Small
                  fontWeight="700"
                  borderBottom="2px solid"
                  borderColor="primary.main"
                >
                  SHOP NOW
                </Small>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <FlexBox
                flexDirection="column"
                justifyContent="flex-end"
                height="160px"
                position="relative"
              >
                <NextImage
                  layout="fill"
                  objectFit="contain"
                  src="/assets/images/products/paper-bag.png"
                  alt="model"
                />
              </FlexBox>
            </Grid>
          </Grid>
        </Link>
      </Card>
    </StyledMegaMenu1>
  ) : null;
};

export default MegaMenu3;
