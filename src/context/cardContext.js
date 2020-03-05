import createDataContext from './createDataContext';

import jsonServer from '../api/jsonServer';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'add_card':
      return [...state, {
        id: Math.floor(Math.random() * 999),
        question: action.payload.question,
        answer: action.payload.answer,
      }]
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
  return (question, answer) => {
    dispatch({ type: 'add_card', payload: { question, answer } })
  }
};

const editCard = (dispatch) => {
  return (id, question, answer) => {
    dispatch({ type: 'edit_card', payload: { id, question, answer } })
  }
};


const rmCard = (dispatch) => {
  return (id) => {
    dispatch({ type: 'rm_card', payload: id })
  }
};


// Provider is react component that makes data available to rest of app
// or other components
export const { Context, Provider } = createDataContext(cardReducer, { addCard, editCard, rmCard, getCards }, []);
