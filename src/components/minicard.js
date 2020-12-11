import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Image,TouchableOpacity,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native'
import Constant from 'expo-constants'

const MiniCard=(props)=>{
    const navigation=useNavigation()
return (
    <TouchableOpacity onPress={()=>{navigation.navigate("videoplayer",{videoid:props.videoid,title:props.title})}}>
            <View style={{
                marginBottom:10,
                flexDirection:"row",
                height:100,
                width:"100%",
            }}>
            <Image 
            source={{uri:`https://img.youtube.com/vi/${props.videoid}/0.jpg`}}
            style={{
                width:"45%",
                height:100
            }}
            />
            <View style={{
                marginLeft:5,
                marginTop:10,
                marginRight:5
            }}>
                <Text style={{fontSize:10}}>{props.title}</Text>
            
                <View style={{
                    marginLeft:10,
                    flexDirection:"row",
                    
                }}>
                    <MaterialIcons style={{
                marginLeft:20
            }}
             name="account-circle" size={32} color="black" />
                    <Text>{props.channelname}</Text>
                </View>
            </View>

            </View></TouchableOpacity>
)
}

export default MiniCard