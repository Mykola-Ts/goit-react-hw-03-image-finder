import PropTypes from 'prop-types';
import { BsChevronUp } from 'react-icons/bs';
import { ButtonTop } from './ToTopBtn.styled';

export const ToTopButton = ({ onBackToTop }) => {
  return (
    <ButtonTop type="button" onClick={onBackToTop}>
      <BsChevronUp size={72} />
    </ButtonTop>
  );
};

ToTopButton.propTypes = {
  onBackToTop: PropTypes.func.isRequired,
};
