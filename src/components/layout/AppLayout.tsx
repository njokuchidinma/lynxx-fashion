"use client"
import { FC, ReactElement, ReactNode } from "react";
import Head from "next/head";
import Topbar from "@/components/topbar";
import Sticky from "@/components/sticky";
import { Header } from "@/components/header";
import { Footer1 } from "@/components/footer";
import MobileNavigationBar from "@/components/mobile-navigation";
import StyledAppLayout from "./AppLayoutStyle";


// ===============================================================================
type Props = { title?: string; navbar?: ReactElement; children: ReactNode };
// ===============================================================================

const AppLayout: FC<Props> = ({
  navbar,
  children,
  title = "React Next.js Ecommerce Template",
}) => (
  <StyledAppLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Topbar />

    <Sticky fixedOn={0}>
      <Header />
    </Sticky>

    {navbar ? <div className="section-after-sticky">{navbar}</div> : null}

    {!navbar ? (
      <div className="section-after-sticky">{children}</div>
    ) : (
      children
    )}

    <MobileNavigationBar />
    <Footer1 />
  </StyledAppLayout>
);

export default AppLayout;
