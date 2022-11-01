import { useEffect } from 'react';
import React, { useState } from 'react';
import MainScreen from './views/screens/MainScreen';
import MainScreenPortrait from './views/screens/MainScreenPortrait';
import PlaylistModal from './views/components/PlaylistModal';
import PlaylistController from './controller/PlaylistController';

function _debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments)
    }, ms);
  }
}

function App() {
  const [dimension, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const playlistController = new PlaylistController();

  useEffect(() => {
    const debouncedHandleResize = _debounce(function handleRezise() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    })
    window.addEventListener('resize', debouncedHandleResize);

    return (_) => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  });

  return (
    <div className='App' id='App'>
      <PlaylistModal />
      {/* {dimension.height > dimension.width ? <MainScreenPortrait /> : <MainScreen />} */}
      <MainScreenPortrait />
    </div>
  );
}

export default App;
