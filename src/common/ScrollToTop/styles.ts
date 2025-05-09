import styled from "styled-components";
interface ScrollToTopProps {
  $show: boolean;
}

export const ScrollUpContainer = styled("div")<ScrollToTopProps>`
  padding: 10px;
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  opacity: ${(props) => (props.$show ? "1" : "0")};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;
