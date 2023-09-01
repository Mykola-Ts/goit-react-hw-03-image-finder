import PropTypes from 'prop-types';
import { LoadMoreBtn } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onLoadMore, textButton }) => {
  return (
    <>
      <LoadMoreBtn type="button" onClick={onLoadMore}>
        {textButton}
      </LoadMoreBtn>
    </>
  );
};

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
};
