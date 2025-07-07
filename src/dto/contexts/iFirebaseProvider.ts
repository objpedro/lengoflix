import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { User } from "../domain/User";

interface IFirebaseProvider {
    handleSignIn: (data: User) => {};
    handleSignUp: (data: User) => {};
    handleSignOut: () => {};

    errorFirebase: string;
    setErrorFirebase: (error: string) => void;

    authStateChanged: FirebaseAuthTypes.User | null;
    setAuthStateChanged: (status: FirebaseAuthTypes.User | null) => void;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IFirebaseProvider }