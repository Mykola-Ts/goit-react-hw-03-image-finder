import { Component } from 'react';
import ReactModal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import { searchImagesByQuery, parametersRequest } from './services/api';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Loader } from './Loader/Loader';
import { ModalImage, customStyles } from './Modal/Modal';
import { Modal } from './App.styled';

ReactModal.setAppElement('#root');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    isLastPage: false,
    isOpenModal: false,
    openImage: { src: null, alt: null },
  };

  onSearch = query => {
    this.setState({
      query: `${Date.now()}/${query}`,
      images: [],
      page: 1,
      isLastPage: false,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onOpenModal = (src, alt) => {
    this.setState({ isOpenModal: true, openImage: { src, alt } });

    document.body.style.overflow = 'hidden';
  };

  onCloseModal = () => {
    this.setState({ isOpenModal: false });

    document.body.style.overflow = '';
  };

  async componentDidUpdate(prevProps, prevState) {
    const { state } = this;

    if (prevState.query === state.query && prevState.page === state.page) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const searchQuery = state.query.split('/')[1];
      const data = await searchImagesByQuery(searchQuery, state.page);

      if (!data.hits.length) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );

        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));

      if (state.page === 1) {
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      }

      const totalPage = Math.ceil(data.totalHits / parametersRequest.perPage);

      if (totalPage <= state.page) {
        this.setState({ isLastPage: true });
      }
    } catch (err) {
      toast.error('Oops, something went wrong. Try reloading the page.');
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const {
      state: { images, isLastPage, isLoading, isOpenModal, openImage },
      onSearch,
      onLoadMore,
      onOpenModal,
      onCloseModal,
    } = this;

    return (
      <Layout>
        {!isOpenModal && <Searchbar onSearch={onSearch} />}

        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={onOpenModal} />
        )}

        {images.length > 0 && !isLastPage && !isLoading && (
          <LoadMoreButton onLoadMore={onLoadMore} textButton="Load more" />
        )}

        {isLoading && <Loader text="Loading data, please wait..." />}

        <Modal
          isOpen={isOpenModal}
          onRequestClose={onCloseModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={customStyles}
        >
          <ModalImage closeModal={onCloseModal} openImage={openImage} />
        </Modal>

        <Toaster
          position="top-right"
          containerStyle={{
            top: 90,
          }}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
