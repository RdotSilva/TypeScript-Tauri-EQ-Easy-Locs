import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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
        <MenuItem value="">All</MenuItem>
        {uniqueOptions.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelectInput;
