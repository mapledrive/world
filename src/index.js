import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import RotatingCube from './RotatingCube';
import { TopNavigation } from './TopNavigation';
import { BottomNavigation } from './BottomNavigation';
import { LeftSidebar } from './LeftSidebar';

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
  const [boxes, setBoxes] = useState({
    a: { top: 50, left: 100, title: 'configure Store -saucezar' },
    b: { top: 100, left: 100, title: 'store - sun or lamp' },
    c: { top: 150, left: 100, title: 'provider-electricity or light' },
    d: { top: 200, left: 100, title: 'App-mid field heap of functions' },
    e: { top: 250, left: 100, title: 'createSlice-white small house' },
    f: { top: 300, left: 100, title: 'initialState' },
    g: { top: 350, left: 100, title: 'name' },
    h: { top: 400, left: 100, title: 'reducers' },
    j: { top: 450, left: 100, title: 'slice' },
    k: { top: 500, left: 100, title: 'actions - object' },
    l: { top: 550, left: 100, title: 'reducer - object' },
    m: { top: 600, left: 100, title: 'useSelector-shlang' },
    n: { top: 650, left: 100, title: 'useDispatch safe/pistol' },
    o: { top: 700, left: 100, title: 'dispatch' },
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
      {Object.keys(boxes).map(key => {
        const { left, top, title } = boxes[key];
        return (
          <Box key={key} id={key} left={left} top={top}>
            {title}
          </Box>
        );
      })}

      <RotatingCube />
      <LeftSidebar />
      <TopNavigation />
      <BottomNavigation />
    </BasicLayout>
  );
};

const Box = ({ id, left, top, children }) => {
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
    <StyledBox ref={drag} style={{ left, top }}>
      {children}
    </StyledBox>
  );
};

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    * {
      box-sizing: border-box;
    }
    
  `;

const BasicLayout = styled.div`
  background: grey;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: black;
  position: relative;
`;

const StyledBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  border: 1px dashed gray;
  background-color: white;
  height: 50px;
  width: 200px;
  padding: 10px;
  cursor: move;
  user-select: none;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
