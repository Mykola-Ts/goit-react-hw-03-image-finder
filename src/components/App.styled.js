import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  position: static;

  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 36px);
  border: none;
  border-radius: 8px;
  padding: 0;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 124px);
  }
`;

export const EndGalleryNotification = styled.p`
  padding: 12px;

  text-align: center;
`;
