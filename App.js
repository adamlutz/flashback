import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider as CardProvider } from './src/context/CardContext';
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
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
