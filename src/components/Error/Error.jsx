import { BsEmojiFrown } from 'react-icons/bs';
import { Text, Wrapper } from './Error.styled';

export const Error = () => {
  return (
    <Wrapper>
      <BsEmojiFrown size={64} />
      <Text>Oops, something went wrong. Try reloading the page.</Text>
    </Wrapper>
  );
};
