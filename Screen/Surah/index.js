import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import {color} from '../../Utils'

const Surah = (props) => {

    const width = Dimensions.get('window').width;
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        setData(props.route.params.value);
    }, [])
    return (
        <View style={styles.contsiner}>
            <FlatList
                windowSize={10}
                legacyImplementation={true}
                maxToRenderPerBatch={1}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) =>
                    <View >
                        <View style={{ width: width,...styles.item.container }} >
                            <View style={styles.item.childTop}>
                                <View style={{ width: '92%', }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}> {item.ar}</Text>
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
        </View>
    )
}

export default Surah;

const styles = {
    contsiner:{
        flex: 1, 
        backgroundColor:color.green3, 
        justifyContent: "center",
         alignItems: "center" 
    },
    item:{
       container:{
        backgroundColor: color.green3,
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