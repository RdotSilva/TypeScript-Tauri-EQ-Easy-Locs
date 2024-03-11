import React from "react";

interface FilterSelectsProps {
  uniqueOptions: string[];
  selectedValue: string | null;
  label: string;
  onSelectChange: (value: string) => void;
}

/**
 * Render a select input used to filter items
 */
const FilterSelectInput: React.FC<FilterSelectsProps> = ({
  uniqueOptions,
  selectedValue,
  label,
  onSelectChange,
}) => {
  return (
    <div className="select-group">
      <label htmlFor={`${label}Selector`}>{label}:</label>
      <select
        id={`${label}Selector`}
        onChange={(e) => onSelectChange(e.target.value)}
        value={selectedValue || ""}
      >
        <option value="">All {label}s</option>
        {uniqueOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelectInput;
