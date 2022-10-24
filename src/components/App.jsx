import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonMore } from './Button/Button';

import { AppStyled } from './App.module';
import { Component } from 'react';

import { REACT_APP_API_KEY } from '../API_KEY';

import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

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
        {this.state.searchValue !== '' && <ButtonMore />}
        <ToastContainer autoClose={3000} closeOnClick />
        </AppStyled>
    );
  }
}
