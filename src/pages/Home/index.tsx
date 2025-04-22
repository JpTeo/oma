import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import WhatsAppButton from "../../common/Button/Flotante/WhatsApp";
import FooterWithMap from "../../components/Footer";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <WhatsAppButton />
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="omaheader2.png"
        id="intro"
      />
      <div style={{ textAlign: "center", marginBottom: "-5rem" }}>
        <h6>Nuestras clases</h6>
      </div>
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        button={IntroContent.button}
        icon="Pilatesoma.png"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        button={IntroContent.button}
        icon="yogaoma.png"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        button={IntroContent.button}
        icon="logooma7.png"
        id="product"
      />
      <FooterWithMap
        address={"Av. Corrientes, Cdad. Autónoma de Buenos Aires"}
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
