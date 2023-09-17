import { Container } from "../Container/Container";
import { HeaderStyled } from "./Header.styled";
import { Navigation } from "./Nav/Nav";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Navigation />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
