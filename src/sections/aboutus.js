/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import RemeLogo from "assets/remeLogo.png";

const data = {
  subTitle: "REMEVENMEX",
  title:
    "¡Únete a nosotros y descubre cómo REMEVENMEX puede simplificar y mejorar tus operaciones cambiarias!",
  description:
    "Estamos orgullosos de ser una casa de cambio de confianza y eficiente que se dedica a facilitar tus transacciones en el ámbito de las divisas. Con años de experiencia en el mercado y un equipo de profesionales altamente capacitados, nos esforzamos por ofrecer un servicio excepcional y una atención personalizada a cada uno de nuestros clientes.",
};

export default function AboutUs() {
  return (
    <section id="aboutus" sx={{ variant: "section.partner" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
          />
        </Box>
        <Box sx={styles.imageContent}>
          <Image src={RemeLogo} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", 450, 550, "350px", "410px", "485px"],
    mx: "auto",
    pb: ["30px", null, null, 0],
    ".description": {
      pr: [0, null, null, null, 4],
    },
  },
  imageContent: {
    width: "100%",
    padding: "10%",
  },
};
