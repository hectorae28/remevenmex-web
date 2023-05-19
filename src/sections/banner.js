/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image } from "theme-ui";
import { Link } from "components/link";
import BannerBG from "assets/bannerBg.png";
import Coins from "assets/coins.png";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    path: "https://www.facebook.com/profile.php?id=100091809385732&mibextid=LQQJ4d",
    icon: <FaFacebookF size={50} />,
    title: "Facebook",
  },
  {
    id: 2,
    path: "https://www.instagram.com/remevenmx/?igshid=YmMyMTA2M2Y%3D",
    icon: <FaInstagram size={50} />,
    title: "Instagram",
  },
  {
    id: 3,
    path: "https://wa.me/message/VU2TV7TYZ5T3M1",
    icon: <FaWhatsapp size={50} />,
    title: "Whatsapp",
  },
  {
    id: 4,
    path: "mailto:tzirw@example.com",
    icon: <FaRegEnvelope size={50} />,
    title: "mail",
  },
];
export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            ¡Tu puente hacia un mundo de divisas sin fronteras!
          </Heading>
          <Text as="p" variant="heroSecondary">
            Nos enorgullecemos de ser una casa de cambio de confianza y
            eficiente que se dedica a facilitar tus transacciones en el ámbito
            de las divisas. Con años de experiencia en el mercado y un equipo de
            profesionales altamente capacitados.
          </Text>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Siguenos: </Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Box
                  as="span"
                  sx={styles.social.icon}
                  key={`client-key${index}`}
                >
                  <Link path={item.path} sx={styles.Links}>
                    {item.icon}
                  </Link>
                </Box>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={Coins} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "primary",
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%", null, "85%", "55%", "50%", "55%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ["none", null, null, "block"],
      justifyContent: "center",
      ml: [0, null, null, "-110px", "-115px", "-150px", "-210px", "-270px"],
      mr: [0, null, null, "-145px", "-160px", "-180px", "-220px", "-290px"],
      mt: [0, null, null, "40px", 4, 7, 0],
      mb: [0, null, null, null, "-45px", "-70px", null, "-115px"],
      overflow: "hidden",
      textAlign: "right",
      width: "100%",
    },
  },
  sponsorTitle: {
    color: "white",
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ["35px", null, null, null, null, "45px"],
    flexDirection: ["column", null, "row"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      "> a": {
        mr: [5, null, null, 4, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },
  Links: { textDecoration: "none", color: "white" },
};
