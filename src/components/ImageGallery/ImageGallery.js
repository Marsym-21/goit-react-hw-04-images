import { Component } from 'react';
import css from '../styles.module.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
class ImageGallery extends Component {
  state = {
    APIkey: '34491420-8cbbe56c75e64d038cb2665d9',
    BASEURL: 'https://pixabay.com/api/?q=',
    error: false,
    data: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { APIkey, BASEURL, page } = this.state;
    const { name, renderGallery, perpage } = this.props;

    if (prevProps.name !== name || prevProps.perpage < perpage) {
      try {
        this.setState({ isLoading: true, page: 1 });
        const response = await axios.get(
          `${BASEURL}${name}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=${perpage}`
        );
        this.setState({ data: response.data.hits });
        renderGallery();
      } catch (error) {
        console.log(error);
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { isLoading, data } = this.state;
    const { getModalImage } = this.props;

    return (
      <ul className={css.ImageGallery} onClick={getModalImage}>
        {isLoading && <Loader />}
        <ImageGalleryItem data={data} />
      </ul>
    );
  }
  onPropTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
}

export default ImageGallery;
