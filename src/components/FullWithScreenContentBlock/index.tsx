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
} from "./styles";
import { redirectWhatsApp } from "../../common/utils/ContactsRedirect";

const FullWidthContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  id,
  direction,
}: ContentBlockProps) => {
  console.log(icon, "asasas ");

  return (
    <>
      <HeroSection backgroundImage={`/img/svg/${icon}`}>
        <HeroContent>
          <Row gutter={[32, 32]} style={{ height: "100%" }}>
            <Col
              xs={24}
              lg={12}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Fade direction="left" triggerOnce>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    height: "50vh",
                  }}
                >
                  <TextHighlight>{title}</TextHighlight>
                  <MainHeading>{content}</MainHeading>
                  <ButtonContainer>
                    {button?.map(({ title }) => (
                      <Button color="#FCFBEA" onClick={redirectWhatsApp}>
                        {title}
                      </Button>
                    ))}
                  </ButtonContainer>
                </div>
              </Fade>
            </Col>
          </Row>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default FullWidthContentBlock;
