import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarsRequest } from "../../redux/car/carSlice";
import { Container } from "../../components/Container/Container";
import { CarList } from "../../components/CarList/CarList";
import { LoadMoreButton } from "../../components/Buttons/LoadMoreBtn/LoadMoreBtn.styled";
import { selectCars } from "../../redux/car/selectors";
import { CatalogWrapper } from "./Catalog.styled";
import { Loader } from "../../components/Loader/Loader";
import CarFilters from "../../components/CarFilters/CarFilters";

export const Catalog = () => {
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: 0,
    max: 500,
  });
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCarsRequest()).finally(() => setIsLoading(false));
  }, [dispatch]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const startIndex = 0;
  const endIndex = page * perPage;

  const filteredCars = cars.filter((car) => {
    const isMakeMatch = !selectedMake || car.make === selectedMake;

    const rentalPriceValue = parseFloat(car.rentalPrice.replace("$", ""));
    const isPriceInRange =
      !selectedPriceRange ||
      (rentalPriceValue >= selectedPriceRange.min &&
        rentalPriceValue <= selectedPriceRange.max);

    const isMileageInRange =
      (!minMileage || car.mileage >= minMileage) &&
      (!maxMileage || car.mileage <= maxMileage);

    return isMakeMatch && isPriceInRange && isMileageInRange;
  });

  const displayedCars = filteredCars.slice(startIndex, endIndex);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <CatalogWrapper>
          <CarFilters
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            minMileage={minMileage}
            setMinMileage={setMinMileage}
            maxMileage={maxMileage}
            setMaxMileage={setMaxMileage}
          />
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
