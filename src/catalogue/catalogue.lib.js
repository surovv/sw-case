export const omitFilter = (filterName, allFilters) => {
  const { [filterName]: currentOption, ...filters } = allFilters;

  return filters;
};
