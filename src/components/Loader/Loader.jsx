import React from 'react';
import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="Loader" style={{ margin: '0 auto' }}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['gold', 'yellow', 'orange', 'gold', 'yellow', 'orange']}
      />
    </div>
  );
};