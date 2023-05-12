import { useState } from 'react';
import css from './styles.module.css';
// import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export const App = () => {
  const [name, setName] = useState('');
  const [perpage, setPerpage] = useState(12);
  const [image, setImage] = useState('');
  const [hidden, setHidden] = useState(false);
  const [showModal, setModal] = useState(false);

  const getNameImage = nameData => {
    if (name !== nameData) {
      setName(nameData);
      setPerpage(12);
    }
  };

  const renderGallery = () => {
    setHidden(true);
  };

  const loadMore = () => {
    setPerpage(s => s + 12);
  };

  const getModalImage = e => {
    setImage(e.target.id);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={css.App}>
      {showModal && <Modal image={image} closeModal={closeModal} />}
      <Searchbar onSubmit={getNameImage} />
      <ImageGallery
        name={name}
        renderGallery={renderGallery}
        perpage={perpage}
        getModalImage={getModalImage}
      />
      {hidden && <Button onClick={loadMore} />}
    </div>
  );
};

// App.propTypes = {
//   image: PropTypes.string,
//   closeModal: PropTypes.func,
//   onClick: PropTypes.func,
//   getModalImage: PropTypes.func,
//   name: PropTypes.string,
//   renderGallery: PropTypes.func,
//   perpage: PropTypes.number,
//   onSubmit: PropTypes.func,
// };
