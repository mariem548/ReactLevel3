import { useState } from "react";
import PropTypes from "prop-types";
import { filterListByLabel, highlightSearchMatch } from "./DropDown.utils";

export default function AutoFilterDropdown({ data, labelKey, valueChange }) {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setIsDropdownVisible(true);
  };

  const filteredOptions = filterListByLabel(data, labelKey, searchInput);

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownVisible(true)}
        placeholder="Rechercher..."
        className="dropdown-input"
      />
      {isDropdownVisible && searchInput && (
        <ul className="dropdown-list">
          {filteredOptions.length === 0 ? (
            <li className="dropdown-item">Aucun résultat</li>
          ) : (
            filteredOptions.map((option, idx) => (
              <li
                key={idx}
                className="dropdown-item"
                onClick={() => {
                  valueChange(option);
                  setSearchInput(option[labelKey]);
                  setIsDropdownVisible(false);
                }}
              >
                {highlightSearchMatch(option[labelKey], searchInput)}
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
