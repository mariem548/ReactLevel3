export const getInitialValue = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

// Fonction pour mettre à jour le localStorage et l'état
export const updateLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("storage-" + key));
};

// Fonction pour gérer la synchronisation entre les onglets et composants
export const syncWithLocalStorage = (key, setValue) => {
  const sync = () => {
    try {
      setValue(JSON.parse(localStorage.getItem(key)));
    } catch {
      setValue(null);
    }
  };

  window.addEventListener("storage", sync); // pour la synchronisation entre onglets
  window.addEventListener("storage-" + key, sync); // pour la synchronisation dans le même onglet

  return () => {
    window.removeEventListener("storage", sync);
    window.removeEventListener("storage-" + key, sync);
  };
};

