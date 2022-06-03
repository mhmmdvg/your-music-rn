import {Animated, RefreshControl} from 'react-native';
import React from 'react';
import useCurrentPlaylist from '../../hooks/use-currentPlaylist';
import useScrollAnimation from '../../hooks/use-scrollAnimation';
import AppBar from '../../components/screens/profile/AppBar';
import HeaderComponent from '../../components/screens/profile/HeaderComponent';
import UserProfilePlaylists from '../../components/screens/profile/UserProfilePlaylists';
import useRefresh from '../../hooks/use-refresh';

const Profile = () => {
  const currentPlaylist = useCurrentPlaylist();
  const {refreshing, onRefresh} = useRefresh();
  const {scrollY, transformContainer, tranformName, appBarTransform, onScroll} =
    useScrollAnimation();

  return (
    <>
      <AppBar scrollAnimation={scrollY} appbarAnimation={appBarTransform} />
      <Animated.FlatList
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
            animationContainer={transformContainer}
            animationName={tranformName}
            addCondition={currentPlaylist?.length}
          />
        }
        scrollEventThrottle={16}
        onScroll={onScroll}
        data={currentPlaylist}
        keyExtractor={item => item.id}
        renderItem={({item}) => <UserProfilePlaylists {...item} />}
      />
    </>
  );
};

export default Profile;
