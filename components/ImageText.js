import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ImageText = ({ iconName, iconColor, iconSize, children }) => {
  const linkedinUsername = 'Linkeding Username';

  return (
    <View style={styles.row}>
      <AntDesign style={styles.icon} name={iconName} size={iconSize} color={iconColor} />
      <Text>{linkedinUsername}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export { ImageText };