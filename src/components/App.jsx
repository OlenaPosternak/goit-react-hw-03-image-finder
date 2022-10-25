import { ToastContainer } from 'react-toastify';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { AppStyled } from './App.module';
import { Component } from 'react';

import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmitSerach = searchInfo => {
    this.setState({ searchValue: searchInfo });
  };

  render() {
    return (
      <AppStyled>
        <SearchBar onSearch={this.onSubmitSerach} />
        <ImageGallery galleryName={this.state.searchValue} />
        <ToastContainer autoClose={3000} closeOnClick />
      </AppStyled>
    );
  }
}
