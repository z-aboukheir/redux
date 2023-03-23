import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { Counter } from './src/features/counter/counter';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Counter/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
