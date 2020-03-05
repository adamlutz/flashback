import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CardForm = ({ initialValues, callback }) => {
  const [question, setQuestion] = useState(initialValues.question);
  const [answer, setAnswer] = useState(initialValues.answer);

  return (
    <View>
      <Text style={styles.label}>Question</Text>
      <TextInput style={styles.input} value={question} onChangeText={(text) => setQuestion(text)} />
      <Text style={styles.label}>Answer</Text>
      <TextInput style={styles.input} value={answer} onChangeText={(text) => setAnswer(text)} />
      <Button
        title={'Save Card'}
        onPress={() => {
          callback(question, answer);
        }
        }
      />
    </View>
  )
}

CardForm.defaultProps = {
  initialValues: {
    question: 'test',
    answer: 'answer'
  }
};

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

export default CardForm;
