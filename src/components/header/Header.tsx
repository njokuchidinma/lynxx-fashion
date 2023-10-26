"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Box from "@/components/Box";
import Image from "@/components/Image";
import Icon from "@/components/icon/Icon";
import FlexBox from "@/components/FlexBox";
import MiniCart from "@/components/mini-cart";
import Container from "@/components/Container";
import { Tiny } from "@/components/Typography";
import Login from "@/components/sessions/Login";
import { IconButton } from "@/components/buttons";
import Sidenav from "@/components/sidenav/Sidenav";
import Categories from "@/components/categories/Categories";
import { SearchInputWithCategory } from "@/components/search-box";
import { useAppContext } from "@/contexts/AppContext";
import StyledHeader from "./styles";
import UserLoginDialog from "./LoginDialog";

// ====================================================================
type HeaderProps = { isFixed?: boolean; className?: string };
// =====================================================================

const Header: FC<HeaderProps> = ({ isFixed, className }) => {
  const { state } = useAppContext();
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);

  const CART_HANDLE = (
    <Box ml="20px" position="relative">
      <IconButton bg="gray.200" p="12px" size="small">
        <Icon size="20px">bag</Icon>
      </IconButton>

      {!!state.cart.length && (
        <FlexBox
          top={-5}
          right={-5}
          height={20}
          minWidth={20}
          bg="primary.main"
          borderRadius="50%"
          alignItems="center"
          position="absolute"
          justifyContent="center"
        >
          <Tiny color="white" fontWeight="600" lineHeight={1}>
            {state.cart.length}
          </Tiny>
        </FlexBox>
      )}
    </Box>
  );

  const LOGIN_HANDLE = (
    <IconButton ml="1rem" bg="gray.200" p="8px">
      <Icon size="28px">user</Icon>
    </IconButton>
  );

  return (
    <StyledHeader className={className}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <FlexBox className="logo" alignItems="center" mr="1rem">
          <Link href="/">
            <Image src="/assets/images/logo.svg" alt="logo" />
          </Link>

          {isFixed && (
            <div className="category-holder">
              <Categories>
                <FlexBox color="text.hint" alignItems="center" ml="1rem">
                  <Icon>categories</Icon>
                  <Icon>arrow-down-filled</Icon>
                </FlexBox>
              </Categories>
            </div>
          )}
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <SearchInputWithCategory />
        </FlexBox>

        <FlexBox className="header-right" alignItems="center">
          <UserLoginDialog handle={LOGIN_HANDLE}>
            <div>
              <Login />
            </div>
          </UserLoginDialog>

          <Sidenav
            open={open}
            width={380}
            position="right"
            handle={CART_HANDLE}
            toggleSidenav={toggleSidenav}
          >
            <MiniCart toggleSidenav={toggleSidenav} />
          </Sidenav>
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
