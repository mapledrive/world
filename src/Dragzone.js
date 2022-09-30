import styled from 'styled-components';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import img from './assets/caezar.jpg';
import frog from './assets/frog.jpg';
import provider from './assets/provider.jpg';
import app from './assets/app.png';
import createslice from './assets/createslice.jpg';
import name from './assets/name.jpg';
import initialstate from './assets/initialstate.jpg';
import useselector from './assets/useselector.jpg';
import safe from './assets/safe.jpg';
import disruptor from './assets/disruptor.jpg';
import bullet from './assets/bullet.jpg';
import slice from './assets/slice.jpg';
import sun from './assets/sun.jpg';
import { BasicLayout, StyledBox } from './style';

const Dragzone = () => {
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
      {Object.keys(boxes).map(key => {
        const { left, top, title, image } = boxes[key];
        return (
          <Box key={key} id={key} left={left} top={top} image={image}>
            {title}
          </Box>
        );
      })}
    </BasicLayout>
  );
};

export default Dragzone;

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
