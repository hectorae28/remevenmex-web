/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Link, Flex } from "theme-ui";
import { FaWhatsapp,FaPhone } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";

export default function FeatureCard({
  src,
  altText = "default alt text",
  title,
  textList,
  subTitle,
  phone,
  whatsapp
}) {
  const [wrapped, setWrapped] = useState(false)
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        {subTitle?<Text sx={styles.wrapper.subTitle}>{subTitle}</Text>:null}
        <Flex>
          {phone?<Link sx={styles.wrapper.whatsapp} href={`tel:${phone}`}><FaPhone size={20}/></Link>:<Text sx={styles.wrapper.noText}></Text>}
          {whatsapp?<Link sx={styles.wrapper.whatsapp} href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Hola!`}><FaWhatsapp size={30}/></Link>:<Text sx={styles.wrapper.noText}></Text>}
        </Flex>
        {textList? <Text sx={styles.wrapper.arrow}>Depositos por:{wrapped? <IoIosArrowDropup size={20} onClick={()=>setWrapped(!wrapped)}/>:<IoIosArrowDropdown size={20} onClick={()=>setWrapped(!wrapped)}/>}</Text> :null}
        <ul>
          {wrapped? textList?.map((item,index)=>(
            <li key={index}>
              <Text as='p' sx={styles.wrapper.subTitle}>{item}</Text>
            </li>
          )):null}
        </ul>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
  },

  img: {
    width: ["60px", null, null, null, "55px", "70px", null, "80px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4, null, null, 3, 4, null, 5],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: "2px",
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
    whatsapp:{
      color:"black",
      display:"flex",
      alignItems:"center",
      marginRight:15
    },
    arrow: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
      display:"flex",
      alignItems:"center",
    },
    noText: {
      height:34.45
    }
  },
};
