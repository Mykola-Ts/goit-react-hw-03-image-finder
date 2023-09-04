import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import {
  searchImagesByQuery,
  parametersRequest,
  fetchImagesByCategory,
} from './services/api';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { EndGalleryNotification } from './App.styled';
import {
  toastContainerStyle,
  toastOptions,
  toastWarningOptions,
} from './helpers/helpers';
import { Categories } from './Categories/Categories';
import { Error } from './Error/Error';
import { ToTopButton } from './ToTopBtn/ToTopBtn';

export class App extends Component {
  state = {
    query: '',
    randomID: '',
    images: [],
    categories: [],
    page: 1,
    isLoading: false,
    isLastPage: false,
    isOpenModal: false,
    openImage: { src: null, alt: null },
    isError: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const data = await fetchImagesByCategory();

      this.setState({ categories: data });
    } catch (err) {
      toast.remove();
      toast.error('Oops, something went wrong. Try reloading the page.');

      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, randomID } = this.state;

    if (
      (prevState.query === query &&
        prevState.page === page &&
        prevState.randomID === randomID) ||
      !query
    ) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const data = await searchImagesByQuery(query, page);

      if (!data.hits.length) {
        toast.remove();
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );

        this.setState({ query: '' });

        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isLastPage:
          page >= Math.ceil(data.totalHits / parametersRequest.perPage),
      }));

      if (page === 1) {
        toast.remove();
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      }
    } catch (err) {
      toast.remove();
      toast.error('Oops, something went wrong. Try reloading the page.');
    } finally {
      this.setState({ isLoading: false });
    }
  }

  onSearch = query => {
    if (!query.length) {
      toast.remove();
      toast('Input field is empty. Enter search query!', toastWarningOptions);

      return;
    }

    this.setState({
      query,
      randomID: nanoid(),
      images: [],
      page: 1,
      isLastPage: false,
    });
  };

  onSelectCategory = category => {
    this.setState({ query: category, randomID: nanoid(), images: [], page: 1 });
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

  onHomeBtn = () => {
    this.setState({
      query: '',
      randomID: '',
      images: [],
      page: 1,
      isLastPage: false,
      openImage: { src: null, alt: null },
      isError: false,
    });
  };

  onBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const {
      state: {
        query,
        images,
        isLastPage,
        isLoading,
        isOpenModal,
        openImage,
        categories,
        isError,
      },
      onSearch,
      onLoadMore,
      onOpenModal,
      onCloseModal,
      onSelectCategory,
      onHomeBtn,
      onBackToTop,
    } = this;

    return (
      <Layout>
        {!isOpenModal && (
          <Searchbar onSearch={onSearch} onHomeBtn={onHomeBtn} />
        )}

        {!query && !isError && !isLoading && (
          <Categories
            categories={categories}
            onSelectCategory={onSelectCategory}
          />
        )}

        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={onOpenModal} />
        )}

        {isLastPage && (
          <EndGalleryNotification>
            We're sorry, but you've reached the end of search results.
          </EndGalleryNotification>
        )}

        {images.length > 0 && !isLastPage && !isLoading && (
          <LoadMoreButton onLoadMore={onLoadMore} textButton="Load more" />
        )}

        {isLoading && <Loader text="Loading data, please wait..." />}

        <Modal
          isOpen={isOpenModal}
          closeModal={onCloseModal}
          openImage={openImage}
        />

        {query && <ToTopButton onBackToTop={onBackToTop} />}

        {isError && <Error />}

        <Toaster
          position="top-right"
          containerStyle={toastContainerStyle}
          toastOptions={toastOptions}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
