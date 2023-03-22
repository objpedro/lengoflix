import React, { useContext } from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { useForm, Controller } from 'react-hook-form'
import { TextField } from "../../components/TextField";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignUp } from "../../utils/schemaSignUp";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContex";
import { User } from "../../dto/domain/User";
import { CustomButton } from '../../components/CustomButton';

export function SignUp() {
    const firebaseContext = useContext(FirebaseContext);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignUp)
    })

    function handleSignup(data: User) {
        if (data.confirmPassword !== data.password) {
            firebaseContext.setErrorFirebase('Senhas não combinam')
        } else {
            firebaseContext.handleSignUp(data)
            reset();
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
            {firebaseContext.errorFirebase && <Text style={styles.labelError}>{firebaseContext.errorFirebase}</Text>}
            <CustomButton
                onPress={handleSubmit(handleSignup)}
                txtButton={'Cadastrar'}
                isLoading={firebaseContext.load} />
        </View>
    )
}