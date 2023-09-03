import PropTypes from 'prop-types';
import { HomeBtn } from './HomeBtn.styled';

export const HomeButton = ({ onHomeBtn }) => {
  return (
    <HomeBtn type="button" onClick={onHomeBtn}>
      Home
    </HomeBtn>
  );
};

HomeButton.propTypes = {
  onHomeBtn: PropTypes.func.isRequired,
};
