import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardContext from '../context/cardContext'

const IndexScreen = () => {
  const cards = useContext(CardContext);

  return (
    <View style={styles.container}>
        <FlatList
          data={cards}
          keyExtractor={(card) => card.question}
          renderItem={({ item }) => {
            return <Text>{item.question}</Text>
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
