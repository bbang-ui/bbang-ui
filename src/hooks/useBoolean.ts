import { useCallback, useState } from 'react';

function useBoolean(defaultValue = false) {
  const [isBoolean, setIsBoolean] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setIsBoolean(true);
  }, []);

  const setFalse = useCallback(() => {
    setIsBoolean(false);
  }, []);

  const toggle = useCallback(() => {
    setIsBoolean((prev) => !prev);
  }, []);

  return { isBoolean, setIsBoolean, setTrue, setFalse, toggle };
}

export default useBoolean;
