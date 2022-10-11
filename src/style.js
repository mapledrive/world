import styled, { createGlobalStyle } from 'styled-components';
import OpenSans from './fonts/opensans.woff2';
import Roboto from './fonts/roboto.woff2';

export const GlobalStyle = createGlobalStyle`
    body, html {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
    }
  
    * {
      box-sizing: border-box;
    }
  
    @font-face {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      src:  url(${OpenSans}) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  
    @font-face {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(${Roboto}) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    `;

// Left Sidebar Menu
export const OverlayTopMenuSidebar = styled.section`
  transform: translate(11px, -50%);
  top: 50vh;
  left: 0px;
  transition: transform 250ms;
  position: fixed;
`;

export const LeftMenu = styled.div`
  border-radius: 25px;
  background: #393939;
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  position: relative;
  transition: padding 400ms;
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

export const BaseButtonSidebar = styled.button`
  font-size: 14px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9px 0;
  max-height: 100px;
  transition: max-height 150ms, padding 300ms;
  position: relative;
  background: #393939;
  border: none;
  cursor: pointer;
  outline: 0 !important;
  &:hover {
    background: #2c2c2c;
  }
`;

// Top Menu

// Wrapper to only center the menu
export const OverlayTopMenu = styled.section`
  transform: translate(-50%, 11px);
  left: 50vw;
  top: 0px;
  transition: transform 250ms;
  position: fixed;
`;

export const OverlayBottomMenu = styled.section`
  transform: translate(-50%, 11px);
  left: 50vw;
  bottom: 21px;
  transition: transform 250ms;
  position: fixed;
`;

// Grey rounded shape
export const HorizontalMenu = styled.div`
  border-radius: 25px;
  background: #393939;
  display: flex;
  padding: 0px 25px;
  position: relative;
  transition: padding 400ms;
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

// Button with background color size padding height
export const BaseButton = styled.button`
  font-size: 14px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 9px;
  max-height: 60px;
  transition: max-height 150ms, padding 300ms;
  position: relative;
  background: #393939;
  border: none;
  cursor: pointer;
  outline: 0 !important;
  &:hover {
    background: #2c2c2c;
  }
`;

// flex with width and centering horizontally
export const LoadingContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 75px;
`;

// block with text
export const ContentWrapper = styled.div`
  position: relative;
  width: 75px;
  transition: all 300ms;
  margin: 0;
  padding: 33px 0 0 0;
  border: 0;
  font-size: 12px;
  color: ${props => props.mainColor};
  font-family: Roboto, sans-serif;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: 500;
`;

// centering wrapper for icon - kvadratik 28x28
export const BaseIcon = styled.div`
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  height: 28px;
  width: 28px;
  transition: all 300ms;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
`;

// style for svg - raspiraet na ves parent
export const SettingsIcon = styled.svg`
  transition: fill 300ms;
  fill: #fff;
  display: block;
  height: 100%;
  width: 100%;
`;

export const BasicLayout = styled.div`
  background: grey;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const StyledBox = styled.div`
  position: absolute;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  border: 1px dashed gray;
  background-color: transparent;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
  padding: 10px;
  cursor: move;
  user-select: none;
`;

export const StyledClose = styled.div`
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
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

export const ModalWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 500px;
  width: 500px;
  padding: 25px;
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
  h1 {
    margin: 0;
  }
`;

// REDUX INDIVIDUAL BOXES

export const StyledCreateSlice = styled.div`
  position: absolute;
  border: 1px dashed gray;
  background-color: white;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
  padding: 10px;
  cursor: move;
  user-select: none;
`;

// Аpp functions - react app itself
export const StyledAppHeap = styled.div`
  position: absolute;
  border: 1px dashed gray;
  //background-color: white;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  height: 300px;
  width: 300px;
  padding: 10px;
  cursor: move;
  user-select: none;
`;
