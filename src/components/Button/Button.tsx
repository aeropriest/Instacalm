import {View, Text, StyleSheet, Pressable} from 'react-native'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
    text? : string;
    onPress?: () => void;

}

export default function Button({text = '', onPress = () => {}}:IButton) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.colors.border,
    alignItems: 'center',
    flex: 1,
    margin: 5,
 },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  }
});