import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.app}>
        <HomeScreen/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
  },
});
