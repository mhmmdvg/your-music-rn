import {Animated, RefreshControl, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import useCurrentPlaylist from '../../hooks/use-currentPlaylist';
import useScrollAnimation from '../../hooks/use-scrollAnimation';
import AppBar from '../../components/screens/profile/AppBar';
import HeaderComponent from '../../components/screens/profile/HeaderComponent';
import UserProfilePlaylists from '../../components/screens/profile/UserProfilePlaylists';
import useRefresh from '../../hooks/use-refresh';
import {NavigationContext} from '@react-navigation/native';

const Profile = () => {
  const currentPlaylist = useCurrentPlaylist();
  const {refreshing, onRefresh} = useRefresh();
  const {scrollY, transformContainer, tranformName, appBarTransform, onScroll} =
    useScrollAnimation();
  const navigation = useContext(NavigationContext);

  return (
    <>
      <AppBar scrollAnimation={scrollY} appbarAnimation={appBarTransform} />
      <Animated.FlatList
        style={styles.flatlist}
        scrollToOverflowEnabled={true}
        overScrollMode="never"
        refreshControl={
          <RefreshControl
            title="Loading..."
            tintColor="#fff"
            titleColor="#fff"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        refreshing={refreshing}
        ListHeaderComponent={
          <HeaderComponent
            scrollAnimation={scrollY}
            animationContainer={transformContainer}
            animationName={tranformName}
            addCondition={currentPlaylist?.length}
          />
        }
        scrollEventThrottle={16}
        onScroll={onScroll}
        data={currentPlaylist}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <UserProfilePlaylists
            {...item}
            onPress={() => navigation?.navigate('Playlists User', {data: item})}
          />
        )}
      />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 30,
  },
});
