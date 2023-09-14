import { ReactComponent as carIcon } from "../../images/Porsche_911_brut.svg";
import { getStyledIcon } from "./Home.styled";

const StyledCarIcon = getStyledIcon(carIcon);

export const Home = () => {
  return (
    <>
      <StyledCarIcon />
    </>
  );
};
