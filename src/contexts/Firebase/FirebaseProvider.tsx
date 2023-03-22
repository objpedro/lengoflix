import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContex";
import { IFirebaseProvider } from "../../dto/contexts/iFirebaseProvider";
import { User } from '../../dto/domain/User';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import { VerifyErroCode } from "../../utils/VerifyErroCode";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../User/UserContext";

export function FirebaseProvider(props) {
    const [load, setLoad] = useState<boolean>(false);
    const [authStateChanged, setAuthStateChanged] = useState<FirebaseAuthTypes.User | null>(null);
    const [errorFirebase, setErrorFirebase] = useState<string>('');
    const navigation = useNavigation();
    const userContext = useContext(UserContext);
    const reference = firebase.app().database().ref('/users')

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(_user => {
            setAuthStateChanged(_user);
        })

        return unsubscribe;
    }, [])

    const FirebaseValue: IFirebaseProvider = {
        load,
        setLoad,
        errorFirebase,
        setErrorFirebase,
        authStateChanged,
        setAuthStateChanged,
        handleSignIn: async (data: User) => {
            setLoad(true);
            await auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then((userCredential: FirebaseAuthTypes.UserCredential) => {
                    userContext.getUser(userCredential.user.uid);
                    setErrorFirebase('')
                    navigation.navigate('Home');
                    setLoad(false);
                })
                .catch(error => {
                    setErrorFirebase(VerifyErroCode(error.code))
                    setLoad(false);
                });
        },
        handleSignUp: async (data: User) => {
            setLoad(true);
            await auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential: FirebaseAuthTypes.UserCredential) => {
                    reference
                        .child(userCredential.user.uid)
                        .set({
                            name: data.userName
                        });
                    userContext.getUser(userCredential.user.uid);
                    setErrorFirebase('')
                    navigation.navigate('Home', { uid: userCredential.user.uid });
                    setLoad(false);
                })
                .catch(error => {
                    setErrorFirebase(VerifyErroCode(error.code))
                    setLoad(false);
                })
        },
        handleSignOut: async () => {
            auth().signOut()
            setAuthStateChanged(null)
        },
    }

    return (
        <FirebaseContext.Provider value={FirebaseValue}>
            {props.children}
        </FirebaseContext.Provider>
    )
}