import {Platform, SafeAreaView, StatusBar} from 'react-native';
import React, {useContext} from 'react';
import useLogin from '../../hooks/use-login';
import {
  AuthButton,
  ButtonTitle,
  LoginBody,
} from '../../components/screens/login/styled/styled';
import {MyContext} from '../../context/context';

const Login = () => {
  const {authLogin} = useLogin();
  const {state} = useContext(MyContext);
  console.log('Login', state.auth.token);

  return (
    <SafeAreaView>
      {Platform.OS === 'ios' && (
        <StatusBar barStyle="light-content" translucent />
      )}
      <LoginBody>
        <AuthButton onPress={authLogin}>
          <ButtonTitle>Spotify</ButtonTitle>
        </AuthButton>
      </LoginBody>
    </SafeAreaView>
  );
};

export default Login;
