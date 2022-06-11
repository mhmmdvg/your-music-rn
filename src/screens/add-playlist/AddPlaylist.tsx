import {StyleSheet, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import useCreatePlaylist from '../../hooks/use-createPlaylist';
import {MyContext} from '../../context/context';
import {Types} from '../../types/reducer-type';
import CloseIcon from '../../assets/icons/close-icon';
import {NavigationContext} from '@react-navigation/native';

const PlaylistInput = styled.TextInput`
  color: #fff;
  font-size: 28px;
  text-align: center;
  font-family: 'PlusJakartaSans-ExtraBold';
`;

const CommandTitle = styled.Text`
  font-size: 18px;
  font-family: 'PlusJakartaSans-Bold';
  color: #fff;
  align-self: center;
  margin-bottom: 10px;
`;

const Container = styled.View`
  padding-top: 20%;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 100px;
  padding: 10px;
  height: 50px;
  width: 35%;
  margin-top: 50px;
`;

const TextButton = styled.Text`
  font-size: 16px;
  font-family: 'PlusJakartaSans-Bold';
  align-self: center;
  color: #000;
`;

const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 3%;
  margin-top: 3%;
`;

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomSheet = () => {
  const navigation = useContext(NavigationContext);
  const {dispatch} = useContext(MyContext);
  const {createPlaylist} = useCreatePlaylist();

  return (
    <LinearGradient
      colors={['#535353', '#333', '#131313']}
      style={styles.bottomSheet}>
      <CloseButton onPress={() => navigation?.goBack()}>
        <CloseIcon />
      </CloseButton>
      <Container>
        <CommandTitle>Add to playlist</CommandTitle>
        <PlaylistInput
          autoFocus={true}
          defaultValue="My Playlist #1"
          onChangeText={text =>
            dispatch({
              type: Types.InputCreatePlaylist,
              payload: {
                value: text,
              },
            })
          }
        />
      </Container>
      <AddButton onPress={() => createPlaylist()}>
        <TextButton>Create</TextButton>
      </AddButton>
    </LinearGradient>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    height: SCREEN_HEIGHT,
    width: '100%',
    alignItems: 'center',
    top: SCREEN_HEIGHT / 6,
    borderRadius: 16,
  },
});
