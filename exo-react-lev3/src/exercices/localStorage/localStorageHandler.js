// Fonction pour écrire dans le localStorage
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Fonction pour supprimer une clé
export const removeItem = (key) => {
  localStorage.removeItem(key);
};

// Fonction pour lire depuis le localStorage
export const getItem = (key) => {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch {
    return null;
  }
};
