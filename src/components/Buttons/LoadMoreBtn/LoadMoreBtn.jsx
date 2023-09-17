import { LoadMoreButton } from "./LoadMoreBtn.styled";
import PropTypes from "prop-types";

export const LoadMoreBtn = ({ onClick }) => (
  <LoadMoreButton type="button" onClick={onClick}>
    Load more
  </LoadMoreButton>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
};
