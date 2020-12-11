

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
import {WebView} from 'react-native-webview'
const VideoPlayer=({route})=>{

    const {videoid,title}=route.params

return (
    <View style={{flex:1,marginTop:Constant.statusBarHeight,}}>
        
        <View style={{
            width:"100%",
            height:600
        }}>
            <WebView
                source={{uri:`https://www.youtube.com/embed/${videoid}`}}
            />
            <Text style={{fontSize:20,width:"80%"}}>
                {title}
            </Text>
            <View
            style={{borderBottomWidth:1}}
            />

        </View>



    </View>
)

}

export default VideoPlayer;