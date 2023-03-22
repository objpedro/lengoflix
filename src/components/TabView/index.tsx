import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { styles } from './style';

const Tab = createMaterialTopTabNavigator();

interface ItemTabViewProps {
    name: string,
    component: React.FC<{}>;
}

interface TabViewParam {
    itens: ItemTabViewProps[];
}


function renderIcons(item: ItemTabViewProps) {
    switch (item.name) {
        case 'About':
            return <View style={styles.tabBarIcon}>
                <Text style={styles.txtNameScreen}>Sobre</Text>
            </View>
        case 'Season':
            return <View style={styles.tabBarIcon}>
                <Text style={styles.txtNameScreen}>Temporadas</Text>
            </View>
        case 'SignIn':
            return <View style={styles.tabBarIcon}>
                <Text style={styles.txtNameScreen}>Login</Text>
            </View>
        case 'SignUp':
            return <View style={styles.tabBarIcon}>
                <Text style={styles.txtNameScreen}>Cadastrar</Text>
            </View>
        default:
            return <View style={styles.tabBarIcon}>
                <Text style={styles.txtNameScreen}>Default</Text>
            </View>
    }
}

function montaTabs(param: TabViewParam) {
    return param.itens.map(item => {
        return (
            <Tab.Screen
                name={item.name}
                component={item.component}
                key={item.name}
                options={{
                    tabBarIcon: () => (
                        <>
                            {renderIcons(item)}
                        </>
                    ),
                }}
            />
        )
    })
}

export function TabView(param: TabViewParam) {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabNavigator,
                    tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
                    tabBarIconStyle: styles.tabBarIcon,
                }}>
                {montaTabs(param)}
            </Tab.Navigator>
        </>
    )
}