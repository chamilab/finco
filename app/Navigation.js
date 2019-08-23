import home_page from './screen/home_page';
import info_page from './screen/about_us';
import play_detail from './screen/play_details';
import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { Icon } from  'react-native-elements';

const HomeStack = createStackNavigator({ home_page});
const PlayInfo = createStackNavigator({ play_detail });
const AppInfo = createStackNavigator({ info_page });

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, PlayInfo, AppInfo }),
  android: createDrawerNavigator({ HomeStack, PlayInfo, AppInfo })
});
HomeStack.navigationOptions = ({navigation}) => {
  let drawerLockMode = "unlocked";
  if(navigation.state.index > 0){
    drawerLockMode = "locked-closed"
  }
  return{
  tabBarLabel: "Home",
  tabBarIcon: () => (<Icon name="home" type="ionicons" size={24}/>),
  drawerLockMode,
  drawerLabel: "Home",
  drawerIcon: () =>(<Icon name="home" type="ionicons" size={24} color={"#FFAA00"}/>)
  };
};
PlayInfo.navigationOptions = ({navigation}) => {
  let drawerLockMode = "unlocked";
  if(navigation.state.index > 0){
    drawerLockMode = "locked-closed"
  }
  return{
  tabBarLabel: "PlayInfo",
  tabBarIcon: () => (<Icon name="play-circle-filled" type="ionicons" size={24}/>),
  drawerLockMode,
  drawerLabel: "Play List",
  drawerIcon: () =>(<Icon name="play-circle-filled" type="ionicons" size={24} color={"#FFAA00"}/>)
};
};
AppInfo.navigationOptions =  ({navigation}) => {
  let drawerLockMode = "unlocked";
  if(navigation.state.index > 0){
    drawerLockMode = "locked-closed"
  }
  return{
  tabBarLabel: "AppInfo",
  tabBarIcon: () => (<Icon name="info-outline" type="ionicons" size={24}/>),
  drawerLockMode,
  drawerLabel: "About",
  drawerIcon: () =>(<Icon name="info-outline" type="ionicons" size={24} color={"#FFAA00"}/>)
};
};

const RootSwitch = createSwitchNavigator(
  {MainNavigator},
  {initialRouteName: "MainNavigator"}
);

const navigation = createAppContainer(RootSwitch); 
export default navigation;