import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUserName} from '../../redux/CartSlice/AuthSlice';

const SignUpScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastNAme] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [passVisible, setpassVisible] = useState(true);

  const onLoginSubmit = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      mobileNumber === '' ||
      password === '' ||
      confirmPassword === '' ||
      password !== confirmPassword
    ) {
      setShowError(true);
    } else {
      dispatch(setUserName({firstName, email, password}));
      navigation.navigate('LoginScreen');
      setShowError(false);
    }
  };

  console.log(
    'FirstName' + firstName + 'emial' + email + 'Password' + password,
  );

  return (
    <ScrollView style={styles.containerView}>
      <StatusBar backgroundColor={'blue'} barStyle={'light-content'} />
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Sign Up</Text>
      </View>
      <View style={styles.inputContainerView}>
        <TextInput
          label="First Name"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={firstName}
          onChangeText={name => setFirstName(name)}
          style={styles.textInputFileContainer}
        />
        <TextInput
          label="Last Name"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={lastName}
          onChangeText={lastNames => setLastNAme(lastNames)}
          style={styles.textInputFileContainer}
        />
        <TextInput
          label="Email"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={email}
          onChangeText={emails => setEmail(emails)}
          style={styles.textInputFileContainer}
        />
        <TextInput
          label="Mobile Number"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={mobileNumber}
          onChangeText={mobileNo => setMobileNumber(mobileNo)}
          style={styles.textInputFileContainer}
        />
        <TextInput
          label="Password"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={password}
          secureTextEntry={passVisible}
          onChangeText={pass => setPassword(pass)}
          style={styles.textInputFileContainer}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setpassVisible(!passVisible)}
            />
          }
        />
        <TextInput
          label="Confirm Password"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={confirmPassword}
          secureTextEntry={passVisible}
          onChangeText={confirmPass => setConfirmPassword(confirmPass)}
        />
        {showError && (
          <HelperText
            type="error"
            visible={showError}
            style={styles.helperText}>
            Please Enter Correct Creditional
          </HelperText>
        )}
      </View>
      <View style={styles.buttonView}>
        <Button
          mode="contained"
          onPress={() => onLoginSubmit()}
          style={styles.button}>
          Sign Up
        </Button>
        <TouchableOpacity
          style={styles.secondaryButtonView}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.secondaryButton}>Already a member? Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  containerView: {flex: 1},
  headingView: {alignItems: 'center'},
  headingText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginLeft: 20,
  },
  subHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 5,
    marginLeft: 30,
  },
  loginImageView: {marginTop: 20, alignItems: 'center'},
  inputContainerView: {marginTop: 20, marginHorizontal: 20},
  textInputFileContainer: {marginBottom: 10},
  buttonView: {marginTop: 20, marginHorizontal: 20},
  button: {backgroundColor: 'blue'},
  secondaryButtonView: {marginTop: 20, marginLeft: 20, marginBottom: 40},
  secondaryButton: {fontSize: 16, fontWeight: '600', color: 'blue'},
  helperText: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
  },
});
