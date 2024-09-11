import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Watch Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScoreScreen;
