import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarForm,
  SearchbarHeader,
  QueryInput,
  SubmitBtn,
  InputIcon,
  InputLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  static defaultProps = this.props;

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  onSubmit = evt => {
    evt.preventDefault();

    const { onSearch } = this.props;

    onSearch(evt.target.elements.query.value);

    evt.target.reset();
  };

  render() {
    const { onSubmit } = this;

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
  }
}
