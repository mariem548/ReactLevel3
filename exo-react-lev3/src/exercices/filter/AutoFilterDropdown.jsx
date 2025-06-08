import { useState } from "react";
import PropTypes from "prop-types";
import { filterData, highlightMatch } from "./DropDown.utils";

export default function AutoFilterDropdown({ data, labelKey, valueChange }) {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShowList(true);
  };

  const filtered = filterData(data, labelKey, query);

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setShowList(true)}
        placeholder="Search..."
        className="dropdown-input"
      />
      {showList && query && (
        <ul className="dropdown-list">
          {filtered.length === 0 ? (
            <li className="dropdown-item">Aucun résultat</li>
          ) : (
            filtered.map((item, idx) => (
              <li
                key={idx}
                className="dropdown-item"
                onClick={() => {
                  valueChange(item); // Pas d'alert ici
                  setQuery(item[labelKey]);
                  setShowList(false);
                }}
              >
                {highlightMatch(item[labelKey], query)}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

AutoFilterDropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  labelKey: PropTypes.string.isRequired,
  valueChange: PropTypes.func.isRequired,
};
