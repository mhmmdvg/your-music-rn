import {Platform, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import useLogin from '../../hooks/use-login';
import {
  AuthButton,
  ButtonTitle,
  LoginBody,
} from '../../components/screens/login/styled/styled';

const Login = () => {
  const {authLogin} = useLogin();

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
