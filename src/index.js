import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import { TopNavigation } from './TopNavigation';
import { BottomNavigation } from './BottomNavigation';
import { LeftSidebar } from './LeftSidebar';
import { Modal } from './Modal';
import OpenSans from './fonts/opensans.woff2';
import Roboto from './fonts/roboto.woff2';
import img from './caezar.jpg';
//  import lamp from './lamp.svg';
import frog from './frog.jpg';
import provider from './provider.jpg';
import app from './app.png';
import createslice from './createslice.jpg';
import name from './name.jpg';
import initialstate from './initialstate.jpg';
import useselector from './useselector.jpg';
import safe from './safe.jpg';
import disruptor from './disruptor.jpg';
import bullet from './bullet.jpg';
import slice from './slice.jpg';
import sun from './sun.jpg';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <DndProvider backend={HTML5Backend}>
        <AppLayout />
      </DndProvider>
    </>
  );
};

export default App;

const AppLayout = () => {
  const [builtin, setBuiltin] = useState({});

  const showModal = obj => {
    if (Object.keys(obj).length === 0 || builtin.name === obj.name) {
      hideModal();
    } else {
      setBuiltin(obj);
    }
  };

  const hideModal = () => {
    setBuiltin({});
  };

  const [boxes, setBoxes] = useState({
    a: {
      top: 50,
      left: 100,
      title: 'configure Store',
      image: `${img}`,
    },
    b: { top: 100, left: 100, title: 'store', image: `${sun}` },
    c: {
      top: 150,
      left: 100,
      title: 'provider',
      image: `${provider}`,
    },
    d: {
      top: 200,
      left: 100,
      title: 'App-mid field heap of functions',
      image: `${app}`,
    },
    e: {
      top: 250,
      left: 100,
      title: 'createSlice-house',
      image: `${createslice}`,
    },
    f: { top: 300, left: 100, title: 'initialState', image: `${initialstate}` },
    g: { top: 350, left: 100, title: 'name', image: `${name}` },
    h: { top: 400, left: 100, title: 'reducers', image: `${frog}` },
    j: { top: 450, left: 100, title: 'slice', image: `${slice}` },
    k: { top: 500, left: 100, title: 'actions - object', image: `${bullet}` },
    l: { top: 550, left: 100, title: 'reducer - object', image: `${frog}` },
    m: {
      top: 600,
      left: 100,
      title: 'useSelector-shlang',
      image: `${useselector}`,
    },
    n: {
      top: 650,
      left: 100,
      title: 'useDispatch',
      image: `${safe}`,
    },
    o: { top: 700, left: 100, title: 'dispatch', image: `${disruptor}` },
  });

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );
  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );
  return (
    <BasicLayout ref={drop}>
      <Modal showModal={showModal} hideModal={hideModal} builtin={builtin} />
      {Object.keys(boxes).map(key => {
        const { left, top, title, image } = boxes[key];
        return (
          <Box key={key} id={key} left={left} top={top} image={image}>
            {title}
          </Box>
        );
      })}
      <LeftSidebar sidebarData={sidebarData} showModal={showModal} />
      <TopNavigation headerData={headerData} showModal={showModal} />
      <BottomNavigation footerData={footerData} showModal={showModal} />
    </BasicLayout>
  );
};

const Box = ({ id, left, top, image, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: { id, left, top },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  if (isDragging) {
    return <div ref={drag} />;
  }
  return (
    <StyledBox ref={drag} image={image} style={{ left, top }}>
      {children}
    </StyledBox>
  );
};

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

  /* latin roboto */
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${Roboto}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  `;

const BasicLayout = styled.div`
  background: grey;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const StyledBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  border: 1px dashed gray;
  background-color: white;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  height: 150px;
  width: 215px;
  padding: 10px;
  cursor: move;
  user-select: none;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const sidebarData = [
  { id: 1, name: 'Error', mainColor: 'red' },
  { id: 2, name: 'RegExp', mainColor: 'pink' },
  { id: 3, name: 'Date', mainColor: 'blue' },
  { id: 4, name: 'Function', mainColor: 'green' },
  { id: 5, name: 'Array', mainColor: '#FFBE32' },
  { id: 6, name: 'Object', mainColor: 'white' },
  { id: 7, name: 'Boolean', mainColor: '#ed9121' },
  { id: 8, name: 'String', mainColor: 'grey' },
  { id: 9, name: 'Number', mainColor: 'black' },
];

const headerData = [
  { id: 1, name: 'Promise', mainColor: 'MediumPurple' },
  { id: 2, name: 'Symbol', mainColor: ' #f9c34b' },
  { id: 3, name: 'Generator', mainColor: '#ffe5b4' },
  { id: 4, name: 'GeneratorF', mainColor: '#35f210' },
  { id: 5, name: 'Map', mainColor: '#10c1da' },
  { id: 6, name: 'Set', mainColor: 'black' },
  { id: 7, name: 'WeakMap', mainColor: 'white' },
  { id: 8, name: 'WeakSet', mainColor: '#8dd8b9' },
  { id: 9, name: 'TypedArray', mainColor: '#ffff99' },
  { id: 10, name: 'Reflect', mainColor: '#ffa500' },
  { id: 11, name: 'Proxy', mainColor: 'LightPink' },
  { id: 12, name: 'ArrayBuffer', mainColor: 'whitesmoke' },
  { id: 13, name: 'DataView', mainColor: 'red' },
];

const footerData = [
  { id: 1, name: 'SharedArrayBuffer', mainColor: 'green' },
  { id: 2, name: 'Atomics', mainColor: 'olive' },
  { id: 3, name: 'BigInt', mainColor: 'whitesmoke' },
  { id: 4, name: 'Math', mainColor: 'whitesmoke' },
  { id: 5, name: 'Intl', mainColor: 'whitesmoke' },
  { id: 6, name: 'JSON', mainColor: 'whitesmoke' },
  { id: 7, name: 'AsyGenFunc', mainColor: 'red' },
  { id: 8, name: 'AsyncFunc', mainColor: '#ffbf00' },
];
