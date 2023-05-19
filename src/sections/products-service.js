/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import { FaDollarSign, FaGlobeAmericas, FaUserAlt } from "react-icons/fa";

const data = [
  {
    id: 1,
    imgSrc: <FaDollarSign size={100} />,
    altText: "Dollar",
    title: "Cambio de divisas",
    text: "Proporcionamos tasas de cambio competitivas y actualizadas para una amplia variedad de monedas, garantizando transacciones rápidas y eficientes.",
  },
  {
    id: 2,
    imgSrc: <FaGlobeAmericas size={100} />,
    altText: "GlobeAmericas",
    title: "Transferencias internacionales",
    text: "Facilitamos transferencias seguras y confiables a destinos en todo el mundo, eliminando las barreras financieras y permitiéndote enviar o recibir fondos con facilidad.",
  },
  {
    id: 3,
    imgSrc: <FaUserAlt size={100} />,
    altText: "USER",
    title: "Atención personalizada",
    text: "Nuestro equipo de expertos está disponible para responder a tus preguntas y brindarte el apoyo que necesitas para tomar decisiones informadas en el mercado de divisas.",
  },
];

export default function ProductsAndService() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Ofrecemos Productos y Servicios diseñados para satisfacer todas tus necesidades de cambio de moneda. "
          title="Productos y Servicios"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              icon={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
