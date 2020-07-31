import React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { color } from '../../Utils/index';
import img from '../../assets/images/islami.png'
import { TouchableHighlight } from 'react-native-gesture-handler';


const Menu = (props) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View style={{ flex: 1, height: height }}>
            <View style={{ width: width, height: height , backgroundColor: "#00695C" }}>
                <View style={{ width: width, height: 90, alignItems: "center", paddingTop: 20, }}>
                    <Text style={{ color: "#FBC02D", fontWeight: "bold", fontSize: 20 }}>
                        Welcome To Islami App
                    </Text>
                    <Image source={img} style={{ width: width, height: 300 }} />

                    <View style={{width:width,height:height/2.2}}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10,paddingHorizontal:10,paddingVertical:20}}>
                    <View>
                    <TouchableOpacity style={{width:100,height:100,borderWidth:1,borderColor:"#FF9800",borderRadius:10,justifyContent:"center",alignItems:"center"}}
                    onPress={()=>props.navigation.navigate('Home')}
                    >
                        <Text style={{color:"white"}}>Icon</Text>
                    </TouchableOpacity>
                    <View >
                     <Text style={{alignSelf:"center",marginTop:5,letterSpacing:2,color:"white"}}>Al-Qur'an</Text>
                    </View>
                    </View>

                    <View>
                    <TouchableOpacity style={{width:100,height:100,borderWidth:1,borderColor:"#FF9800",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white"}}>Icon</Text>
                    </TouchableOpacity>
                    <View >
                     <Text style={{alignSelf:"center",marginTop:5,letterSpacing:2,color:"white"}}>Hadist</Text>
                    </View>
                    </View>

                    <View>
                    <TouchableOpacity style={{width:100,height:100,borderWidth:1,borderColor:"#FF9800",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white"}}>Icon</Text>
                    </TouchableOpacity>
                    <View >
                     <Text style={{alignSelf:"center",marginTop:5,letterSpacing:2,color:"white"}}>Fikih</Text>
                    </View>
                    </View>

                     </View>

                     <View style={{ flexDirection: "row", justifyContent: "space-between",paddingHorizontal:10}}>
                    <View>
                    <TouchableOpacity style={{width:100,height:100,borderWidth:1,borderColor:"#FF9800",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white"}}>Icon</Text>
                    </TouchableOpacity>
                    <View >
                     <Text style={{alignSelf:"center",marginTop:5,letterSpacing:1,color:"white"}}>Cara Baca</Text>
                    </View>
                    </View>

                    <View>
                    <TouchableOpacity style={{width:100,height:100,borderWidth:1,borderColor:"#FF9800",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white"}}>Icon</Text>
                    </TouchableOpacity>
                    <View >
                     <Text style={{alignSelf:"center",marginTop:5,letterSpacing:1,color:"white"}}>Putar Surah</Text>
                    </View>
                    </View>

                    <View>
                    <TouchableOpacity style={{width:100,height:100,borderWidth:1,borderColor:"#FF9800",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white"}}>Icon</Text>
                    </TouchableOpacity>
                    <View >
                     <Text style={{alignSelf:"center",marginTop:5,letterSpacing:1,color:"white"}}>Pengaturan</Text>
                    </View>
                    </View>

                     </View>

                     </View>


                    
            <View style={{width:width,height:40,alignItems:"center",justifyContent:"center"}}>
                {/* <Text style={{color:"white"}}>created by : Faiz </Text> */}
            </View>
            </View>

           

            </View>

        </View>
    );
}

export default Menu;
