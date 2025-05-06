import { Row } from "antd";
import styled from "styled-components";
interface StyledRowProps {
  direction: "left" | "right";
}
export const ContentSection = styled("section")`
  position: relative;
  padding-bottom: 8rem;

  @media only screen and (max-width: 1024px) {
    padding-bottom: 10rem;
  }
`;
export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledRow = styled(Row).withConfig({
  shouldForwardProp: (prop) => prop !== "direction",
})<StyledRowProps>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "RedHatDisplay", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  button:last-child {
    margin-left: 20px;
    @media only screen and (max-width: 768px) {
      margin-left: 0px;
    }
  }
`;
