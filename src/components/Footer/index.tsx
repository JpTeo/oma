import { Col, Row, Typography } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import {
  Extra,
  LogoContainer,
  FooterContainer,
  SubTitle,
  ContainerMapa,
} from "./styles";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import {
  redirectFacebook,
  redirectInstagram,
  redirectWhatsApp,
} from "../../common/utils/ContactsRedirect";
import GoogleMap from "../Maps/maps";
import { Fade } from "react-awesome-reveal";
interface ComponentMap {
  address: string;
}
interface SocialLinkProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const FooterWithMap = ({ address }: ComponentMap) => {
  const socialList: SocialLinkProps[] = [
    {
      icon: <WhatsAppOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectWhatsApp,
    },
    {
      icon: <FacebookOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectFacebook,
    },
    {
      icon: <InstagramOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectInstagram,
    },
  ];

  return (
    <Extra>
      <Fade direction={"left"} triggerOnce>
        <Row
          gutter={[16, 16]}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            minHeight: "fit-content",
          }}
        >
          <Col
            xs={24}
            md={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <LogoContainer>
              <SvgIcon
                src="logooma7.png"
                aria-label="homepage"
                width="200px"
                height="200px"
              />
            </LogoContainer>
            <Typography
              style={{
                fontFamily: 'font-family: "Motiva Sans Light", sans-serif;',
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              <EnvironmentOutlined />
              {address}
              <br></br>
              Timbre F
            </Typography>
            <SubTitle>Seguinos en nuestras redes !</SubTitle>
            <FooterContainer>
              {socialList.map((item, idx) => (
                <div
                  key={idx}
                  onClick={item.onClick}
                  style={{ cursor: "pointer" }}
                >
                  {item.icon}
                </div>
              ))}
            </FooterContainer>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              height: "200%",
            }}
          >
            <ContainerMapa>
              <GoogleMap
                address={address}
                height="100%"
                width="100%"
                zoom={18}
              />
            </ContainerMapa>
          </Col>
        </Row>
      </Fade>
    </Extra>
  );
};

export default FooterWithMap;
