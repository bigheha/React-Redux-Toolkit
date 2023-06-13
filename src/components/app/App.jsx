import styles from './layout.module.css';

import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

import useWindowWidth from '../../customHooks/useWindowWidth';
import { useSelector, useDispatch } from 'react-redux';
import {open, close} from '../../features/sidebar/sidebarSlice';
import { useEffect } from 'react';


function App() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const width = useWindowWidth();
  const dispatch = useDispatch();

  console.log(isOpen);

  useEffect(() => {
    if (width > 600) {
      dispatch(open());
    } else {
        dispatch(close());
      }
  }, [width])



  return (
    <>
      <div className={styles.grid}>
        <Header isOpen={isOpen}/>
        {isOpen && <Sidebar/>}
      </div>
    </>
  )
}

export default App
