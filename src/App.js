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

const App = () => {
  const [builtin, setBuiltin] = useState({});

  const showModal = obj => {
    if (Object.keys(obj).length === 0 || builtin.name === obj.name) {
      hideModal();
    } else {
      setBuiltin(obj);
    }
  };

  const hideModal = () => setBuiltin({});

  return (
    <>
      <Dragzone />
      <Modal showModal={showModal} hideModal={hideModal} builtin={builtin} />
      <LeftSidebar sidebarData={sidebarData} showModal={showModal} />
      <RightSidebar sidebarData={rightSidebarData} showModal={showModal} />
      <TopNavigation headerData={headerData} showModal={showModal} />
      <BottomNavigation footerData={footerData} showModal={showModal} />
    </>
  );
};

export default App;
