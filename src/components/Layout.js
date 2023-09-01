import styled from 'styled-components';

export const Layout = styled.div`
  max-width: 375px;
  padding: 94px 15px 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1280px;
  }
`;
