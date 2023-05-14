import { useState } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export const App = () => {
  const [name, setName] = useState('');
  const [perpage, setPerpage] = useState(12);
  const [image, setImage] = useState('');
  const [page, setPage] = useState(1);
  const [hidden, setHidden] = useState(false);
  const [showModal, setModal] = useState(false);

  const getNameImage = nameData => {
    if (name !== nameData) {
      setName(nameData);
      setPerpage(12);
      setPage(1);
    }
  };

  const renderGallery = () => {
    setHidden(true);
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
        renderGallery={renderGallery}
        perpage={perpage}
        getModalImage={getModalImage}
      />
      {hidden && <Button onClick={loadMore} />}
    </div>
  );
};
