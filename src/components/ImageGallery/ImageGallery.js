import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import css from '../styles.module.css';

const APIkey = '34491420-8cbbe56c75e64d038cb2665d9';
const BASEURL = 'https://pixabay.com/api/?q=';

const fetchDataName = ({ name, page, perpage = 12 }) => {
  return axios
    .get(
      `${BASEURL}${name}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=${perpage}`
    )
    .then(response => response.data.hits);
};

const ImageGallery = ({ getModalImage, name, renderButton, page }) => {
  // const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (name.trim() === '') {
      return;
    }
    setIsLoading(true);
    fetchDataName({ name, page })
      .then(responseHits => {
        if (page === 1) {
          setData([...responseHits]);
        }
        if (page > 1) {
          setData(s => [...s, ...responseHits]);
        }
      })
      .catch(error => {
        console.log(error);
        // setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name, page]);
  renderButton(data);
  return (
    <ul className={css.ImageGallery} onClick={getModalImage}>
      {isLoading && <Loader />}
      <ImageGalleryItem data={data} />
    </ul>
  );
};

ImageGallery.propTypes = {
  getModalImage: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  renderButton: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default ImageGallery;
