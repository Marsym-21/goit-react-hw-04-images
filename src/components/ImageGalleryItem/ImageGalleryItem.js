import { Component } from 'react';
import css from '../styles.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { data } = this.props;
    return data.map(obj => (
      <li key={obj.id} className={css.ImageGalleryItem}>
        <img
          id={obj.largeImageURL}
          className={css['ImageGalleryItem-image']}
          src={obj.webformatURL}
          alt={obj.tags}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
