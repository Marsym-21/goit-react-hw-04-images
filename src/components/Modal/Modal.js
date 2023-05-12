import { useEffect } from 'react';
import css from '../styles.module.css';

const Modal = ({ image, closeModal }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
      removeEveListener();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const removeEveListener = () => {
    window.removeEventListener('keydown', handleKeyDown);
  };

  const closeModalOnClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={closeModalOnClick}>
      <div className={css.Modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;
