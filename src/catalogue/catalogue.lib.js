export const filtersData = {
  films: {
    queryName: 'allFilms',
    queryAttrs: `{
      id
      label: title
    }`,
    getCustomFIlters: ({ person, ...restFilters }) => ({
      ...restFilters,
      characters: person,
    }),
  },
  species: {
    queryName: 'allSpecies',
    queryAttrs: `{
      id
      label: name
    }`,
    getCustomFIlters: ({ person, ...restFilters }) => ({
      ...restFilters,
      people: person,
    }),
  },
  person: {
    queryName: 'allPersons',
    queryAttrs: `{
      id
      label: name
    }`,
  },
};


export const getQueryFilterName = (attr, fnName = 'some') => `${attr}_${fnName}`;
export const getQueryFilterIdField = (filterId) => `id: "${filterId}"`;

export const getQueryFilters = (filters) => (
  Object.keys(filters)
    .map((filterKey) => (
      filters[filterKey]
        ? `
          ${getQueryFilterName(filterKey)}: {
            ${getQueryFilterIdField(filters[filterKey])}
          }
          `
        : ''
    ))
    .join('\n')
);
