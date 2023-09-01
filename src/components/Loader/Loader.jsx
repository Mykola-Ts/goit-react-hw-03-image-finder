import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import { Wrapper, Text } from './Loader.styled';

export const Loader = ({ text }) => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="1"
        width="72"
        visible={true}
      />
      <Text>{text}</Text>
    </Wrapper>
  );
};

Loader.propTypes = {
  text: PropTypes.string.isRequired,
};
