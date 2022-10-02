import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/';
import CommentsScreen from './src/screens/CommentsScreen/';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.app}>
        <CommentsScreen/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
  },
});
