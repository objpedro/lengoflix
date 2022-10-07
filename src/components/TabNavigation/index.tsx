import React from "react";
import { Image, ImageURISource, View } from 'react-native';
import { styles } from "./style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

interface ItemTabNavigatorParam {
    titulo: string;
    page: React.FC<{}>;
    icone: ImageURISource;
    id?: string;
}

interface TabNavigatorParam {
    itens: ItemTabNavigatorParam[];
}

function renderIcons(item: ItemTabNavigatorParam, focused: boolean) {
    switch (item.titulo) {
        case 'Filmes':
            return <Image
                source={item.icone}
                resizeMode={'contain'}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 26,
                    height: 26,
                    tintColor: focused ? '#FFFFFF' : '#000000',
                }}
            />
        case 'Filtro':
            return <Image
                source={item.icone}
                resizeMode={'contain'}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#FFFFFF' : '#000000',
                }}
            />
        case 'Perfil':
            return <Image
                source={item.icone}
                resizeMode={'contain'}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#FFFFFF' : '#000000',
                }}
            />
        default:
            return <Image
                source={item.icone}
                resizeMode={'contain'}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    tintColor: focused ? '#FFFFFF' : '#000000',
                }}
            />
    }
}

function montaTabs(param: TabNavigatorParam) {
    return param.itens.map(item => {
        return (
            <Tab.Screen
                name={item.titulo}
                component={item.page}
                key={item.titulo}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={styles.containerTabNavigation}
                            accessibilityLabel={item.id}
                        >
                            {renderIcons(item, focused)}
                        </View>
                    ),
                }}
            />
        )
    })
}

function TabNavigator(param: TabNavigatorParam) {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: '#F25017',
                        elevation: 1,
                    },
                    tabBarHideOnKeyboard: true
                }}>
                {montaTabs(param)}
            </Tab.Navigator>
        </>
    )
}

export { TabNavigator };