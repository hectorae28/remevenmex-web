import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import {
  Banner,
  ProductsAndService,
  SucursalesSlider,
  AboutUs,
  Package,
  BankInfo
} from "sections";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="RemeVenMex" />
          <Banner />
          <ProductsAndService />
          <BankInfo />
          <SucursalesSlider />
          <AboutUs />
          <Package />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
