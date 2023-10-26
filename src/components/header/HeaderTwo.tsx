"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Icon from "@/components/icon/Icon";
import FlexBox from "@/components/FlexBox";
import MiniCart from "@/components/mini-cart";
import Container from "@/components/Container";
import { Tiny } from "@/components/Typography";
import Login from "@/components/sessions/Login";
import { IconButton } from "@/components/buttons";
import Sidenav from "@/components/sidenav/Sidenav";
import { SearchInput } from "@/components/search-box";
import { useAppContext } from "@/contexts/AppContext";
import UserLoginDialog from "./LoginDialog";
import StyledHeader from "./styles";

// ========================================================================
type HeaderProps = { isFixed?: boolean; className?: string };
// ========================================================================

const HeaderTwo: FC<HeaderProps> = ({ className }) => {
  const { state } = useAppContext();
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);

  const CART_HANDLE = (
    <FlexBox ml="20px" alignItems="flex-start">
      <IconButton bg="gray.200" p="12px">
        <Icon size="20px">bag</Icon>
      </IconButton>

      {!!state.cart.length && (
        <FlexBox
          px="5px"
          py="2px"
          mt="-9px"
          ml="-1rem"
          bg="primary.main"
          alignItems="center"
          borderRadius="300px"
          justifyContent="center"
        >
          <Tiny color="white" fontWeight="600">
            {state.cart.length}
          </Tiny>
        </FlexBox>
      )}
    </FlexBox>
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
            <img src="/assets/images/logo.svg" alt="logo" />
          </Link>
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <SearchInput />
        </FlexBox>

        <FlexBox className="header-right" alignItems="center">
          <UserLoginDialog handle={LOGIN_HANDLE}>
            <Login />
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

export default HeaderTwo;
