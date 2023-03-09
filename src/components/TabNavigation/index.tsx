import React from "react";
import { Image, ImageURISource, View, Text } from 'react-native';
import { styles } from "./style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/color";

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
        case 'Movies':
            return <>
                <Image
                    source={item.icone}
                    resizeMode={'contain'}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        tintColor: focused ? colors.whiteBlue : colors.preto,
                    }}
                />
                <Text style={{
                    fontSize: RFValue(12),
                    color: focused ? colors.whiteBlue : colors.preto,
                }}>Filmes</Text>
            </>
        case 'Filtro':
            return <>
                <Image
                    source={item.icone}
                    resizeMode={'contain'}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        tintColor: focused ? colors.whiteBlue : colors.preto,
                    }}
                />
                <Text style={{
                    fontSize: RFValue(12),
                    color: focused ? colors.whiteBlue : colors.preto,
                }}>Filtro</Text>
            </>
        case 'Series':
            return <>
                <Image
                    source={item.icone}
                    resizeMode={'contain'}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        tintColor: focused ? colors.whiteBlue : colors.preto,
                    }}
                />
                <Text style={{
                    fontSize: RFValue(12),
                    color: focused ? colors.whiteBlue : colors.preto,
                }}>Series</Text>
            </>
        default:
            return <>
                <Image
                    source={item.icone}
                    resizeMode={'contain'}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        tintColor: focused ? colors.whiteBlue : colors.preto,
                    }}
                />
                <Text style={{
                    fontSize: RFValue(12),
                    color: focused ? colors.whiteBlue : colors.preto,
                }}>Default</Text>
            </>
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
                    headerShown: false,
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
                        backgroundColor: colors.secundario,
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