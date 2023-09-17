import { Nav, StyledLink } from "./Nav.styled";

export const Navigation = () => {
  return (
    <Nav>
      <StyledLink сlassname={"menu - item"} to="/">
        Home
      </StyledLink>
      <StyledLink сlassname={"menu - item"} to="/catalog">
        Catalog
      </StyledLink>
      <StyledLink сlassname={"menu - item"} to="/favorites">
        Favorites
      </StyledLink>
    </Nav>
  );
};
