import createDataContext from './createDataContext';

import jsonServer from '../api/jsonServer';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'edit_card':
      return state.map((card) => {
        if (card.id === action.payload.id) {
          return action.payload
        }
        return card;
      });
    case 'rm_card':
      return state.filter((card) => card.id !== action.payload)
    case 'get_cards':
      return action.payload;
    default:
      return state;
  }
}

const getCards = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/cards');
    dispatch({ type: 'get_cards', payload: response.data })
  }
}

// rather than creating multiple methods for each crud
// operation, use reducers instead!
const addCard = (dispatch) => {
  return async (question, answer) => {
    await jsonServer.post('/cards', { question, answer })
  }
};

const editCard = (dispatch) => {
  return async (id, question, answer, callback) => {
    await jsonServer.put(`/cards/${id}`, { question, answer });
    dispatch({ type: 'edit_card', payload: { id, question, answer } })
    callback();
  }
};


const rmCard = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/cards/${id}`)

    // could optionally refresh from the API here, or do it locally
    dispatch({ type: 'rm_card', payload: id })
  }
};


// Provider is react component that makes data available to rest of app
// or other components
export const { Context, Provider } = createDataContext(cardReducer, { addCard, editCard, rmCard, getCards }, []);
