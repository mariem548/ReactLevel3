export const categoryList = [
  { id: 1, name: "Entertainment" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Science" },
  { id: 4, name: "Education" },
];

// Filtre une liste d'objets selon une clé et une recherche
export function filterListByLabel(list, labelKey, searchValue) {
  return list.filter((element) =>
    element[labelKey].toLowerCase().includes(searchValue.toLowerCase())
  );
}

// Met en gras la partie du texte qui correspond à la recherche
export function highlightSearchMatch(text, searchValue) {
  if (!searchValue) return text;
  const regex = new RegExp(`(${searchValue})`, "i");
  return text
    .split(regex)
    .map((part, i) => (regex.test(part) ? <b key={i}>{part}</b> : part));
}
