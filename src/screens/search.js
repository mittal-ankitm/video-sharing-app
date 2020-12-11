import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Button,
  Text,TextInput,FlatList,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../components/minicard'
import Constant from 'expo-constants'

import {useSelector,useDispatch} from 'react-redux'

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=query&type=video&key=APIKey
const Search=({navigation})=>{
    const [val,setval] =useState("")
    //const [datav,setdata]=useState([])
    const dispatch=useDispatch()
    const datav=useSelector(state=>{
        return state;
    })
    const [a,seta]=useState(false)
    const arr=[1,2,3,4,5]
    const fetchdata=()=>{
        
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${val}&type=video&key=APIKey`,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(d=>{
            
            //setdata(d.items)
            dispatch({type:"add",payload:d.items})

            seta(false);
        }).catch(err=>console.log(err))
    }
return (
    <View style={{flex:1,marginTop:Constant.statusBarHeight,}}>
        <View style={{
            padding:5,
            flexDirection:"row",
            justifyContent:"space-around",
            elevation:5,
            backgroundColor:"white"
        }}>
        <Ionicons onPress={()=>navigation.goBack()}
             name="md-arrow-back" size={32} color="black" />

        <TextInput style={{
            width:"70%",
            height:50,
            fontSize:15,
            backgroundColor:"#e6e6e6"
        }} value={val}
        onChangeText={(text)=>setval(text)}
        />
        <Ionicons
             name="md-send" size={32} color="black" onPress={()=>fetchdata()} />
            
       
        </View>
            <View style={{flex:1,width:"90%"}}>
           <FlatList
           data={datav}
           renderItem={(item)=>{
               //console.log(item)
               return(
                item.item.snippet?
               <MiniCard title={item.item.snippet.title} 
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

export default Search;
