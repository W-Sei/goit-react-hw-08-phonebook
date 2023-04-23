import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['#FF7F50', '#811331', '#F88379', '#C9A9A6', '#FFB6C1', '#770737']}
      />
    </StyledLoader>
  );
};
