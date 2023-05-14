import { useState } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export const App = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [page, setPage] = useState(1);
  const [hidden, setHidden] = useState(false);
  const [showModal, setModal] = useState(false);

  const getNameImage = nameData => {
    if (name !== nameData) {
      setName(nameData);
      setPage(1);
    }
  };

  const renderButton = data => {
    if (data.length > 0) {
      setHidden(true);
    }
    console.log(data.length);
  };

  const loadMore = () => {
    setPage(s => s + 1);
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
        page={page}
        name={name}
        renderButton={renderButton}
        getModalImage={getModalImage}
      />
      {hidden && <Button onClick={loadMore} />}
    </div>
  );
};
