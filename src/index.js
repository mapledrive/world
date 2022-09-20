import React from 'react';
import ReactDOM from 'react-dom/client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import styled from 'styled-components';

export const Container = () => {
  const [boxes, setBoxes] = useState({
    a: { top: 50, left: 100, title: 'Drag me around' },
    b: { top: 125, left: 100, title: 'Drag me around' },
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
    <StyledContainer ref={drop}>
      {Object.keys(boxes).map(key => {
        const { left, top, title } = boxes[key];
        return (
          <Box key={key} id={key} left={left} top={top}>
            {title}
          </Box>
        );
      })}
    </StyledContainer>
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

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container />
    </DndProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

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

const StyledContainer = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid black;
  position: relative;
`;
