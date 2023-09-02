import PropTypes from 'prop-types';
import {
  SearchbarForm,
  SearchbarHeader,
  QueryInput,
  SubmitBtn,
  InputIcon,
  InputLabel,
} from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const onSubmit = evt => {
    evt.preventDefault();

    onSearch(evt.target.elements.query.value);

    evt.target.reset();
  };

  return (
    <>
      <SearchbarHeader>
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
};
