import { useState, useEffect, useCallback } from 'react';

export function useSessionStorage(key, initialValue) {
  return useStorage(key, initialValue, window.sessionStorage);
}

export function useLocalStorage(key, initialValue) {
  return useStorage(key, initialValue, window.localStorage);
}

function useStorage(key, initialValue, storageObject) {
  const [value, setValue] = useState(() => {
    const savedValue = storageObject.getItem(key);
    if (savedValue) return JSON.parse(savedValue);

    // We don't have data already saved.. so.. we initialize it normally.
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  // 🔔🔔🔔 So, this here is the core of it.. only that we need
  // Some logic when we initiate the state.. so.. if there is already saved data.. we initialize the state with it..
  // And of course the usual condition to check if inital value is a function to run not directly a value
  useEffect(() => {
    if (!value) storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
    // We are just looking for value change here in our logic
  }, [value, key, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined); // the useEffect will remove it from teh storage
  }, []);

  return [value, setValue, remove];
}
