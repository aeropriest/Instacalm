import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/';
import CommentsScreen from './src/screens/CommentsScreen/';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.app}>
        <EditProfileScreen/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
  },
});
