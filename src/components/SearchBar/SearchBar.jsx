import { Component } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  Input,
} from './SearchBar.module';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  search = event => {
    this.setState({ searchValue: event.currentTarget.value });
  };
  render() {
    return (
      <>
        <SearchBarHeader>
          <SearchForm>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <Input
              onChange={this.search}
              value={this.state.searchValue}
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBarHeader>
      </>
    );
  }
}
