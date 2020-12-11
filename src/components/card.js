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

const Card=(props)=>{
    const navigation=useNavigation()
return (
    <TouchableOpacity onPress={()=>{navigation.navigate("videoplayer",{videoid:props.videoid,title:props.title})}}>
            <View style={{
                marginBottom:10
            }}
            >
            <Image 
            source={{uri:`https://img.youtube.com/vi/${props.videoid}/0.jpg`}}
            style={{
                width:"100%",
                height:140
            }}
            />
            <View style={{
                flexDirection:"row",
                marginLeft:5,
                marginTop:10
            }}>
            <MaterialIcons style={{
                marginLeft:20
            }}
             name="account-circle" size={32} color="black" />
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{fontSize:20}}>{props.title}</Text>
                    <Text>{props.channelname}</Text>
                </View>
            </View>

            </View>
            </TouchableOpacity>
)
}

export default Card