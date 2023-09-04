import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import {
  Wrapper,
  CloseBtn,
  Image,
  CloseIcon,
  ModalImage,
} from './Modal.styled';

const customStyles = {
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

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, closeModal, openImage: { src, alt } }) => {
  return (
    <ModalImage
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}
    >
      <Wrapper>
        <CloseBtn type="button" onClick={closeModal}>
          <CloseIcon />
        </CloseBtn>
        <Image src={src} alt={alt} width={1280} />
      </Wrapper>
    </ModalImage>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openImage: PropTypes.object.isRequired,
};
