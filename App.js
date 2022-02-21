import { View, Text, Image, StyleSheet } from 'react-native';
import myPicture from './assets/me.jpg';

const App = () => {
  return <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={myPicture} />
      </View>
      <View>
        <Text>Your Name</Text>
        <Text>Twitter Username</Text>
        <Text>Linkeding Username</Text>
        <Text>Instagram Username</Text>
      </View>
    </View>
  </View >
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  imageContainer: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20,
  },
  // row: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 5,
  // },
});

export default App;


// flexDirection: 'row',
//   width: '52%',
//     justifyContent: 'space-between',