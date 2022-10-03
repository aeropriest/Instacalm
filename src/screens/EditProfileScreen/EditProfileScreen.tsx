import UserData from '../../assets/data/user.json';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ICustomInput{
    label: string;
    multiline?: boolean;
}

const CustomInput = ({label, multiline = false} : ICustomInput) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} placeholder="hello world" multiline={multiline}/>
    </View>
)

const onSubmit = () => {
    console.warn('onSubmit');
};

export default function EditProfileScreen() {
  return (
    <View style={styles.page}>
        <Image source = {{uri: UserData.image}} style={styles.avatar}/>
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput label='Name'/>
      <CustomInput label='Username'/>
      <CustomInput label='Website'/>
      <CustomInput label='Bio' multiline={true}/>
      <Text style={styles.textButton} onPress={onSubmit}>Submit</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    page: {
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 100,
    },
    textButton: {
        color: colors.colors.primary,
        fontSize: fonts.weight.md,
        fontWeight: fonts.weight.semi,
        margin: 10,
    },
    label: {
        width: 75,
    },
    input: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderColor: colors.colors.lightgrey,
        borderRadius: 2,
        height: 40,

    },

})