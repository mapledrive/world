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
import tank from './assets/tank.svg';
import app from './assets/app.svg';
import frogger from './assets/frogger.svg';
import useselector from './assets/hose.svg';
import disruptor from './assets/disruptor.svg';
import bullet from './assets/bullet.svg';
import slice from './assets/watermelon.svg';
import sunny from './assets/sunny.svg';
import store from './assets/store.svg';

const App = () => {
  const [builtin, setBuiltin] = useState({});
  const [boxes, setBoxes] = useState({
    a: {
      top: 100,
      left: 800,
      title: 'store',
      image: `${store}`,
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
      title: 'action',
      image: `${bullet}`,
      visible: false,
    },
    d: {
      top: 100,
      left: 800,
      title: '',
      image: `${sunny}`,
      visible: false,
    },
    e: {
      top: 700,
      left: 1100,
      title: 'useSelector value ',
      image: `${useselector}`,
      visible: false,
    },
    f: {
      top: 300,
      left: 300,
      title: 'reducer',
      image: `${frogger}`,
      visible: false,
    },
    g: {
      top: 350,
      left: 400,
      title: 'createAsyncThunk',
      image: `${tank}`,
      visible: false,
    },
    j: {
      top: 200,
      left: 500,
      title: 'dispatch',
      image: `${disruptor}`,
      visible: false,
    },
    k: {
      top: 700,
      left: 1000,
      title: 'reducer - object',
      image: `${frogger}`,
      visible: false,
    },
    z: {
      top: 300,
      left: 700,
      title: 'App',
      image: `${app}`,
      visible: true,
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
    if (e === 'Provider') {
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
    if (e === 'useDispatch') {
      setBoxes(existingValues => ({
        ...existingValues,
        j: { ...existingValues.j, visible: !existingValues.j.visible },
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
