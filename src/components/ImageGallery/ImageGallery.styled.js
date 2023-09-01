import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  width: 100%;
  border-radius: 8px;
  padding: 24px 12px;

  background-color: var(--white-color);
  box-shadow: var(--box-shadow);

  @media screen and (min-width: 1400px) {
    padding: 24px;
  }
`;

export const GalleryItem = styled.li`
  transform: scale(1, 1);

  display: block;

  width: 100%;
  height: 200px;
  border-radius: 12px;

  box-shadow: var(--box-shadow);
  overflow: hidden;
  cursor: pointer;

  transition: transform var(--transition-duration)
    var(--transition-timing-function);

  &:hover {
    transform: scale(1.05, 1.05);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px * 2) / 3);
    height: 150px;
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 24px * 2) / 3);
    height: 250px;
  }
`;
