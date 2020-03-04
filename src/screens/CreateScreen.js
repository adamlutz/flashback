import React, { useContext } from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { Context as CardContext } from '../context/CardContext'

const CreateScreen = ({ navigation }) => {

  const { state } = useContext(CardContext);
  // const card = state.find((card) => card.id === navigation.getParam('id'));

  return (
    <View>
      <Text>create</Text>
    </View>
  )
}

const styles = StyleSheet.create({
})

export default CreateScreen;
