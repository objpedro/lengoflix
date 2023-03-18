import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { useForm, Controller } from 'react-hook-form'
import { TextField } from "../../components/TextField";

export function SignUp() {

    const { control, handleSubmit, formState: { errors } } = useForm({})

    function handleSignup(data) {
        console.log(data);
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

            <Controller
                control={control}
                name="senha"
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

            <TouchableOpacity
                style={styles.btnCadastrar}
                onPress={handleSubmit(handleSignup)}>
                <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}