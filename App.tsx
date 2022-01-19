import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Src/Navigator/Navigator';
import { LogBox } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}
LogBox.ignoreLogs
([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!]",
]);
export default App;
