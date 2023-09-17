import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid black;
  background-color: transparent;

  transition: background-color 0.4s ease;

  &.active {
    background-color: #a27b5c;
  }
  &:hover {
    color: #a5c9ca;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;
