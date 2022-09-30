import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
export default StyleSheet.create({
    post: {},
    text: {
      color: colors.colors.g,
      lineHeight: 18,
    },
    bold: {
      color: colors.colors.black,
      fontWeight: fonts.weight.bold
    },
    image: {
      width: '100%',
      aspectRatio: 4 / 4,
    },
    header: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.colors.black,
    },
    threeDots: {
      marginLeft: 'auto',
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    icon: {
      marginHorizontal: 5,
    },
    footer: {
      padding: 10,
    },
  });
  