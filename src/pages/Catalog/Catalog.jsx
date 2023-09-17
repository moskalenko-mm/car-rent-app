import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsRequest } from "../../redux/car/carSlice";
import { Container } from "../../components/Container/Container";
import { CarList } from "../../components/CarList/CarList";
import { LoadMoreButton } from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn.styled";
import { selectCars } from "../../redux/car/selectors";
import { CatalogWrapper } from "./Catalog.styled";
import { Loader } from "../../components/Loader/Loader";

export const Catalog = () => {
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCarsRequest()).finally(() => setIsLoading(false));
  }, [dispatch]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const startIndex = 0;
  const endIndex = page * perPage;

  const displayedCars = cars.slice(startIndex, endIndex);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <CatalogWrapper>
          {displayedCars.length > 0 ? (
            <CarList cars={displayedCars} />
          ) : (
            <h2>Unfortunately, we could not find any cars</h2>
          )}

          {cars.length > displayedCars.length && (
            <LoadMoreButton type="button" onClick={loadMore}>
              Load more
            </LoadMoreButton>
          )}
        </CatalogWrapper>
      )}
    </Container>
  );
};
