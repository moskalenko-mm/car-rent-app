import { Container } from "../../components/Container/Container";
import { Hero } from "../../components/Hero/Hero";
import { OurServices } from "../../components/OurServices/OurServices";
import { HomeWrapper } from "./Home.styled";

export const Home = () => {
  return (
    <Container>
      <HomeWrapper>
        <Hero />
        <OurServices />
      </HomeWrapper>
    </Container>
  );
};
