import PropTypes from 'prop-types';
import {
  SearchbarForm,
  SearchbarHeader,
  QueryInput,
  SubmitBtn,
  InputIcon,
  InputLabel,
} from './Searchbar.styled';
import { HomeButton } from 'components/HomeBtn/HomeBtn';

export const Searchbar = ({ onSearch, onHomeBtn }) => {
  const onSubmit = evt => {
    evt.preventDefault();

    onSearch(evt.target.elements.query.value);

    evt.target.reset();
  };

  return (
    <>
      <SearchbarHeader>
        <HomeButton onHomeBtn={onHomeBtn} />

        <SearchbarForm onSubmit={onSubmit}>
          <InputLabel>
            <QueryInput
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <InputIcon />
          </InputLabel>
          <SubmitBtn type="submit">Search</SubmitBtn>
        </SearchbarForm>
      </SearchbarHeader>
    </>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onHomeBtn: PropTypes.func.isRequired,
};
