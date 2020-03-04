import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CardProvider } from './src/context/cardContext';
import IndexScreen from './src/screens/IndexScreen'

const navigator = createStackNavigator({
  Index: IndexScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Flashback',
  }
});

const App = createAppContainer(navigator);
export default () => {
  return <CardProvider>
    <App />
  </CardProvider>;
};
