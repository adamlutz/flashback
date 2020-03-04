import React, { useContext } from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { Context as CardContext } from '../context/CardContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addCard } = useContext(CardContext);

  return (
    <View>
      <Button title='Add card' onPress={addCard} />
      <FlatList
        data={state}
        keyExtractor={(card) => card.title}
        renderItem={({ item }) => {
          return <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Feather style={styles.icon} name='trash' />
          </View>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    borderTopWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 20
  },
})

export default IndexScreen;
