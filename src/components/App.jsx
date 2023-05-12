import { Component } from 'react';
import css from './styles.module.css';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export class App extends Component {
  state = {
    name: '',
    perpage: 12,
    hidden: false,
    image: '',
    showModal: false,
  };

  getNameImage = name => {
    this.setState(prevState => {
      if (prevState.name !== name) {
        return { name, perpage: 12 };
      }
    });
  };

  renderGallery = () => {
    this.setState({ hidden: true });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { perpage: prevState.perpage + 12 };
    });
  };

  getModalImage = e => {
    return this.setState({ image: e.target.id, showModal: true });
  };

  closeModal = () => {
    return this.setState({ showModal: false });
  };

  render() {
    const { name, hidden, perpage, image, showModal } = this.state;
    return (
      <div className={css.App}>
        {showModal && <Modal image={image} closeModal={this.closeModal} />}
        <Searchbar onSubmit={this.getNameImage} />
        <ImageGallery
          name={name}
          renderGallery={this.renderGallery}
          perpage={perpage}
          getModalImage={this.getModalImage}
        />
        {hidden && <Button onClick={this.loadMore} />}
      </div>
    );
  }
  onPropTypes = {
    image: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    renderGallery: PropTypes.func.isRequired,
    perpage: PropTypes.number.isRequired,
    getModalImage: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };
}
