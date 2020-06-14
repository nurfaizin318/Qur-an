import React from 'react';
import surah from '../../Data/List/surah.json'
import {
    Text,
    View,
    Dimensions,
    FlatList,
    Button,
    ScrollView

} from 'react-native';
 


const Home = () =>{
    console.log(surah.data)
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return(
        <View style={{...styles.container,   height:height, width:width,}}>
            <ScrollView>
               {surah.data.map(data=>{
                   return (
                       <View style={{width:width,height:height/8,backgroundColor:'#FFE8E1',borderBottomColor:"#BF360C",borderBottomWidth:1,justifyContent:"center",paddingHorizontal:10}}>
                            <Text style={{fontSize:23 ,color:"brown"}}>{data.number}.{data.englishName}</Text>
                       </View>
                   )
               })}
            </ScrollView>
        </View>
    )
};

export default Home;

const styles ={
    container:{
     
        flex:1,
        backgroundColor:"white",
        alignItems:'center',

    }
}