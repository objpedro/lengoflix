import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Loading } from '../Loading';
import colors from '../../utils/color';

interface Props {
    onPress: React.FC<{}>,
    txtButton: string,
    isLoading: boolean,
}

export function CustomButton({ txtButton, isLoading }: Props) {
    return (
        <>
            <TouchableOpacity>
                <Text>
                    {txtButton}
                </Text>
            </TouchableOpacity>
        </>
    )
}

