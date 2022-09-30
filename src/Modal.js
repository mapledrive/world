import React from 'react';
import RotatingCube from './RotatingCube';
import { StyledClose, ModalWrapper } from './style';
// https://codepen.io/alligatorio/pen/aYzMKL

export const Modal = ({ builtin, hideModal }) => {
  if (Object.keys(builtin).length === 0) return null;

  return (
    <ModalWrapper>
      <RotatingCube builtin={builtin} />
      <StyledClose onClick={hideModal}>
        <CloseSvg />
      </StyledClose>
    </ModalWrapper>
  );
};

const CloseSvg = () => (
  <svg viewBox='0 0 24 24' fill='rgb(158, 158, 158)'>
    <path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
  </svg>
);
