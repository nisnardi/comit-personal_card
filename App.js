import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return <View style={styles.container}>
    <Text>Hi</Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default App;