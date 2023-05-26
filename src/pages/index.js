import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import {
  Banner,
  ProductsAndService,
  AboutUs,
  Package,
  BankInfo,
} from "sections";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Remevenmx - Casa de Cambio Internacional | Mejores Tasas y Servicio Confiable" />
          <Banner />
          <ProductsAndService />
          <BankInfo />
          <AboutUs />
          <Package />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
