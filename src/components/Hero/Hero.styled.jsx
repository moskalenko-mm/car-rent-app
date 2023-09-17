import styled from "@emotion/styled";

export const getStyledIcon = (component) => styled(component)`
  width: 100%;
  margin-left: auto;
  animation: moveCar 2s ease-in-out forwards;
}

@keyframes moveCar {
  0% {
    transform: translateX(-270%);
  }
  100% {
    transform: translateX(0);
  }
}
`;

export const IconWrapper = styled.div`
  width: 350px;
  position: relative;
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1440px) {
    width: 500px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 30px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);
  margin-bottom: 30px;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 45px;
    font-weight: 600;
    line-height: calc(50 / 45);
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;
