import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {ImageTrack, Title, TitleTrack} from './styled/styles';

type Props = {
  data: any[];
};

const BrowseCategories: FC<Props> = ({data}) => {
  return (
    <>
      <Title>Browse Categories</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        overScrollMode="never"
        data={data}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardList}>
            <ImageTrack
              source={{
                uri:
                  item?.icons[0]?.url === undefined
                    ? 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
                    : item?.icons[0]?.url,
              }}
              resizeMode="cover"
            />

            <TitleTrack>{item.name}</TitleTrack>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default BrowseCategories;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexWrap: 'wrap',
    marginVertical: 15,
    marginBottom: 60,
  },
  cardList: {
    marginHorizontal: 10,
  },
});
