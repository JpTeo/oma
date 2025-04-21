import { Col, Row, Typography } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { NavLink, Extra, LogoContainer, FooterContainer } from "./styles";
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
  href: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const FooterWithMap = ({ address }: ComponentMap) => {
  const socialList: SocialLinkProps[] = [
    {
      href: "https://wa.me/+5491165879655",
      icon: <WhatsAppOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectWhatsApp,
    },
    {
      href: "https://facebook.com/tupagina",
      icon: <FacebookOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectFacebook,
    },
    {
      href: "https://instagram.com/tucuenta",
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
              // backgroundColor: "#fef8c2",
            }}
          >
            <NavLink to="/">
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
              </Typography>
            </NavLink>
            <Typography
              style={{
                fontFamily: 'font-family: "Motiva Sans Light", sans-serif;',
                fontSize: "1.5rem",
                fontWeight: "semi-bold",
                color: "white",
              }}
            >
              Seguinos en nuestras redes !
            </Typography>
            <FooterContainer style={{ display: "flex", gap: "1.5rem" }}>
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
            <div
              style={{
                width: "100%",
                height: "50vh",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <GoogleMap
                address={address}
                height="100%"
                width="100%"
                zoom={18}
              />
            </div>
          </Col>
        </Row>
      </Fade>
    </Extra>
  );
};

export default FooterWithMap;
