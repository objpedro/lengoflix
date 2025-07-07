import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { User } from "../domain/User";
import ProviderResult from "./providerResult";

interface IUserProvider {
    getUser: (uid: string) => {};

    user: string;
    setUser: (user: string) => void;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IUserProvider }