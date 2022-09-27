import {View, Image, Text, StyleSheet} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import weight from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={[styles.container]}>

    <View style={styles.post}>
      {/* {Header} */}
      <View style={styles.header}>
        <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}} style={styles.userAvatar}/>
        <Text style={styles.userName}>ashok jaiswal</Text>
        <Entypo  name="dots-three-horizontal" size={16} style={styles.threeDots} />
      </View>


      {/* {Content} */}      
        <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',}} style={styles.image} />


      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/*likes*/}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>ariane</Text> and <Text style={{fontWeight: fonts.weight.bold}}>88 others</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>aeropriest</Text> this quick brown fox
          jumped over the lazy dog and jumped all day long over the elephant
          too, jumped over the lazy dog and jumped all day long over the
          elephant too
        </Text>


        {/*comments*/}
        <Text style={{color: colors.colors.lightgrey}}>View all 18 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>aeropriest</Text> this quick brown fox
            jumped over the lazy dog and jumped all day long over the elephant too
          </Text>
          <AntDesign
              name={'hearto'}
              size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* posted date */}
        <Text style={{color:colors.colors.lightgrey}}>8th August 2018</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {},
  text: {
    color: colors.colors.black,
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
    color: colors.colors.black,
  },
  footer: {
    padding: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: 'black',
    flex: 1,
    lineHeight: 18,
  },
});

export default App;
