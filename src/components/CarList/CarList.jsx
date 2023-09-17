import { Card } from "../Card/Card";
import { List } from "./CarList.styled";
import PropTypes from "prop-types";

export const CarList = ({ cars }) => {
  return (
    <List>
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </List>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};
