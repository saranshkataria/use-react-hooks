import { useState, useEffect } from 'react';

export default function useLocalStorage(key) {
  const [state, setState] = useState(window.localStorage.getItem(key));
  const onChange = event => {
    if (event.key === key) {
      setState(key);
    }
  };
  useEffect(
    () => {
      window.addEventListener('storage', onChange);
      return () => {
        window.removeEventListener('storage', onChange);
      };
    },
    [key]
  );
  return state;
}
