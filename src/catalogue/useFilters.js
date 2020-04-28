import { useReducer } from 'react';

const SET_FILTER = 'SET_FILTER';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FILTER: return { ...state, ...action.payload };
    default: return state;
  }
};

const useFilters = (initFilters = {}) => {
  const [state, dispatch] = useReducer(reducer, initFilters);

  const setFilter = (filterData) => dispatch({
    type: SET_FILTER,
    payload: filterData,
  });

  return {
    filters: state,
    setFilter,
  };
};

export default useFilters;
