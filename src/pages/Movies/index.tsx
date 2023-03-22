import React, { useContext, useEffect } from "react";
import { ScrollView, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Lancamentos } from "./components/Lancamentos";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContex";
import { UserContext } from "../../contexts/User/UserContext";
import styles from "./styles";

export function Movies() {
    const navigation = useNavigation()
    const firebaseContext = useContext(FirebaseContext);
    const userContext = useContext(UserContext);

    return (
        <SafeAreaView style={styles.nameUserContainer}>
            <>
                {userContext.user && <Text style={styles.nameUser}>Olá, {userContext.user}</Text>}
            </>
            <ScrollView>
                <Lancamentos />
                <TouchableOpacity
                    onPress={() => {
                        firebaseContext.handleSignOut();
                        navigation.navigate('SignIn')
                    }}
                    style={{
                        margin: 20,
                        padding: 5,
                        backgroundColor: 'blue',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: 'white'
                    }}>Deslogar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}