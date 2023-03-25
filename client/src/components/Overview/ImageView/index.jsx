import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function ImageView({ image }) {
  const store = useSelector((state) => state.overviewReducer);
  const [motto, setMotto] = React.useState('');

  React.useEffect(() => {
    setMotto(store.product.slogan);
  }, [store]);

  return (
    <>
      <h3>"{motto}"</h3>
      <img src={image} alt="product" />
    </>
  );
}

ImageView.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageView;
