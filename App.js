

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Constant from 'expo-constants'
import Home from './src/screens/home'
import Search from './src/screens/search'
import VideoPlayer from './src/screens/videoplayer'
import Explore from './src/screens/explore'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {createStackNavigator} from '@react-navigation/stack'
const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator()
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Reducer, { reducer } from './src/reducers/reducer'
const store=createStore(reducer)

const RootHome=()=>{
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home'
        } else if (route.name === 'trending') {
          iconName = 'explore'
        } else if (route.name === 'subscribe') {
          iconName = 'subscriptions'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='trending' component={Explore} />


    </Tabs.Navigator>
  )
}


function App (){
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
    <Stack.Screen name='roothome' component={RootHome} />
    <Stack.Screen name='search' component={Search} />
    <Stack.Screen name='videoplayer' component={VideoPlayer} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  

});

export default App;
