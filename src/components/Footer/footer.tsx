"use client";

import type React from "react";
import { NavLink, Extra, LogoContainer, FooterContainer } from "./styles";
import { Col, Image, Row, Typography } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
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

interface SocialLinkProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const Footer = () => {
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
    <>
      <div
        style={{ background: "#fef8c2", height: "40px", width: "100%" }}
      ></div>

      {/* Main footer section */}
      <Extra style={{ background: "#00565B", padding: "2rem 4rem" }}>
        <Row
          gutter={[16, 16]}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Col xs={24} md={12}>
            <NavLink to="/">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "50%",
                  width: "7vw",
                  height: "7vw",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image src="/img/svg/footerlogo1.png" width={"10vw"}></Image>
              </div>
            </NavLink>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "right" }}>
            <div style={{ color: "white" }}>
              <Typography.Title
                level={5}
                style={{ color: "white", marginBottom: "1rem" }}
              >
                Información de contacto
              </Typography.Title>
              <Typography.Paragraph style={{ color: "white", margin: 0 }}>
                Av. Cabildo 3047, timbre F. Ciudad Autónoma
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "white", margin: 0 }}>
                de Buenos Aires - Argentina
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "white", margin: 0 }}>
                Teléfono: +5491127716208 | contacto@oma-ba.com.ar
              </Typography.Paragraph>
              <FooterContainer
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                  marginTop: "1rem",
                }}
              >
                {socialList.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={item.onClick}
                    style={{
                      cursor: "pointer",
                      background: "transparent",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                ))}
              </FooterContainer>
            </div>
          </Col>
        </Row>
      </Extra>

      {/* Bottom copyright bar */}
      <div
        style={{
          background: "#B2D8DD",
          padding: "0.5rem 4rem",
          textAlign: "right",
        }}
      >
        <Typography.Text style={{ fontSize: "0.9rem" }}>
          Creado Teo-Coop
          {/* <a href="/privacy" style={{ color: "inherit" }}>
            Política de privacidad
          </a> */}
        </Typography.Text>
      </div>
    </>
  );
};

export default Footer;
