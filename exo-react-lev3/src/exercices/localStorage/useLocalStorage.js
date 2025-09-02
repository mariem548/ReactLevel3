import { useEffect, useState } from "react";
import {
  getInitialValue,
  syncWithLocalStorage,
  updateLocalStorage,
} from "./localStorage.utils";

export function useLocalStorage(key) {
  // Initialisation de l'état à partir du localStorage
  const [value, setValue] = useState(() => getInitialValue(key));

  // Synchronisation avec localStorage entre onglets
  useEffect(() => {
    const cleanupSync = syncWithLocalStorage(key, setValue);

    return cleanupSync; // Nettoyage à la fin de l'usage
  }, [key]);

  // Fonction pour mettre à jour la valeur dans le localStorage
  const update = (val) => {
    updateLocalStorage(key, val);
    setValue(val);
  };

 

  return [value, update];
}
