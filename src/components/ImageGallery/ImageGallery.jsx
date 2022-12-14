import PropTypes from 'prop-types';

import { Component } from 'react';
import { Item } from '../ImageGalleryItem/ImageGalleryItem';
import { AllGallery } from './ImageGallery.mudule';
import { Loader } from '../Loader/Loader';
import { ButtonMore } from '../Button/Button';
import axios from 'axios';

export class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    loading: false,
    totalPictures: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.galleryName !== prevProps.galleryName) {
      this.setState({ page: 1 });
    }
    if (this.props.galleryName !== prevProps.galleryName) {
      this.setState({ data: [] });
    }
    if (
      this.props.galleryName !== prevProps.galleryName ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });
      try {
        const responce = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '29526037-011b39b59387f2f37ea2d4748',
            q: this.props.galleryName,
            page: this.state.page,
            image_type: `photo`,
            orientation: `horizontal`,
            per_page: 12,
          },
        });

        console.log(responce);
        this.setState(prevState => ({
          data: [...prevState.data, ...responce.data.hits],
          totalPictures: responce.data.totalHits,
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <AllGallery>
          {this.state.data.map(({ id, webformatURL, tags, largeImageURL }) => (
            <Item
              key={id}
              src={webformatURL}
              alt={tags}
              srcLarge={largeImageURL}
            />
          ))}
        </AllGallery>
        {this.state.loading && <Loader />}

        {this.state.data.length !== 0 &&
          Math.floor(this.state.totalPictures / 12) > this.state.page && (
            <ButtonMore onClic={this.loadMore} />
          )}
      </>
    );
  }
}

ImageGallery.propType = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  page: PropTypes.number,
  loading: PropTypes.bool,
  totalPictures: PropTypes.number,
};
