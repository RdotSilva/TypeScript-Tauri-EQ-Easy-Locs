import React from "react";
import { pluralizeLabel } from "../../utils/pluralizeLabel";
import { FormControl, InputLabel, Select } from "@mui/material";

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
    <FormControl fullWidth>
      <InputLabel id={`${label}SelectorLabel`}>{label}:</InputLabel>
      <Select
        id={`${label}Selector`}
        onChange={(e) => onSelectChange(e.target.value)}
        value={selectedValue || ""}
      >
        <option value="">All {pluralizeLabel(label)}</option>
        {uniqueOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelectInput;
