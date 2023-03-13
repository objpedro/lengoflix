import React, {
    useState,
    useEffect,
    useContext
} from "react";
import {
    Text,
    View,
    FlatList,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { SeriesDetailsContext } from "../../../../contexts/SeriesDetails/SeriesDetailsContex";
import { Episodes } from "../Episodes";
import { styles } from "./styles";

export function Season() {
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    const [visibility, setVisibility] = useState<boolean>(false);
    const [item, setItemId] = useState<number>();
    console.log(item)
    return (
        <View style={styles.container}>
            <FlatList
                data={seriesDetailsContext.seriesDetails.seasons}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                setVisibility(!visibility)
                                setItemId(item.id)
                            }} >
                            <Text style={styles.txt}>{item.name}</Text>
                        </TouchableOpacity>
                        <Episodes visibility={visibility} />
                        {/* {
                            visibility &&
                            <Episodes visibility={visibility} />
                        } */}
                    </>
                )}
            />
        </View>
    )
}