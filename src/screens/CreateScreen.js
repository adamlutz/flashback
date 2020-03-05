import React, { useContext } from 'react';
import { Context as CardContext } from '../context/CardContext'
import CardForm from '../components/CardForm';

const CreateScreen = ({ navigation }) => {
  const { addCard } = useContext(CardContext);

  return (
    <CardForm initialValues={{ question: '', answer: '' }} callback={(question, answer) => {
      addCard(question, answer);
      navigation.navigate('Index');
    }} />
  )

}

export default CreateScreen;
