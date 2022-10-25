import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.module';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressESC);
  }

  pressESC = e => {
    if (e.code === `Escape`) {
      this.props.onClose();
    }
  };

  onBackDropClic = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <Overlay onClick={this.onBackDropClic}>
        <ModalWindow>
          <img src={this.props.largeImageURL} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
