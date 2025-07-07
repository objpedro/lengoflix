import React from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from "./styles";
import { TabView } from "../../components/TabView";
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';

export function Sign() {
    return (
        <View style={styles.container}>
            <View style={styles.iconBackground}>
                <Image style={{
                    resizeMode: 'center',
                    width: 90,
                    height: 90,
                }}
                source={require('../../assets/the_movie_db_logo.png')} />
            </View>

            <View style={{
                flex: 1,
            }}>
                <TabView
                    itens={[
                        { name: 'SignIn', component: SignIn, },
                        { name: 'SignUp', component: SignUp, },
                    ]} />
            </View>
        </View>
    )
}