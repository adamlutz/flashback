import React, { useContext, useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { Context as CardContext } from '../context/CardContext'
import { TextInput } from 'react-native-gesture-handler';

const CreateScreen = ({ navigation }) => {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const { addCard } = useContext(CardContext);

  return (
    <View>
      <Text style={styles.label}>Question</Text>
      <TextInput style={styles.input} value={question} onChangeText={(text) => setQuestion(text)} />
      <Text style={styles.label}>Answer</Text>
      <TextInput style={styles.input} value={answer} onChangeText={(text) => setAnswer(text)} />
      <Button
        title='Add Card'
        onPress={() => addCard(question, answer)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10
  }
})

export default CreateScreen;
