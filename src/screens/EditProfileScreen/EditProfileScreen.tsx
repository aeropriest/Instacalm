import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {launchImageLibrary} from 'react-native-image-picker';

/* eslint-disable react/react-in-jsx-scope */
import UserData from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IUser} from '../../types/models';

const URL_REGEX =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  name: IEditableUserField;
  label: string;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: error
                    ? colors.colors.error
                    : colors.colors.border,
                },
              ]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: colors.colors.error}}>
                {error.message || "Can't be left blank"}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

export default function EditProfileScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: UserData.name,
      username: UserData.username,
      website: UserData.website,
      bio: UserData.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.warn(data);
  };
  const changePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, (response) => {
      console.log(response);
    });
  };
  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode) {
          control.log(assets);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Image source={{uri: UserData.image}} style={styles.avatar} />
      <Text onPress={changePhoto} style={styles.textButton}>
        Change Profile Photo
      </Text>
      <CustomInput
        name="name"
        control={control}
        label="Name"
        rules={{required: 'Name cannot be empty'}}
      />
      <CustomInput
        name="username"
        control={control}
        label="Username"
        rules={{
          required: 'User Name cannot be empty',
          minLength: {value: 3, message: 'Username must be 3 characters'},
        }}
      />
      <CustomInput
        name="website"
        control={control}
        label="Website"
        rules={{
          required: 'Website is required',
          pattern: {value: URL_REGEX, message: 'Invalid URL'},
        }}
      />
      <CustomInput name="bio" control={control} label="Bio" multiline={true} />
      <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>
        Submit
      </Text>
    </View>
  );
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
    borderBottomWidth: 0.5,
    borderRadius: 2,
    height: 40,
  },
});
