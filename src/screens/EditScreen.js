import React, { useContext } from 'react';
import { Context as CardContext } from '../context/CardContext'
import CardForm from '../components/CardForm';

const EditScreen = ({ navigation }) => {

  const { state, editCard } = useContext(CardContext);
  const id = navigation.getParam('id');
  const card = state.find((card) => card.id === navigation.getParam('id'));

  return (
    <CardForm initialValues={{ question: card.question, answer: card.answer }} callback={(question, answer) => {
      editCard(id, question, answer);
      navigation.navigate('Index');
    }} />
  )
}

export default EditScreen;
