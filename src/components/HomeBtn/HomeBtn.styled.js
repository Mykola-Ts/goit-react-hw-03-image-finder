import styled from 'styled-components';

export const HomeBtn = styled.button`
  padding: 20px 24px;
  border: none;
  border-left: 2px solid var(--white-color);
  border-right: 2px solid var(--white-color);

  color: var(--white-color);
  background-color: transparent;

  transition: background-color var(--transition-duration)
    var(--transition-timing-function);

  &:is(:hover, :focus) {
    background-color: var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    padding: 20px 16px;
  }
`;
