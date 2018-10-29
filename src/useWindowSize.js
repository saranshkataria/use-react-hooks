import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const getCurrentWindowSize = () => {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth
    };
  };
  const [state, setState] = useState(getCurrentWindowSize());
  const onChange = () => {
    setState(getCurrentWindowSize());
  };
  useEffect(() => {
    window.addEventListener('resize', onChange);
    return () => {
      window.removeEventListener('resize', onChange);
    };
  }, []);
  return state;
}
