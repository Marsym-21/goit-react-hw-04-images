import PropTypes from 'prop-types';
import css from '../styles.module.css';

const ImageGalleryItem = ({ data }) => {
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
};
ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ImageGalleryItem;
