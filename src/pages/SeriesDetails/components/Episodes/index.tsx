import React, { } from "react";
import {
    Text,
    View,
    FlatList,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";


export function Episodes(visibility: boolean) {
    console.log(visibility.visibility)

    return (
        <>
            {
                visibility.visibility &&
                <Text style={styles.txt}>Lista de Episódios</Text>
            }
        </>
    )
}