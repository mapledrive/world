import { useState } from 'react';
import Dragzone from './Dragzone';
import { TopNavigation } from './TopNavigation';
import { BottomNavigation } from './BottomNavigation';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';
import { Modal } from './Modal';
import {
  sidebarData,
  rightSidebarData,
  headerData,
  footerData,
} from './constants/navigation';
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
import glass from './assets/glass.svg';
import frogcell from './assets/createReducer.jpg';
import sunny from './assets/sunny.svg';
import update from 'immutability-helper';

const App = () => {
  const [builtin, setBuiltin] = useState({});

  const [boxes, setBoxes] = useState({
    a: {
      top: 100,
      left: 700,
      title: 'store',
      image: `${sunny}`,
      visible: false,
    },
    b: {
      top: 600,
      left: 800,
      title: 'slice',
      image: `${slice}`,
      visible: false,
    },
    c: {
      top: 700,
      left: 900,
      title: 'actions',
      image: `${bullet}`,
      visible: false,
    },
    d: {
      top: 200,
      left: 700,
      title: 'provider',
      image: `${provider}`,
      visible: false,
    },
    e: {
      top: 700,
      left: 1100,
      title: 'useSelector',
      image: `${useselector}`,
      visible: false,
    },
    f: {
      top: 500,
      left: 400,
      title: 'createReducer',
      image: `${frogcell}`,
      visible: false,
    },
    g: {
      top: 700,
      left: 700,
      title: 'createAsyncThunk',
      image: `${frog}`,
      visible: false,
    },
    h: {
      top: 700,
      left: 800,
      title: 'slice',
      image: `${slice}`,
      visible: false,
    },
    j: {
      top: 700,
      left: 900,
      title: 'actions - object',
      image: `${bullet}`,
      visible: false,
    },
    k: {
      top: 700,
      left: 1000,
      title: 'reducer - object',
      image: `${frog}`,
      visible: false,
    },

    l: {
      top: 700,
      left: 1100,
      title: 'useSelector',
      image: `${useselector}`,
      visible: false,
    },
    m: {
      top: 700,
      left: 1200,
      title: 'useDispatch',
      image: `${safe}`,
      visible: false,
    },
    n: {
      top: 700,
      left: 1300,
      title: 'dispatch',
      image: `${disruptor}`,
      visible: false,
    },
    o: {
      top: 700,
      left: 300,
      title: 'createAction',
      image: `${glass}`,
      visible: false,
    },
    p: {
      top: 700,
      left: 400,
      title: 'createReducer',
      image: `${frogcell}`,
      visible: false,
    },
  });

  const showModal = obj => {
    if (Object.keys(obj).length === 0 || builtin.name === obj.name) {
      hideModal();
    } else {
      setBuiltin(obj);
    }
  };

  const handleGeneric = e => {
    if (e === 'configureStore') {
      setBoxes(existingValues => ({
        ...existingValues,
        a: { ...existingValues.a, visible: !existingValues.a.visible },
      }));
    }
    if (e === 'createSlice') {
      setBoxes(existingValues => ({
        ...existingValues,
        b: { ...existingValues.b, visible: !existingValues.b.visible },
      }));
    }
    if (e === 'createAction') {
      setBoxes(existingValues => ({
        ...existingValues,
        c: { ...existingValues.c, visible: !existingValues.c.visible },
      }));
    }
    if (e === 'provider') {
      setBoxes(existingValues => ({
        ...existingValues,
        d: { ...existingValues.d, visible: !existingValues.d.visible },
      }));
    }
    if (e === 'useSelector') {
      setBoxes(existingValues => ({
        ...existingValues,
        e: { ...existingValues.e, visible: !existingValues.e.visible },
      }));
    }
    if (e === 'createReducer') {
      setBoxes(existingValues => ({
        ...existingValues,
        f: { ...existingValues.f, visible: !existingValues.f.visible },
      }));
    }
    if (e === 'createAsyncThunk') {
      setBoxes(existingValues => ({
        ...existingValues,
        g: { ...existingValues.g, visible: !existingValues.g.visible },
      }));
    }
  };

  const hideModal = () => setBuiltin({});

  return (
    <>
      <Dragzone setBoxes={setBoxes} boxes={boxes} />
      <Modal showModal={showModal} hideModal={hideModal} builtin={builtin} />
      <LeftSidebar sidebarData={sidebarData} showModal={showModal} />
      <RightSidebar
        rightSidebarData={rightSidebarData}
        handleGeneric={handleGeneric}
      />
      <TopNavigation headerData={headerData} showModal={showModal} />
      <BottomNavigation footerData={footerData} showModal={showModal} />
    </>
  );
};

export default App;
