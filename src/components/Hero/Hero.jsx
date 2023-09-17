import { RentalButton } from "../../components/Buttons/RentalBtn/RentalBtn";
import { Container } from "../../components/Container/Container";
import { ReactComponent as carIcon } from "../../images/Car.svg";
import {
  HeroTitle,
  HeroWrapper,
  IconWrapper,
  getStyledIcon,
} from "./Hero.styled";

const StyledCarIcon = getStyledIcon(carIcon);

export const Hero = () => {
  return (
    <Container>
      <HeroWrapper>
        <HeroTitle>
          Car Rental in Ukraine with Address Delivery within an Hour
        </HeroTitle>
        <IconWrapper>
          <StyledCarIcon />
        </IconWrapper>
        <RentalButton />
      </HeroWrapper>
    </Container>
  );
};
