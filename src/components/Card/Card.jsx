import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import {
  CarImg,
  CarImgWrap,
  InfoWrapper,
  Item,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  LearnMoreBtn,
  IconBtn,
  SecondaryCarInfo,
  SecondaryCarAbout,
} from "./Card.styled";
import Modal from "../Modal/Modal";
import { addToFavorite, removeFromFavorite } from "../../redux/car/carSlice";
import { selectFavorite } from "../../redux/car/selectors";

export const Card = ({ car }) => {
  const dispatch = useDispatch();
  const {
    model,
    make,
    id,
    img,
    year,
    address,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = car;

  const favorite = useSelector(selectFavorite);
  const isFavorite = favorite.includes(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const incrementFavorite = () => {
    dispatch(addToFavorite(id));
  };

  const decrementFavorite = () => {
    dispatch(removeFromFavorite(id));
  };

  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];

  const firstFunctionality = functionalities[0]
    .split(" ")
    .slice(0, 1)
    .join(" ");
  const modelTitle = model.split(/[\s-]+/);
  const makeTitle = make.split(/[\s-]+/);

  return (
    <Item>
      <CarImgWrap>
        <CarImg src={img} alt={make} />
        <IconBtn
          onClick={!isFavorite ? incrementFavorite : decrementFavorite}
          type="button"
        >
          {isFavorite ? (
            <HiHeart color={"#3470ff"} size={22} />
          ) : (
            <HiOutlineHeart size={22} />
          )}
        </IconBtn>
      </CarImgWrap>
      <InfoWrapper>
        <MainInfo>
          <CarInfo>
            <CarText>{make}</CarText>
            <ModelBlue>
              {modelTitle[0]}
              <span style={{ color: "black" }}>,</span>
            </ModelBlue>
            <CarText>{year}</CarText>
          </CarInfo>
          <CarText>{rentalPrice}</CarText>
        </MainInfo>
        <SecondaryInfo>
          <SecondaryCarInfo>
            <SecondaryCarAbout>{city}</SecondaryCarAbout>
            <SecondaryCarAbout>{country}</SecondaryCarAbout>
            <SecondaryCarAbout>{rentalCompany}</SecondaryCarAbout>
          </SecondaryCarInfo>
          <SecondaryCarInfo>
            <SecondaryCarAbout>{type}</SecondaryCarAbout>
            <SecondaryCarAbout>{makeTitle[0]}</SecondaryCarAbout>
            <SecondaryCarAbout>{id}</SecondaryCarAbout>
            <SecondaryCarAbout>{firstFunctionality}</SecondaryCarAbout>
          </SecondaryCarInfo>
        </SecondaryInfo>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            key={id}
            model={model}
            make={make}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            img={img}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        )}
      </InfoWrapper>
    </Item>
  );
};

Card.propTypes = {
  car: PropTypes.object.isRequired,
};
