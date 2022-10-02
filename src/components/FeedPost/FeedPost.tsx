/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable/DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';

interface IFeedPost {
  post: {
    video: any;
    images: any;
    id: string;
    description: string;
    user: {
      userName: string;
    };
  };
}

export default function FeedPost({ post }: IFeedPost) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(currentValue => !currentValue);
  };
  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(currentValue => !currentValue);
  };


  let content = null;

  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLiked}>
        <Image
          source={{
            uri: post.image,
          }}
        style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLiked}>
        <VideoPlayer uri={post.video} />
      </DoublePressable>
    );
  }

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
        <DoublePressable onDoublePress={toggleLiked}>{content}</DoublePressable>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <Pressable onPress={toggleLiked}>
              <AntDesign
                name={isLiked ? 'heart' : 'hearto'}
                size={24}
                style={styles.icon}
                color={isLiked ? colors.colors.accent : colors.colors.black}
              />
            </Pressable>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              style={styles.icon}
              color={colors.colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.colors.black}
            />
            <Feather
              name="bookmark"
              size={24}
              style={styles.icon}
              color={colors.colors.black}
              style={{ marginLeft: 'auto' }}
            />
          </View>

          {/*likes*/}
          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>ariane</Text> and <Text style={{ fontWeight: fonts.weight.bold }}>{post.nofLikes} others</Text>
          </Text>
          <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
            <Text style={styles.bold}>{post.user.username}</Text> {post.description}
          </Text>
          <Text onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more'}</Text>


          {/*comments*/}
          <Text style={{ color: colors.colors.lightgrey }}>View all {post.nofComments} comments</Text>
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}



          {/* posted date */}
          <Text style={{ color: colors.colors.lightgrey }}>{post.createdAt}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

