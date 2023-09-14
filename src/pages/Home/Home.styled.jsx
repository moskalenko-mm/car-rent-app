import styled from "@emotion/styled";

export const getStyledIcon = (component) => styled(component)`
  width: 50%;
  height: 50%;
  @media screen and(min-width: 768px) {
    height: 50%;
  }
`;
