

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native'
import Constant from 'expo-constants'
function Header (){

  const navigation=useNavigation()

  return (
    <>
      <View style={{
          height:40,
          backgroundColor:"gray",
          flexDirection:"row",
          justifyContent:"space-between",
          elevation:5,marginTop:Constant.statusBarHeight,
      }}>
        <View style={{
            flexDirection:"row",
            margin:5
        }}>
            <Entypo style={{
                marginLeft:20
            }}
             name="youtube" size={32} color="red" />
            <Text style={{
                fontSize:22,
                marginLeft:5,
                marginTop:5
            }}>
                Youtube API
            </Text>

        </View>
        <View style={{
            flexDirection:"row",
            marginTop:5
        }}>
        <Ionicons style={{
                marginLeft:20
            }}
             name="md-videocam" size={32} color="black" />
        <Ionicons style={{
                marginLeft:20
            }}
            onPress={()=>navigation.navigate("search")}
             name="md-search" size={32} color="black" />
             <MaterialIcons style={{
                marginLeft:20
            }}
             name="account-circle" size={32} color="black" />
        </View>
      </View>
        
    </>
  );
};

const styles = StyleSheet.create({
  

});

export default Header;
