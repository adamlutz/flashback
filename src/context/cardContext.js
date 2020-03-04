import createDataContext from './createDataContext';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'add_card':
      return [...state, { title: `my card # ${state.length + 1}` }]
    default:
      return state;
  }
}

// rather than creating multiple methods for each crud
// operation, use reducers instead!
const addCard = (dispatch) => {
  return () => {
    dispatch({ type: 'add_card' })
  }
};


// Provider is react component that makes data available to rest of app
// or other components
export const { Context, Provider } = createDataContext(cardReducer, { addCard }, []);
