/**
 * Function to pluralize a label if necessary
 * @param label The label to be pluralized
 * @returns The pluralized label
 */
const pluralizeLabel = (label: string): string => {
  const ySuffixes = ["y"];

  if (ySuffixes.some((suffix) => label.endsWith(suffix))) {
    return label.slice(0, -1) + "ies";
  } else {
    return label + "s";
  }
};
