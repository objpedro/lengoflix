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

//Yup
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignUp } from "../../utils/schemaSignUp";

import auth from '@react-native-firebase/auth';
import { VerifyErroCode } from "../../utils/VerifyErroCode";

interface userData {
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export function SignUp() {
    const navigation = useNavigation();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignUp)
    })
    const [errorFirebase, setErrorFirebase] = useState<string | null>(null)

    function handleSignup(data: userData) {
        if (data.confirmPassword !== data.password) {
            console.log(data)
            setErrorFirebase('Senhas não combinam')
            // user:  {"additionalUserInfo": {"isNewUser": true}, "user": {"displayName": null, "email": "wandinha.asevedi@lengoflix.com", "emailVerified": false, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "tenantId": null, "uid": "z1GA7rASMuhBCsEXDPXUjL8Bojd2"}}
        } else {
            reset();
            auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    // console.log('user: ', userCredential);
                    setErrorFirebase(null)
                    navigation.navigate('Home');
                })
                .catch(error => {
                    setErrorFirebase(VerifyErroCode(error.code))
                })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cadastrar Usuário</Text>
            <Controller
                control={control}
                name="userName"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={'Seu nome'}
                        isPassword={false}
                    />
                )}
            />
            {errors.userName && <Text style={styles.labelError}>{errors.userName?.message}</Text>}
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
            <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={'Confirmar Senha'}
                        isPassword={true}
                    />
                )}
            />
            {errors.password && <Text style={styles.labelError}>{errors.confirmPassword?.message}</Text>}
            {errorFirebase && <Text style={styles.labelError}>{errorFirebase}</Text>}

            <TouchableOpacity
                style={styles.btnCadastrar}
                onPress={handleSubmit(handleSignup)}>
                <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}