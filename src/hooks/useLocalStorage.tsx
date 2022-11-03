import { useState } from "react";

export function useLocalStorage(key: string, initialValue: string = "") {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  function setValue(value: string): void {
    try {
      if (typeof window === "undefined") return;

      window.localStorage.setItem(key, value);
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  }

  function deleteValue() {
    try {
      if (typeof window === "undefined") return;

      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.log(error);
    }
  }

  return { value: storedValue, setValue, deleteValue };
}
