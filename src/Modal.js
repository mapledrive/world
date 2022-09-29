import React from 'react';
import styled from 'styled-components';
import RotatingCube from './RotatingCube';
// https://codepen.io/alligatorio/pen/aYzMKL

export const Modal = ({ builtin, hideModal }) => {
  if (Object.keys(builtin).length === 0) return null;

  return (
    <StyledModalMain>
      {builtin.name}
      <RotatingCube builtin={builtin} />
      <StyledClose onClick={hideModal}>
        <SvgComponent />
      </StyledClose>
    </StyledModalMain>
  );
};

const SvgComponent = () => (
  <svg viewBox='0 0 24 24' fill='rgb(158, 158, 158)'>
    <path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
  </svg>
);

const StyledClose = styled.div`
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  border: 0px none;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: absolute;
  right: 8px;
  top: 8px;
  color: rgb(158, 158, 158);
  width: 40px;
  height: 40px;
  &:hover {
    background: #f5f5f5;
  }
`;

const StyledModalMain = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 500px;
  width: 500px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
`;
