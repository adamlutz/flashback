import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider as CardProvider } from './src/context/CardContext';
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
