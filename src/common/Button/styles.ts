import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#BFB3A1"};
  color: ${(p) => (p.color ? "#2E186A" : "#4E6E7E")};
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid #bfb3a1;
  border-radius: 4px;
  padding: 13px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  font-size: 1rem;
  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(147, 115, 77);
    background-color: rgb(147, 115, 77);
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 13px 1rem;
  }
`;
