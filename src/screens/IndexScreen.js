import React, { useContext } from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import CardContext from '../context/cardContext'

const IndexScreen = () => {
  const { data, addCard } = useContext(CardContext);

  return (
    <View style={styles.container}>
      <Button title='Add card' onPress={addCard} />
      <FlatList
        data={data}
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
