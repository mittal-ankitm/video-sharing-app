
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,FlatList,
  Text,
  StatusBar,
} from 'react-native';
import {useSelector} from 'react-redux'
import Header from '../components/header'
import Card from '../components/card'
const Explore=()=>{
    const carddata=useSelector(state=>{
        return state;
      })
return (
    <View style={{flex:1}}>
        <Header />
        <View>
            {carddata.length==0?
            <Text style={{fontSize:20,padding:10,alignContent:"center"}}>Trending Videos</Text>:
            null}
          </View>
        <View style={{flex:1}}>
          <FlatList
           data={carddata}
           renderItem={(item)=>{
               //console.log(item)
               return(
                item.item.snippet?
               <Card title={item.item.snippet.title} 
                channelname={item.item.snippet.channelTitle}
                videoid={item.item.id.videoId}
               />:null
               )
           }}
          keyExtractor={(items)=>{
              return(
                  items?items.id?items.id.videoId?items.id.videoId:null:null:null
              )
          }}
           />
          </View>
          
    </View>
)

}

export default Explore;