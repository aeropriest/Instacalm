import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { useState } from 'react';

export default function CommentInput() {
  const [newComment, setNewComment] = useState('New Comment');
  const onPost = () => {
    console.warn(newComment);
    setNewComment('Write your comment ...');
  };
  return (
    <View style={styles.root}>
      <Image
      style={styles.image} 
        source={{
          uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"
          }}          
      />
      <TextInput multiline={true} style={styles.input} placeholder='Write your comment ...' value={newComment} onChangeText={(newText) => setNewComment(newText)}/>
      <Text onPress={onPost} style={styles.button}>POST</Text>      
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: colors.colors.border,
    alignItems: 'flex-end',
  },
  image: {
    padding: 10,
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  input: {
    flex: 1,
    borderColor: colors.colors.border,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    marginTop: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.bold,
    color: colors.colors.primary,
  },
});