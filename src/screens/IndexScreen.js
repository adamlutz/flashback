import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardContext from '../context/cardContext'

const IndexScreen = () => {
  const value = useContext(CardContext);

  return (
    <View style={styles.container}>
      <Text>Here2</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
})

export default IndexScreen;
