import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useContext} from 'react';
import {BoxTitle, ImageTrack, Title} from './styled/styles';
import {NewReleaseType} from '../../../types/playlist';
import styled from '@emotion/native';
import AddIcon from '../../../assets/icons/add-icon';
import {NavigationContext} from '@react-navigation/native';

const TitleRelease = styled.Text`
  font-size: 14px;
  color: #ddd;
  font-family: 'PlusJakartaSans-Bold';
  width: 160px;
`;

export const AppBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #060606;
`;

type Props = {
  data: NewReleaseType[] | undefined;
  addCondition: number | undefined;
};

const NewRelease: FC<Props> = ({data, addCondition}) => {
  const navigation = useContext(NavigationContext);

  return (
    <>
      <AppBar>
        <Title>New Release</Title>
        {addCondition ? null : (
          <TouchableOpacity
            onPress={() => navigation?.navigate('Add Playlist')}>
            <AddIcon />
          </TouchableOpacity>
        )}
      </AppBar>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={styles.container}
        data={data}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardList}>
            <ImageTrack
              source={{
                uri: item.images[0].url,
              }}
              resizeMode="cover"
            />

            <BoxTitle>
              <TitleRelease>{item.name}</TitleRelease>
            </BoxTitle>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default NewRelease;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexWrap: 'wrap',
    marginVertical: 15,
    marginBottom: 30,
  },

  cardList: {
    marginHorizontal: 10,
  },
});
