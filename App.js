import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

import Navigation from './src/Navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.root}>
        < Navigation />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});
export default App;