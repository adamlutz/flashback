import React, { useContext } from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { Context as CardContext } from '../context/CardContext'

const IndexScreen = () => {
  const { state, addCard } = useContext(CardContext);

  return (
    <View style={styles.container}>
      <Button title='Add card' onPress={addCard} />
      <FlatList
        data={state}
        keyExtractor={(card) => card.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
})

export default IndexScreen;
