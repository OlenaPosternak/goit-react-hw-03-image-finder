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

  search =  (event )=>{
    
    this.setState ({searchValue:  event.currentTarget.value  })
  }
  render() {
    return (
      <>
        <SearchBarHeader>
          <SearchForm>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel class="button-label">
                Search
              </SearchFormButtonLabel>
            </SearchFormButton>

            <Input
            onChange={this.search}
            value={this.state.searchValue}
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBarHeader>
      </>
    );
  }
}
