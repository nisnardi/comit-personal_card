import { View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import myPicture from './assets/me.jpg';

const App = () => {
  return <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={myPicture} />
      </View>
      <View style={styles.iconAndText}>
        <Text style={styles.title}>Your Name</Text>
        <View style={styles.row}>
          <AntDesign style={styles.icon} style={styles.icon} name="twitter" size={24} color="black" />
          <Text>Twitter Username</Text>
        </View>
        <View style={styles.row}>
          <AntDesign style={styles.icon} name="linkedin-square" size={24} color="black" />
          <Text>Linkeding Username</Text>
        </View>
        <View style={styles.row}>
          <AntDesign style={styles.icon} name="instagram" size={24} color="black" />
          <Text>Instagram Username</Text>
        </View>
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
  title: {
    fontSize: 32,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  iconAndText: {
    marginTop: 30,
    marginLeft: 20,
  }
});

export default App;