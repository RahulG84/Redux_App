import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserName} from '../../redux/CartSlice/AuthSlice';

const LoginScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [passVisible, setpassVisible] = useState(true);

  const items = useSelector((state: any) => state.auth);

  const onLoginSubmit = () => {
    if (
      items.email !== email ||
      items.password !== password ||
      email === '' ||
      password === ''
    ) {
      setShowError(true);
    } else {
      navigation.navigate('SheduleItem');
      setShowError(false);
    }
  };

  return (
    <ScrollView style={styles.containerView}>
      <StatusBar backgroundColor={'blue'} barStyle={'light-content'} />
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Welcome To OnlineMart</Text>
        <Text style={styles.subHeadingText}>Expolore Your Fashion...</Text>
      </View>
      <View style={styles.loginImageView}>
        <Image
          source={require('../../../../assets/images/ShoppingImage.png')}
        />
      </View>
      <View style={styles.inputContainerView}>
        <TextInput
          label="Email"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={email}
          onChangeText={emails => setEmail(emails)}
          style={styles.emailTextInputField}
        />
        <TextInput
          label="Password"
          mode="outlined"
          theme={{colors: {primary: 'blue'}}}
          value={password}
          secureTextEntry={passVisible}
          onChangeText={pass => setPassword(pass)}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setpassVisible(!passVisible)}
            />
          }
        />
        {showError ? (
          <HelperText type="error" style={styles.helperText}>
            Please Enter Valid Email And Password
          </HelperText>
        ) : null}
      </View>
      <View style={styles.buttonView}>
        <Button
          mode="contained"
          onPress={() => onLoginSubmit()}
          style={styles.button}>
          Login
        </Button>
        <TouchableOpacity
          style={styles.secondaryButtonView}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.secondaryButton}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerView: {flex: 1},
  headingView: {alignItems: 'flex-start'},
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
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
  emailTextInputField: {marginBottom: 10},
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
