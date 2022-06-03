import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import HomeIcon from '../../assets/icons/home-icon';
import HomeFillIcon from '../../assets/icons/homefill-icon';
import SearchIcon from '../../assets/icons/search-icon';
import SearchFillIcon from '../../assets/icons/searchfill-icon';
import Search from '../../screens/search/Search-base';
import Profile from '../../screens/profile/Profile';
import {ProfileIcon, ProfileIconActive} from '../../assets/icons/profile';

type NavType = {
  name: string;
  component: React.FC;
  icon: {
    active: React.FC;
    inactive: React.FC;
  };
};

const BottomNavItems: Array<NavType> = [
  {
    name: 'Home',
    component: Home,
    icon: {active: HomeFillIcon, inactive: HomeIcon},
  },
  {
    name: 'Search',
    component: Search,
    icon: {active: SearchFillIcon, inactive: SearchIcon},
  },
  {
    name: 'Profile',
    component: Profile,
    icon: {active: ProfileIconActive, inactive: ProfileIcon},
  },
];

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          height: 80,
          // minHeight: 200,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#05050508', '#030303ee', '#020202']}
            style={styles.linearGradient}
          />
        ),
      }}>
      {BottomNavItems.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? <item.icon.active /> : <item.icon.inactive />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    borderTopWidth: 0,
  },
});
