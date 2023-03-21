import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from "@react-navigation/native";
import { TextField } from "../../components/TextField";
import auth from '@react-native-firebase/auth';
import { VerifyErroCode } from "../../utils/VerifyErroCode";
//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignIn } from "../../utils/schemaSignIn";

interface userData {
    email: string,
    password: string,
}

export function SignIn() {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignIn)
    })
    const [errorFirebase, setErrorFirebase] = useState<string | null>(null)

    function handleSignIn(data: userData) {
        // console.log(data);
        auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                setErrorFirebase(null)
                navigation.navigate('Home');
            })
            .catch(error => {
                // console.log(error.code)
                setErrorFirebase(VerifyErroCode(error.code))
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={'Email'}
                        isPassword={false}
                    />
                )}
            />
            {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={'Senha'}
                        isPassword={true}
                    />
                )}
            />
            {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
            {errorFirebase && <Text style={styles.labelError}>{errorFirebase}</Text>}
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={handleSubmit(handleSignIn)}>
                    <Text style={styles.txtBtnLogin}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.forgotPasswordContainer}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}>
                    <Text style={styles.txtBtnLogin}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.btnSignUp}
                onPress={() => {
                    navigation.navigate('SignUp');
                }}>
                <Text style={styles.txtBtnLogin}>Novo por aqui? Inscreva-se agora.</Text>
            </TouchableOpacity>
        </View>
    )
}