import React from 'react';
import { Blocks } from 'react-loader-spinner';
const Loader = props => {
  return (
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        gridColumn: 2,
        margin: '0 auto',
      }}
      wrapperClass="blocks-wrapper"
    />
  );
};

export default Loader;
