
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const AppFlow = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppFlow.Navigator>
          <AppFlow.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      </AppFlow.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
