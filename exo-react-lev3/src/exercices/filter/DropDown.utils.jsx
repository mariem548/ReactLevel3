export const staticData = [
  { id: 1, name: "Entertainment" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Science" },
  { id: 4, name: "Education" },
];
export function filterData(data, labelKey, query) {
  return data.filter((item) =>
    item[labelKey].toLowerCase().includes(query.toLowerCase())
  );
}
/**
 * Met en surbrillance les parties d'un texte qui correspondent à une requête.
 */
export function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, "i");
  return text
    .split(regex)
    .map((part, i) => (regex.test(part) ? <b key={i}>{part}</b> : part));
}
