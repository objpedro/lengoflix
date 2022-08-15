import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export function FooterList({ load }) {
    if (!load) return null;

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ActivityIndicator size="small" color="#fff" />
        </View>
    )
}