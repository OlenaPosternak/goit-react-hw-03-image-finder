import { Component } from 'react';
import { Item } from '../ImageGalleryItem/ImageGalleryItem';
import { AllGallery } from './ImageGallery.mudule';
import { REACT_APP_API_KEY } from '../../API_KEY';
import { Loader } from '../Loader/Loader';

export class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.galleryName !== prevProps.galleryName || this.state.page !== prevState.page) {
        
      this.setState({ loading: true, data: [], page: 1 });

      fetch(
        `https://pixabay.com/api/?q=${this.props.galleryName}&page=${this.state.page}&key=${REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => resp.json())
        .then(gallery => this.setState({ data: gallery.hits }))
        .finally(() => this.setState({ loading: false }));
    }

  }
  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <AllGallery>
          <Item gallery={this.state.data} />
        </AllGallery>
      </>
    );
  }
}
