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
  font-weight: bold;
`;

export const LogoTextLight = styled.span`
  font-weight: normal;
`;
export const HeroSection = styled.section<HeroSectionProps>`
  position: relative;
  width: 95%; /* antes tenías 95%, ahora 100% */
  height: 80vh; /* más común usar 100vh para un hero */
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: 110%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border-radius: 40px;
`;

export const HeroContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 0 5rem;
  background: linear-gradient(to right, #00000080 0%, rgba(51, 51, 51, 0) 100%);
`;

export const TextHighlight = styled.h2`
  color: ;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-decoration: underline;
`;

export const MainHeading = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
