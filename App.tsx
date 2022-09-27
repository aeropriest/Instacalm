import {View, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native';
import FeedPost from './src/components/FeedPost/';
import posts from './src/assets/data/posts.json'

export default function App() {
  return <SafeAreaView>
    <View style={styles.app}>
      <FlatList
      data={posts}
      renderItem={(data) => <FeedPost post={data.item}/>}/>
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  app: {
  },
});
