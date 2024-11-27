import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import Home from "./Home";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import SpotifyNav from './SpotifyPage/SpotifyNav';

export default function App() {

  return (
    <NavigationContainer>
    <SpotifyNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});