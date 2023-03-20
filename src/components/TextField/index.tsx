import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { Eye, EyeOff } from 'react-native-feather';
import colors from '../../utils/color';

export function TextField({ onBlur, onChange, value, placeholder, isPassword }) {

    const [passwordField, setPasswordField] = useState<boolean>(true)

    let getEyePasssword = () => {
        if (passwordField) {
            return (
                <Eye
                    width={20}
                    height={20}
                    color={colors.azul}
                />
            );
        } else {
            return (
                <EyeOff
                    width={20}
                    height={20}
                    color={colors.azul}
                />
            );
        }
    };

    return (
        <View style={styles.container}>
            {
                isPassword ?
                    <View style={styles.passwordFieldContainer}>
                        <TextInput
                            style={styles.passwordField}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}
                            secureTextEntry={passwordField}
                        />
                        <TouchableOpacity
                            style={styles.btnEye}
                            onPress={() => { setPasswordField(!passwordField) }}>
                            {getEyePasssword()}
                        </TouchableOpacity>
                    </View>
                    :
                    <TextInput
                        style={styles.inputContainer}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={false}
                    />
            }
        </View>
    )
}