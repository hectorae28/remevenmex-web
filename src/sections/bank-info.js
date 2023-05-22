/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card';
import Colombia from 'assets/feature/colombia.png';
import Peru from 'assets/feature/peru.png';
import Mexico from 'assets/feature/mexico.png';
import Spain from 'assets/feature/spain.png'
import Chile from 'assets/feature/chile.png'
import US from 'assets/feature/united-states.png'
const data = [
  {
    imgSrc: Colombia,
    altText: 'Flag',
    title: 'Colombia',
    textList:
      ['Banco Bogota','BanColombia'],
  },
  {
    imgSrc: Peru,
    altText: 'Flag',
    title: 'Peru',
    phone:'+51917649301',
    whatsapp:'51930799244',
    textList:
      ['Yape','Plin','Bcp','BBVA'],
  },
  {
    imgSrc: Mexico,
    altText: 'Flag',
    title: 'Mexico',
    phone:'+529841575086',
    whatsapp:'529841575086',
    textList:
      ['Oxxo','PayPal','Bancomer','Bancoppel','HSBC','Mercado Pago QR'],
  },
  {
    imgSrc: Spain,
    altText: 'Flag',
    title: 'España',
    subTitle:'Muy Pronto'
  },
  {
    imgSrc: Chile,
    altText: 'Flag',
    title: 'Chile',
    subTitle:'Muy Pronto'
  },
  {
    imgSrc: US,
    altText: 'Flag',
    title: 'Estados Unidos',
    subTitle:'Muy Pronto'
  },
  
];

export default function BankInfo() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          title="Formas de pago"
        />

        <Grid sx={styles.grid}>
          {data.map((item,index) => (
            <FeatureCard
              key={index}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              textList={item.textList}
              subTitle={item.subTitle}
              phone={item.phone}
              whatsapp={item.whatsapp}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};