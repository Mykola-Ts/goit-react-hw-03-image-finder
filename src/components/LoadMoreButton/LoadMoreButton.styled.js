import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;

  min-width: 160px;
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 8px;
  margin: 24px auto 0;

  color: var(--white-color);
  background-color: var(--primary-color-with-transparency);
  outline: 2px solid transparent;

  transition: background-color var(--transition-duration)
      var(--transition-timing-function),
    border-color var(--transition-duration) var(--transition-timing-function),
    outline-color var(--transition-duration) var(--transition-timing-function);

  &:is(:hover, :focus) {
    background-color: var(--primary-color);
    border-color: var(--white-color);
    outline-color: var(--primary-color);
  }
`;
