import { useEffect, useState } from "react";
import {
  getInitialValue,
  removeFromLocalStorage,
  syncWithLocalStorage,
  updateLocalStorage,
} from "./localStorage.utils";

export function useStorage(key) {
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

  // Fonction pour supprimer la valeur du localStorage
  const remove = () => {
    removeFromLocalStorage(key);
    setValue(null);
  };

  return [value, update, remove];
}
