import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import UserData from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Button from '../../components/Button';


export default function ProfileHeader() {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: UserData.image}} style={styles.image} />
        <View style={styles.columns}>
                <Text style={styles.number}>88</Text>
                <Text style={styles.text}>Posts</Text>
            </View>
            <View style={styles.columns}>
                <Text style={styles.number}>88</Text>
                <Text style={styles.text}>Followers</Text>
            </View>
            <View style={styles.columns}>
                <Text style={styles.number}>88</Text>
                <Text style={styles.text}>Following</Text>
            </View>
        </View>
        <Text style={styles.userName}>{UserData.name}</Text>
      <Text style={styles.userBio}>{UserData.bio}</Text>
      <View style={styles.buttons}>
        <Button
          text={'Edit Profile'}
          onPress={() => console.warn('on press')} />
        <Button
          text={'Edit Profile'}
          onPress={() => console.warn('on press')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    root: {
      padding: 10,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    column: {
      flexDirection: 'column',
      alignContent: 'center',
    },
    image: {
      width: 80,
      aspectRatio: 1,
      borderRadius: 40,
    },
    number: {
      fontWeight: fonts.weight.semi,
      fontSize: fonts.size.md,
      color: colors.colors.black,
      alignSelf: 'center',
    },
    text: {
      fontWeight: fonts.weight.light,
      color: colors.colors.lightgrey,
    },
    userName: {
      fontWeight: fonts.weight.semi,
      fontSize: fonts.size.md,
      color: colors.colors.black,
      marginBottom: 5,
    },
    buttons: {
      flexDirection: 'row',
    },
  });
  