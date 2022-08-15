import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export function FooterList({ load, size }) {
    if (!load) return null;

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ActivityIndicator
                size={size}
                color="#fff" />
        </View>
    )
}