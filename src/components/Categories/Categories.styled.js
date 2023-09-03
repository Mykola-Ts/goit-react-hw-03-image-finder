import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  padding: 24px 12px;

  background-color: var(--white-color);
  box-shadow: var(--box-shadow);

  @media screen and (min-width: 1400px) {
    padding: 24px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;

  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  width: 100%;
`;

export const Card = styled.li`
  transform: scale(1, 1);

  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 12px;

  background-color: var(--primary-color-transparent);
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
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 24px * 2) / 3);
  }
`;

export const ImgCard = styled.img`
  flex-grow: 0;

  height: 250px;

  @media screen and (min-width: 768px) {
    height: 160px;
  }

  @media screen and (min-width: 1400px) {
    height: 300px;
  }
`;

export const TitleCard = styled.h3`
  padding: 12px;

  text-align: center;
`;
