import { useState } from "react";
import PropTypes from "prop-types";
import makes from "../../shared/makes.json";
import {
  FilterForm,
  Label,
  ModelSelect,
  PriceSelect,
  InputFrom,
  InputTo,
  SelectWrapper,
} from "./CarFilters.styled";
import { SearchBtn } from "../Buttons/SearchButton/SearchButton.styled";

const CarFilters = ({
  selectedMake,
  setSelectedMake,
  selectedPriceRange,
  setSelectedPriceRange,
  minMileage,
  setMinMileage,
  maxMileage,
  setMaxMileage,
}) => {
  const [formData, setFormData] = useState({
    selectedMake,
    selectedPriceRange,
    minMileage,
    maxMileage,
  });

  const minPrice = 0;
  const maxPrice = 500;
  const step = 10;

  const priceOptions = createPriceOptions(minPrice, maxPrice, step);

  function createPriceOptions(min, max, step) {
    const options = [];

    for (let price = min; price <= max; price += step) {
      options.push({
        value: `${price}`,
        label: `To $${price}`,
      });
    }

    return options;
  }

  const makesOptions = makes.map((make) => ({
    value: make,
    label: make,
  }));

  const handleMakeChange = (selectedOption) => {
    setSelectedMake(selectedOption.value);
    setFormData((prevData) => ({
      ...prevData,
      selectedMake: selectedOption.value,
    }));
  };

  const handlePriceChange = (selectedOption) => {
    const price = parseInt(selectedOption.value);
    setSelectedPriceRange({ min: 0, max: price });
    setFormData((prevData) => ({
      ...prevData,
      selectedPriceRange: { min: 0, max: price },
    }));
  };

  const handleMinMileageChange = (e) => {
    setMinMileage(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      minMileage: e.target.value,
    }));
  };

  const handleMaxMileageChange = (e) => {
    setMaxMileage(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      maxMileage: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleFormReset = () => {
    setSelectedMake("");
    setSelectedPriceRange({ min: 0, max: 500 });
    setMinMileage("");
    setMaxMileage("");
    setFormData({
      selectedMake: "",
      selectedPriceRange: { min: 0, max: 500 },
      minMileage: "",
      maxMileage: "",
    });
  };

  return (
    <FilterForm onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <Label htmlFor="model">
        Car brand
        <SelectWrapper>
          <ModelSelect
            options={makesOptions}
            name="model"
            placeholder="Enter the text"
            classNamePrefix="select"
            value={makesOptions.find((option) => option.value === selectedMake)}
            onChange={handleMakeChange}
          />
        </SelectWrapper>
      </Label>
      <Label htmlFor="price">
        Price/1 hour
        <SelectWrapper>
          <PriceSelect
            options={priceOptions}
            name="price"
            placeholder="$"
            classNamePrefix="select"
            value={priceOptions.find(
              (option) => option.value === `${selectedPriceRange.max}`
            )}
            onChange={handlePriceChange}
          />
        </SelectWrapper>
      </Label>
      <Label htmlFor="mileage">
        Car mileage / km
        <div>
          <InputFrom
            id="from"
            name="from"
            placeholder={`From ${minMileage}`}
            value={formData.minMileage}
            onChange={handleMinMileageChange}
          />
          <InputTo
            id="to"
            name="to"
            placeholder={`To ${maxMileage}`}
            value={formData.maxMileage}
            onChange={handleMaxMileageChange}
          />
        </div>
      </Label>
      <SearchBtn type="submit">Search</SearchBtn>
      <SearchBtn type="reset">Reset</SearchBtn>
    </FilterForm>
  );
};

CarFilters.propTypes = {
  selectedMake: PropTypes.string.isRequired,
  setSelectedMake: PropTypes.func.isRequired,
  selectedPriceRange: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  setSelectedPriceRange: PropTypes.func.isRequired,
  minMileage: PropTypes.string.isRequired,
  setMinMileage: PropTypes.func.isRequired,
  maxMileage: PropTypes.string.isRequired,
  setMaxMileage: PropTypes.func.isRequired,
};

export default CarFilters;
