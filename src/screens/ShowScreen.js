import React, { useContext } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native';
import { Context as CardContext } from '../context/CardContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {

  const { state } = useContext(CardContext);
  const card = state.find((card) => card.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{card.question}</Text>
      <Text>{card.answer}</Text>
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
  plus: {
    marginRight: 20
  }
});
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () =>
      <TouchableOpacity style={styles.icon} onPress={() => { navigation.navigate('Edit') }}>
        <EvilIcons name='pencil' size={30} />
      </TouchableOpacity>
  }
};

export default ShowScreen;
