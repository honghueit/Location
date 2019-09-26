import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

/* import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/OrderHistoryScreen'; */
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailLocationScreen from '../screens/DetailLocationScreen';
/* import SecondScreen from '../screens/SecondScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
 */
import { Ionicons } from '@expo/vector-icons';;
import LinksScreen from '../screens/LinksScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },

);

HomeStack.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <Image
      resizeMode={'contain'}
      source={require('../assets/images/bottom1.png')}
      style={[{ width: 20, height: 20 }]}
    />
  ),
};

/* 



const SearchStack = createStackNavigator(
  {
    Links: SearchScreen,
    //DetailScreen
  },

);

SearchStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <Image
      resizeMode={'contain'}
      source={require('../assets/images/home.png')}
      style={[{ width: 20, height: 20 }]}
    />
  ),
}; */

const SecondStack = createStackNavigator(
  {
    Links: LinksScreen,
  }
);


SecondStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <Ionicons name="md-calendar" size={23} color="#000" />
  ),
};



const DetailLocationStack = createStackNavigator(
  {
    DetailLocationScreen: DetailLocationScreen,
  },
  config
);

DetailLocationStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <Image
      resizeMode={'contain'}
      source={require('../assets/images/bottom3.png')}
      style={[{ width: 20, height: 20 }]}
    />
  ),
};

//LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: false,
  tabBarIcon: ({ focused }) => (
    <Image
      resizeMode={'contain'}
      source={require('../assets/images/bottom4.png')}
      style={[{ width: 20, height: 20 }]}
    />
  ),
};


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  /*  SearchStack,
   SecondStack,
   OrderHistoryStack, */
  SecondStack,
  DetailLocationStack,
  SettingsStack,
}, {
    tabBarOptions: {
      showLabel: false
    },
  });

export default tabNavigator;
