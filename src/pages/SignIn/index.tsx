import React, { useContext, } from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from "@react-navigation/native";
import { TextField } from "../../components/TextField";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSignIn } from "../../utils/schemaSignIn";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContex";
import { User } from "../../dto/domain/User";
import { CustomButton } from "../../components/CustomButton";

export function SignIn() {
    const navigation = useNavigation();
    const firebaseContext = useContext(FirebaseContext);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignIn)
    })

    function handleSignIn(data: User) {
        firebaseContext.handleSignIn(data)
    }

    return (
        <View style={styles.container}>
            {/* <>
                {firebaseContext.authStateChanged && navigation.navigate('Home')}
            </> */}
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
            {firebaseContext.errorFirebase && <Text style={styles.labelError}>{firebaseContext.errorFirebase}</Text>}
            <View style={styles.forgotPassword}>
                <CustomButton
                    onPress={handleSubmit(handleSignIn)}
                    txtButton={'Logar'}
                    isLoading={firebaseContext.load} />
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