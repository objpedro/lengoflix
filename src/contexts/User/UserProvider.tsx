import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { IUserProvider } from "../../dto/contexts/iUserProvider";
import { firebase } from '@react-native-firebase/database';

export function UserProvider(props) {
    const [load, setLoad] = useState<boolean>(false);
    const [user, setUser] = useState<string>('');
    const reference = firebase.app().database()

    const UserValue: IUserProvider = {
        load,
        setLoad,
        user,
        setUser,
        getUser: async (uid: string) => {
            setLoad(true);
            await reference
                .ref(`/users/${uid}`)
                .on('value', snapshot => {
                    setUser(snapshot.val().name)
                });
            setLoad(false);
        }
    }

    return (
        <UserContext.Provider value={UserValue}>
            {props.children}
        </UserContext.Provider>
    )
}