import { Col, Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { NavLink, Extra, LogoContainer, FooterContainer } from "./styles";
import {
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

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const Footer = () => {
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
    <Extra style={{ background: "#fef8c2", padding: "2%" }}>
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
          md={18}
          style={{
            height: "200%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50vh",
              overflow: "hidden",
            }}
          >
            <GoogleMap
              address="Av. Corrientes, Cdad. Autónoma de Buenos Aires"
              height="100%"
              width="100%"
              zoom={18}
            />
          </div>
        </Col>

        {/* LOGO + REDES */}
        <Col
          xs={24}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fef8c2",
            gap: "2rem",
            padding: "1rem",
          }}
        >
          <NavLink to="/">
            <LogoContainer>
              <SvgIcon
                src="footerlogo1.png"
                aria-label="homepage"
                width="200px"
                height="150px"
              />
            </LogoContainer>
          </NavLink>
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
      </Row>
    </Extra>
  );
};

export default withTranslation()(Footer);
