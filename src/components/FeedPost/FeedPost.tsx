import {View, Image, Text} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import Comment from '../Comment/';

interface IFeedPost {
  post: {
    id: string;
    description: string;
    user: {
      userName: string;
    };
  };
}

export default function FeedPost(props: IFeedPost) {
  const {post} = props;
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: post.user.image,
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userName}>{post.user.username}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            style={styles.threeDots}
          />
      </View>

        {/* Content */}

        <Image 
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />


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
          Liked by <Text style={styles.bold}>ariane</Text> and <Text style={{fontWeight: fonts.weight.bold}}>{post.nofLikes} others</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text> {post.description}
        </Text>


        {/*comments*/}
        <Text style={{color: colors.colors.lightgrey}}>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment}/>
        ))}
        


        {/* posted date */}
        <Text style={{color:colors.colors.lightgrey}}>{post.createdAt}</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

