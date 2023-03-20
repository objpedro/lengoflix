import React from "react";
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

export function SignUp() {
    const navigation = useNavigation();
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignUp)
    })

    function handleSignup(data) {
        console.log(data);
        navigation.navigate('Home');
        reset();
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
            {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

            <TouchableOpacity
                style={styles.btnCadastrar}
                onPress={handleSubmit(handleSignup)}>
                <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}