import { useEffect, useState } from "react";

export function UseStorage(key) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  });

  const update = (val) => {
    localStorage.setItem(key, JSON.stringify(val));
    setValue(val);
    window.dispatchEvent(new Event("storage-" + key));
  };

  const remove = () => update(null);

  useEffect(() => {
    const sync = () => {
      try {
        setValue(JSON.parse(localStorage.getItem(key)));
      } catch {
        setValue(null);
      }
    };

    window.addEventListener("storage", sync); // entre onglets
    window.addEventListener("storage-" + key, sync); // même onglet

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("storage-" + key, sync);
    };
  }, [key]);

  return [value, update, remove];
}
