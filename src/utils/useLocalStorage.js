import { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || []);

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue !== value) {
      setValue(storedValue);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
