import { useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { FavoritesWrapper } from "./Favorites.styled";
import { selectCars, selectFavorite } from "../../redux/car/selectors";
import { CarList } from "../../components/CarList/CarList";

export const Favorites = () => {
  const favorite = useSelector(selectFavorite);
  const cars = useSelector(selectCars);
  const favoriteCars = cars.filter((car) => favorite.includes(car.id));

  return (
    <Container>
      <FavoritesWrapper>
        {favoriteCars.length > 0 ? (
          <CarList cars={favoriteCars} />
        ) : (
          <h2>Unfortunately, we could not find any cars</h2>
        )}
      </FavoritesWrapper>
    </Container>
  );
};
