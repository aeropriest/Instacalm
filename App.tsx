import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import weight from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

const App = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color:colors.colors.primary, fontSize:fonts.size.xlg, fontWeight:weight.weight.bold}}> Hello World 1
      <AntDesign name="stepforward" size={25}/>
      </Text>
      
    </View>
  );
};

export default App;