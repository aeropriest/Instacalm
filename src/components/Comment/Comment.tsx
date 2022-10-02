import {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';


interface ICommentProps {
  comment: IComment;
  details: Boolean;
}

export default function Comment({comment, details = false}: ICommentProps) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(v => !v);
  };
  return (
    <View style={styles.comment}>
      {details && (
            <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user?.username}</Text>{' '}
            {comment?.comment}
        </Text>
        {details && (
         <View style={styles.footer}>
          <Text style={styles.footerText}>8d</Text>
          <Text style={styles.footerText}>88 Likes</Text>
          <Text style={styles.footerText}>Reply</Text>
        </View>        
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={5}>
      <AntDesign
          name={liked ? 'heart' : 'hearto'}
          size={14}
          style={styles.icon}
          color={liked ? colors.colors.accent : colors.colors.black}
    />
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      commentText: {
        color: 'black',
        flex: 1,
        lineHeight: 18,
      },
      icon: {
        marginHorizontal: 5,
      },
      text: {
        color: colors.colors.g,
        lineHeight: 18,
      },
      bold: {
        color: colors.colors.black,
        fontWeight: fonts.weight.bold
      },
      avatar: {
        borderRadius: 20,
        width: 40,
        aspectRatio: 1,
        marginRight: 5,
    },
      middleColumn: {
        flex:1,
      },
      footer: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      footerText: {
        marginRight: 10,
        color: colors.colors.grey,
      },
  })