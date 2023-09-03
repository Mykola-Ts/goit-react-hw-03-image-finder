import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const SearchbarHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: var(--primary-color-with-transparency);
`;

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const InputLabel = styled.label`
  position: relative;

  width: 40%;
  margin-right: 20px;
`;

export const QueryInput = styled.input`
  display: block;

  width: 100%;
  padding: 4px 12px 4px 32px;
  border: 2px solid transparent;
  border-radius: 8px;

  overflow: hidden;

  background-color: var(--white-color-with-transparency);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:focus {
    background-color: var(--white-color);
    border-color: var(--primary-color);
    outline-color: var(--white-color);
  }
`;

export const SubmitBtn = styled.button`
  min-width: 100px;
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 8px;

  background-color: var(--white-color-with-transparency);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus) {
    background-color: var(--white-color);
    border-color: var(--primary-color);
    outline-color: var(--white-color);
  }
`;

export const InputIcon = styled(BsSearch)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;
