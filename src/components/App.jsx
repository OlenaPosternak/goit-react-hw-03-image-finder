import { AppStyled } from './App.module';
import axios from 'axios';
import { Component } from 'react';
import {REACT_APP_API_KEY} from '../API_KEY'
import { SearchBar } from './SearchBar/SearchBar';

axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends Component {
  async componentDidMount() {
    try {
      const response = await axios.get('/flowers');
      console.log(response.data.hits);

      
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return <AppStyled>
        <SearchBar/>
        </AppStyled>;
  }
}
