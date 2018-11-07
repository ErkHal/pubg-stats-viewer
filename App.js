import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PlayerSearch from './components/PlayerSearch';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayerSearch style={styles.topBar}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
