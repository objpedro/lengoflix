import ProviderResult from "./providerResult";
import { User } from "../domain/User";

interface IFirebaseProvider {
    handleSignIn: (data: User) => {};
    handleSignUp: (data: User) => {};

    errorFirebase: string;
    setErrorFirebase: (error: string) => void;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IFirebaseProvider }