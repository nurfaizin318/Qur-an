import React, { useEffect, useState } from 'react';
import surah from '../../Data/List/data.json';

import {
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableNativeFeedback,


} from 'react-native';
import {color } from '../../Utils'
import {
    Al_fatihah,
    Al_Baqarah,
    Ali_Imran,
    An_Nisaa,
    Al_Maidah,
    al_Anam,
    Al_Araf,
    At_Alanfaal,
    At_Taubah,
    Yunus,
    Huud,
    Yusuf,
    Ar_Radu,
    Ibrahim,
    Al_Hijr,
    An_Nahl,
    Al_Israa,
    Al_Kahfi,
    Maryam,
    Thaahaa,
    Al_Anbiyaa,
    Al_Hajj,
    Al_Muminun,
    An_Nuur,
    Al_Furqaan,
    Asy_Syuara,
    An_Naml,
    Al_Qashash,
    Al_Ankabut,
    Ar_Ruum,
    Luqman,
    As_Sajdah,
    Al_Ahzab,
    Saba,
    Faathir,
    Yaa_Siin,
    Ash_Shaaffat,
    Shaad,
    Az_Zumar,
    Al_Ghaafir,
    Al_Fushilat,
    Asy_Syuura,
    Ad_Dukhaan,
    Al_Jaatsiyah,
    Al_Ahqaaf,
    Muhammad,
    Al_Hujuraat,
    Al_Fath,
    Qaaf,
    Adz_Dzaariyaat,
    Ath_Thuur,
    An_Najm,
    Al_Qamar,
    Ar_Rahmaan,
    Al_Waaqiah,
    Al_Hadiid,
    Al_Mujaadalah,
    Al_mumtahanah,
    Al_Hasyr,
    Ash_Shaff,
    Al_Jumuah,
    Al_Munafiqun,
    Ath_Taghabun,
    Ath_Thalaaq,
    At_Tahriim,
    Al_Mulk,
    Al_Qalam,
    Al_Haaqqah,
    Al_Maaarij,
    Nuh,
    Al_Jin,
    Al_Muzammil,
    Al_Muddastir,
    Al_Qiyaamah,
    Al_Insaan,
    Al_Mursalaat,
    An_Naba,
    An_Naaziat,
    Abasa,
    // At_Takwiir,
    Al_Infithar,
    Al_Muthaffifin,
    Al_Insyiqaq,
    Al_Buruuj,
    Ath_Thariq,
    Al_Alaa,
    Al_Ghaasyiah,
    Al_Fajr,
    Al_Balad,
    Asy_Syams,
    Al_Lail,
    Adh_Dhuhaa, Asy_Syarh,
    At_Tiin,
    Al_Alaq,
    Al_Qadr,
    Al_Bayyinah,
    Az_Zalzalah,
    Al_Aadiyah,
    Al_Qaariah,
    At_Takaatsur,
    //  Al_Ashr,
    Al_Humazah,
    Al_Fiil,
    Quraisy,
    Al_Maauun,
    Al_Kautsar,
    aAl_Kafirun,
    An_Nashr,
    Al_Lahab,
    Al_Ikhlash,
    aAl_Falaq,
    An_Naas
} from '../../Data/index';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Home = (props) => {

    const list = Object.values(surah)
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [data, setData] = useState({})
    
    const draft = [Al_fatihah,
        Al_Baqarah,
        Ali_Imran,
        An_Nisaa,
        Al_Maidah,
        al_Anam,
        Al_Araf,
        At_Alanfaal,
        At_Taubah,
        Yunus,
        Huud,
        Yusuf,
        Ar_Radu,
        Ibrahim,
        Al_Hijr,
        An_Nahl,
        Al_Israa,
        Al_Kahfi,
        Maryam,
        Thaahaa,
        Al_Anbiyaa,
        Al_Hajj,
        Al_Muminun,
        An_Nuur,
        Al_Furqaan,
        Asy_Syuara,
        An_Naml,
        Al_Qashash,
        Al_Ankabut,
        Ar_Ruum,
        Luqman,
        As_Sajdah,
        Al_Ahzab,
        Saba,
        Faathir,
        Yaa_Siin,
        Ash_Shaaffat,
        Shaad,
        Az_Zumar,
        Al_Ghaafir,
        Al_Fushilat,
        Asy_Syuura,
        Ad_Dukhaan,
        Al_Jaatsiyah,
        Al_Ahqaaf,
        Muhammad,
        Al_Hujuraat,
        Al_Fath,
        Qaaf,
        Adz_Dzaariyaat,
        Ath_Thuur,
        An_Najm,
        Al_Qamar,
        Ar_Rahmaan,
        Al_Waaqiah,
        Al_Hadiid,
        Al_Mujaadalah,
        Al_mumtahanah,
        Al_Hasyr,
        Ash_Shaff,
        Al_Jumuah,
        Al_Munafiqun,
        Ath_Taghabun,
        Ath_Thalaaq,
        At_Tahriim,
        Al_Mulk,
        Al_Qalam,
        Al_Haaqqah,
        Al_Maaarij,
        Nuh,
        Al_Jin,
        Al_Muzammil,
        Al_Muddastir,
        Al_Qiyaamah,
        Al_Insaan,
        Al_Mursalaat,
        An_Naba,
        An_Naaziat,
        Abasa,
        // At_Takwiir,
        Al_Infithar,
        Al_Muthaffifin,
        Al_Insyiqaq,
        Al_Buruuj,
        Ath_Thariq,
        Al_Alaa,
        Al_Ghaasyiah,
        Al_Fajr,
        Al_Balad,
        Asy_Syams,
        Al_Lail,
        Adh_Dhuhaa, Asy_Syarh,
        At_Tiin,
        Al_Alaq,
        Al_Qadr,
        Al_Bayyinah,
        Az_Zalzalah,
        Al_Aadiyah,
        Al_Qaariah,
        At_Takaatsur,
        //  Al_Ashr,
        Al_Humazah,
        Al_Fiil,
        Quraisy,
        Al_Maauun,
        Al_Kautsar,
        aAl_Kafirun,
        An_Nashr,
        Al_Lahab,
        Al_Ikhlash,
        aAl_Falaq,
        An_Naas];

    useEffect(() => {

        setData(list)

    }, [])
    return (
        <View style={{ ...styles.container, height: height, width: width, }}>
            <View style={{ ...styles.header.container, width: width }}>
                <Text style={styles.header.text}>    Surah : </Text>
            </View>
            <FlatList
                maxToRenderPerBatch={5}
               showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) =>

                    <TouchableHighlight
                        onPress={() => props.navigation.navigate("Surah", { title: item.nama, value: draft[index] })}
                    >
                        <View style={{ ...styles.item.container, width: width, height: height / 10, }} >
                            <View style={styles.item.childLeft}>
                                <Text style={{ fontSize: 16 }}>{item.nomor}.  {item.nama}</Text>

                            </View>
                            <View style={styles.item.childRight}>
                                <Text style={{ fontSize: 20 }}>{item.asma}</Text>
                            </View>

                        </View>
                    </TouchableHighlight>
                }
                keyExtractor={items => items.nomor}
            />
        </View>
    )
};

export default Home;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:color.green3

    },
    header: {
        container: {
            height: 30,
            backgroundColor: color.green2,
            justifyContent: "center",
            paddingHorizontal: 15,
            alignItems: "center"
        },
        text: {
            fontSize: 15,
            color: color.green1,
            fontWeight: 'bold'
        }
    },
    item: {
        container: {
            backgroundColor:color.green3,
            borderBottomColor: '#004D40',
            borderBottomWidth: 0.3,
            justifyContent: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        childLeft: {
            height: '100%',
            width: '60%',
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: 20,
        },
        childRight: {
            height: '100%',
            width: '40%',
            justifyContent: "center",
            alignItems: "center",
        }
    }
}