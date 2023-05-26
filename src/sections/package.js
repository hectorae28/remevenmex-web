/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import PriceCard from "components/price-card";
import PatternBG from "assets/patternBG.png";

const packages = [
  {
    name: "Misión",
    description:
      "Nuestra misión en REMEVENMX es empoderar a nuestros clientes al proporcionarles soluciones rápidas, seguras y confiables en sus necesidades de cambio de divisas. Nos comprometemos a ofrecer un servicio excepcional y a desarrollar relaciones duraderas con nuestros clientes, basadas en la integridad, la transparencia y la satisfacción mutua. Nuestra meta es eliminar las barreras financieras y contribuir al crecimiento económico global, a través de la innovación constante y la adaptación a las cambiantes necesidades del mercado.",
  },
  {
    name: "Visión",
    description:
      "Nuestra visión en REMEVENMX es convertirnos en líderes en el mercado cambiario, siendo reconocidos por nuestra ética, calidad y compromiso en el servicio al cliente. Aspiramos a ser el referente en la industria de las casas de cambio, expandiendo nuestra presencia a nivel mundial y marcando la diferencia en la vida de nuestros clientes. Nos esforzamos por mantenernos a la vanguardia de la innovación tecnológica y las tendencias del mercado, ofreciendo soluciones personalizadas y eficientes, que permitan a nuestros clientes alcanzar sus metas económicas en un mundo globalizado e interconectado.",
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <Flex
          sx={{
            justifyContent: "center",
            flexWrap: ["wrap", null, null, "nowrap"],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 10],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      background:
        "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
