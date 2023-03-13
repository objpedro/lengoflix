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

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.txt}>Olá Episodes</Text>
            </View>
        </>
    )
}