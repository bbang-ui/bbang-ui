import { useCallback, useEffect, useState } from 'react';

function useClipBoard(value: string) {
  const [isCopy, setIsCopy] = useState(false);
  const [copyValue, setCopyValue] = useState(value);

  const onCopy = useCallback(() => {
    setIsCopy(true);
    navigator.clipboard.writeText(copyValue);
  }, [copyValue]);

  useEffect(() => {
    setCopyValue(value);
  }, [value]);

  useEffect(() => {
    if (isCopy) {
      window.setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    }
  }, [isCopy]);

  return { isCopy, setIsCopy, copyValue, setCopyValue, onCopy };
}

export default useClipBoard;
