import {FlatList, View, Dimensions} from 'react-native'
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
import CommentInput from './CommentInput';

export default function CommentsScreen() {
  return (
    <View style={{backgroundColor:'white', height:Dimensions.get('window').height-50}}>        
      <FlatList
        style={{padding: 10}}
        data={comments}
        renderItem={({item}) =>
          <Comment 
           comment={item} 
           key={item.id} 
           details={true}
          />}
      />
      <CommentInput/>
    </View>
  );
}
