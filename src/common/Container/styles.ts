import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: 80vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  overflow: hidden;
  z-index: auto;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }
`;
