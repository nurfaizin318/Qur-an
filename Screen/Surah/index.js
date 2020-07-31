import React,{memo} from 'react';
import { View, Text, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import {color} from '../../Utils'

const Surah = (props) => {

    const width = Dimensions.get('window').width;
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        setData(props.route.params.value);
    }, [])

    const Child = memo(()=>{
            return (
               
                <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) =>
                    <View >
                       
                        <View style={{ width: width,...styles.item.container }} >
                            <View style={styles.item.childTop}>
                                <View style={{ width: '92%', }}>
                                    <Text style={{ fontSize: 20, fontWeight:'bold',letterSpacing:2 }}> {item.ar}</Text>
                                </View>
                                <View style={{ width: '8%' }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}> .{item.nomor}</Text>
                                </View>
                            </View>
                            <Text style={{ marginVertical: 20 }}>{item.id}</Text>
                        </View>
                    </View>
                }
                keyExtractor={items => items.nomor}
            />
            )
    })
    return (
        <View style={styles.container}>
             <View style={{width:width,height:40,...styles.item.container,alignItems:"center",backgroundColor:color.green1}}>
             <Text style={{fontSize:20,alignSelf:'center',color:"white",marginBottom:10}}>
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </Text>
                </View>
            <Child />
        </View>
    )
}

export default Surah;

const styles = {
    container:{
        flex: 1, 
        backgroundColor:color.yellow.cream, 
        justifyContent: "center",
        alignItems: "center",
    },
    item:{
       container:{

        backgroundColor: color.yellow.cream,
        borderBottomColor: color.green1, 
        borderBottomWidth: 0.3, 
        paddingHorizontal: 10, 
        justifyContent: "center" 
       },
       childTop:{
        width: '100%', 
        justifyContent: "space-between",
         flexDirection: "row", 
         marginTop: 20,
       }
    }

}