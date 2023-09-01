import PropTypes from 'prop-types';
import { Wrapper, CloseBtn, Image, CloseIcon } from './Modal.styled';

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1200',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--modal-backdrop-color)',
  },
};

export const ModalImage = ({ closeModal, openImage: { src, alt } }) => {
  return (
    <Wrapper>
      <CloseBtn type="button" onClick={closeModal}>
        <CloseIcon />
      </CloseBtn>
      <Image src={src} alt={alt} width={1280} />
    </Wrapper>
  );
};

ModalImage.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openImage: PropTypes.object.isRequired,
};
