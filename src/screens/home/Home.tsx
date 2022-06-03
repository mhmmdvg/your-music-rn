import {RefreshControl, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import useCurrentPlaylist from '../../hooks/use-currentPlaylist';
import useRecommendPlaylists from '../../hooks/use-playlist';
import {Body} from '../../components/screens/home/styled/styles';
import YourPlaylists from '../../components/screens/home/YourPlaylists';
import NewRelease from '../../components/screens/home/NewRelease';
import BrowseCategories from '../../components/screens/home/BrowseCategories';
import useRefresh from '../../hooks/use-refresh';
import styled from '@emotion/native';

const ViewPadding = styled.View`
  padding: 6px 20px;
`;

const Home = () => {
  const currentPlaylist = useCurrentPlaylist();
  const {newRelease, browseCategories} = useRecommendPlaylists();
  const {refreshing, onRefresh} = useRefresh();

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" translucent />
      <Body
        overScrollMode="never"
        refreshControl={
          <RefreshControl
            title="Loading..."
            tintColor="#fff"
            titleColor="#fff"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {currentPlaylist?.length ? (
          <YourPlaylists data={currentPlaylist} refresh={refreshing} />
        ) : (
          <ViewPadding />
        )}

        <NewRelease data={newRelease} addCondition={currentPlaylist?.length} />
        <BrowseCategories data={browseCategories} />
      </Body>
    </SafeAreaView>
  );
};

export default Home;
