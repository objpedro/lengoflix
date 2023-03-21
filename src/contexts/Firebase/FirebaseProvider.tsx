import React, { useState } from "react";
import { FirebaseContext } from "./FirebaseContex";
import ProviderResult from "../../dto/contexts/providerResult";
import { IFirebaseProvider } from "../../dto/contexts/iFirebaseProvider";
import { User } from '../../dto/domain/User';
import auth from '@react-native-firebase/auth';
import { VerifyErroCode } from "../../utils/VerifyErroCode";
import { useNavigation } from "@react-navigation/native";

export function FirebaseProvider(props) {
    const [load, setLoad] = useState<boolean>(false);
    const [errorFirebase, setErrorFirebase] = useState<string>('');
    const navigation = useNavigation();

    const FirebaseValue: IFirebaseProvider = {
        load,
        setLoad,
        errorFirebase,
        setErrorFirebase,
        handleSignIn: async (data: User) => {
            // console.log(data)
            setLoad(true);
            await auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(() => {
                    setErrorFirebase('')
                    navigation.navigate('Home');
                    setLoad(false);
                })
                .catch(error => {
                    // console.log(error.code)
                    setErrorFirebase(VerifyErroCode(error.code))
                    setLoad(false);
                });
        },
        handleSignUp: async (data: User) => {
            // console.log(data)
            setLoad(true);
            await auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    // console.log('user: ', userCredential);
                    setErrorFirebase('')
                    navigation.navigate('Home');
                    setLoad(false);
                })
                .catch(error => {
                    setErrorFirebase(VerifyErroCode(error.code))
                    setLoad(false);
                })
        },
    }

    return (
        <FirebaseContext.Provider value={FirebaseValue}>
            {props.children}
        </FirebaseContext.Provider>
    )
}