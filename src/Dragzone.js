import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';

import {
  BasicLayout,
  StyledBox,
  StyledCreateSlice,
  StyledAppHeap,
} from './style';

const Dragzone = ({ boxes, setBoxes }) => {
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
        const { left, top, title, image, visible } = boxes[key];
        return (
          <Box
            key={key}
            visible={visible}
            id={key}
            left={left}
            top={top}
            image={image}
          >
            {title}
          </Box>
        );
      })}
    </BasicLayout>
  );
};

export default Dragzone;

const Box = ({ id, left, top, image, visible, children }) => {
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
  if (children === 'createSlice') {
    return (
      <StyledCreateSlice ref={drag} image={image} style={{ left, top }}>
        {children}
      </StyledCreateSlice>
    );
  }
  if (children === 'App') {
    return (
      <StyledAppHeap ref={drag} image={image} style={{ left, top }}>
        {children}
      </StyledAppHeap>
    );
  }
  return (
    <StyledBox visible={visible} ref={drag} image={image} style={{ left, top }}>
      {children}
    </StyledBox>
  );
};
