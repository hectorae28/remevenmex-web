/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

const data = [
  {
    id: 1,
    title: "Nombre del lugar",
    address:
      "Av. Francisco de Miranda, Centro Lido, El Rosal. Caracas - Distrito Capital.",
    phone: "0212xxxxxx0",
  },
  {
    id: 2,
    title: "Nombre del lugar",
    address:
      "Av. Francisco de Miranda, Centro Lido, El Rosal. Caracas - Distrito Capital.",
    phone: "0212xxxxxx0",
  },
  {
    id: 3,
    title: "Nombre del lugar",
    address:
      "Av. Francisco de Miranda, Centro Lido, El Rosal. Caracas - Distrito Capital.",
    phone: "0212xxxxxx0",
  },
  {
    id: 4,
    title: "Nombre del lugar",
    address:
      "Av. Francisco de Miranda, Centro Lido, El Rosal. Caracas - Distrito Capital.",
    phone: "0212xxxxxx0",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 2,
    slidesToSlide: 2,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function SucursalesSlider() {
  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container>
        <SectionHeader title="Ubicaciones" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={500}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Heading as="h3" sx={styles.title}>
                {item.title} {item.id}
              </Heading>
              <Text sx={styles.description}>{item.address} </Text>
              <Text sx={styles.designation}>{item.phone}</Text>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "yellow",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
