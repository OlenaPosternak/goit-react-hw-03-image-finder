import { ImageGalleryItem, ItemImage } from './ImageGalleryItem.module';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';

export class Item extends Component {
  state = {
    isModalOpen: false,
  };

  onOpenModal = () => this.setState({ isModalOpen: true });
  onCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <>
        {this.state.isModalOpen && (
          <Modal
            onClose={this.onCloseModal}
            largeImageURL={this.props.srcLarge}
          />
        )}

        <ImageGalleryItem onClick={this.onOpenModal}>
          <ItemImage src={this.props.src} alt={this.props.tags} />
        </ImageGalleryItem>
      </>
    );
  }
}
