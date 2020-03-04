import createDataContext from './createDataContext';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'add_card':
      return [...state, {
        id: Math.floor(Math.random() * 999),
        ...action.payload
      }]
    case 'rm_card':
      return state.filter((card) => card.id !== action.payload)
    default:
      return state;
  }
}

// rather than creating multiple methods for each crud
// operation, use reducers instead!
const addCard = (dispatch) => {
  return (question, answer) => {
    dispatch({ type: 'add_card', payload: { question, answer } })
  }
};

const rmCard = (dispatch) => {
  return (id) => {
    dispatch({ type: 'rm_card', payload: id })
  }
};


// Provider is react component that makes data available to rest of app
// or other components
export const { Context, Provider } = createDataContext(cardReducer, { addCard, rmCard }, []);
