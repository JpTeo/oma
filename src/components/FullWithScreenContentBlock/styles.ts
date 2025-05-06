import styled from "styled-components";
interface HeroSectionProps {
  backgroundImage: string;
}

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
`;

export const LogoTextLight = styled.span`
  font-weight: normal;
`;
export const HeroSection = styled.section<HeroSectionProps>`
  position: relative;
  width: 100%; /* antes tenías 95%, ahora 100% */
  height: 80vh; /* más común usar 100vh para un hero */
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;
export const StyledContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  //background: red;
  width: 80vw;
  flex-direction: column;
  height: 80vh;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 100vw;
  // height: 100%;
  height: 100%;
  display: flex;
  aling-intems: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    #00000095 0%,
    #00000090 50%,
    transparent 100%
  );
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const TextHighlight = styled.h2`
  color: ;
  font-size: 4rem;
  font-weight: bold;
  font-family: "RedHatDisplay", sans-serif;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MainHeading = styled.h1`
  color: white;
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-family: "RedHatDisplay", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
