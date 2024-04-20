import { useEffect, useState } from 'react';

const SIZE_MAP = {
  width: 0,
  height: 0,
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(SIZE_MAP);

  useEffect(() => {
    const onResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
