import PropTypes from "prop-types";
import { RentalBtn } from "./RentalBtn.styled";

export const RentalButton = ({ width }) => {
  return (
    <RentalBtn width={width} href="tel:+380730000000">
      Rental car
    </RentalBtn>
  );
};

RentalButton.propTypes = {
  width: PropTypes.string,
};
