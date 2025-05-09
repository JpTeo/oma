"use client";

import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import type { ContentBlockProps } from "../ContentBlock/types";
import { Button } from "../../common/Button";
import {
  TextHighlight,
  HeroSection,
  HeroContent,
  MainHeading,
  ButtonContainer,
  StyledContent,
} from "./styles";
import { redirectWhatsApp } from "../../common/utils/ContactsRedirect";

const FullWidthContentBlock = ({
  icon,
  title,
  button,
  id,
}: ContentBlockProps) => {
  console.log(icon, "asas icon");
  return (
    <>
      <HeroSection $backgroundImage={`/img/jpg/${icon}`}>
        <HeroContent>
          <Row style={{ height: "100%" }}>
            <Col
              xs={24}
              lg={12}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Fade direction="left" triggerOnce>
                <StyledContent>
                  <TextHighlight>{title}</TextHighlight>
                  <MainHeading>
                    Conecta con tu cuerpo y tu mente <br /> en un espacio
                    diseñado para tu bienestar
                  </MainHeading>
                  <ButtonContainer>
                    {button?.map(({ title }) => (
                      <Button onClick={redirectWhatsApp} key={title}>
                        {title}
                      </Button>
                    ))}
                  </ButtonContainer>
                </StyledContent>
              </Fade>
            </Col>
          </Row>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default FullWidthContentBlock;
