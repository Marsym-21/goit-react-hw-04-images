import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const Modal = ({ image, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal();
        removeEveListener();
      }
    });
    const removeEveListener = () => {
      window.removeEventListener('keydown', e => console.log(e));
    };
  }, [closeModal]);

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
Modal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
