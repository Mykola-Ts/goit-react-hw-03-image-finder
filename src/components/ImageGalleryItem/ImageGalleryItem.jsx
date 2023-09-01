import PropTypes from 'prop-types';
import { GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <>
      <GalleryImage
        src={webformatURL}
        href={largeImageURL}
        alt={tags}
        width={640}
        height={400}
        loading="lazy"
      ></GalleryImage>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
