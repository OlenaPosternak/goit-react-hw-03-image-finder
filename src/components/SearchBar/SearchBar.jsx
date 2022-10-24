import { Component } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  Input,
} from './SearchBar.module';

import { IoIosSearch } from 'react-icons/io';
import { toast } from 'react-toastify';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  search = event => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  handelSubmit = event => {
    event.preventDefault();

    if (this.state.searchValue.trim() === ``) {
      toast.error('Please choose picture', { theme: 'colored' });
      return;
    }

    this.props.onSearch(this.state.searchValue);
    this.setState({searchValue:''})
    this.reset();
  };

  render() {
    return (
      <>
        <SearchBarHeader>
          <SearchForm onSubmit={this.handelSubmit}>
            <SearchFormButton type="submit">
              <IoIosSearch size="24" />
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
