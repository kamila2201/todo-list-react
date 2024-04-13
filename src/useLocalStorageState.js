import {useEffect, useState} from 'react';

export const useLocalStorageState = (keyName, initialValue) => {
  const getInitialState = () => {
    const localStorageState = localStorage.getItem(keyName);
    
    return localStorageState ? JSON.parse(localStorageState) : initialValue;
  }

  const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
      }, [keyName, state]);

      return [state, setState];
}