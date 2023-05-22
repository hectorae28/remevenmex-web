import React from "react";
import Head from "next/head";

export default function SEO({
  description = "En Remevenmex somos una casa de cambio que ofrece servicios de cambio de divisas seguros y confiables. Contamos con un equipo de expertos en finanzas que te brindarán un servicio personalizado y de calidad. Te ofrecemos los mejores tipos de cambio y una amplia variedad de monedas para que puedas realizar tus transacciones de manera fácil y rápida. ¡Visítanos y comprueba por qué somos la mejor opción en cambio de divisas!",
  author = "REMEVENMEX",
  meta,
  title = "RemevenMex - Casa de Cambio Internacional | Mejores Tasas y Servicio Confiable",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
};
