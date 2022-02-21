import { View, Text, Image, StyleSheet } from 'react-native';
import { ImageText } from './components/ImageText';
import myPicture from './assets/me.png';

const App = () => {
  const name = 'Your Name';
  const twitterUsername = 'Twitter Username';
  const linkedinUsername = 'Linkeding Username';
  const instagramUsername = 'Instagram Username';

  // console.log(name);
  // console.log(twitterUsername);
  // console.log(linkedinUsername);
  // console.log(instagramUsername);

  return <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={myPicture} />
      </View>
      <View style={styles.iconAndText}>
        <Text style={styles.title}>{name}</Text>
        <ImageText iconName="twitter" iconColor="black" iconSize={24}>
          {twitterUsername}
        </ImageText>
        <ImageText iconName="linkedin-square" iconColor="black" iconSize={24}>
          {linkedinUsername}
        </ImageText>
        <ImageText iconName="instagram" iconColor="black" iconSize={24}>
          {instagramUsername}
        </ImageText>
      </View>
    </View>
  </View>
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
  iconAndText: {
    marginTop: 30,
    marginLeft: 20,
  }
});

export default App;