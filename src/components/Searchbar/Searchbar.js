import { useState } from 'react';
import css from '../styles.module.css';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const submitForm = e => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Please enter a valid name !');
      return;
    }

    onSubmit(name.toLowerCase());
    setName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button
          type="submit"
          className={css['SearchForm-button']}
          onClick={submitForm}
        >
          <span className={css['SearchForm-button-label']}>
            <AiOutlineSearch fill="black" size="20px" />
          </span>
        </button>

        <input
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameChange}
          value={name}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
