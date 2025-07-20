import React from 'react';
import { Image, ImageURISource, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles } from './style';
import colors from '../../utils/color';

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

function TabIcon({
  item,
  focused,
}: {
  item: ItemTabNavigatorParam;
  focused: boolean;
}) {
  const labelMap: Record<string, string> = {
    Movies: 'Filmes',
    Filtro: 'Filtro',
    Series: 'Series',
  };

  const label = labelMap[item.titulo] || 'Default';
  const color = focused ? colors.whiteBlue : colors.preto;

  // Nome e icone
  return (
    <>
      <Image
        source={item.icone}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          tintColor: color,
        }}
      />
      <Text style={{ fontSize: RFValue(8), color }}>{label}</Text>
    </>
  );
}

function montaTabs({ itens }: TabNavigatorParam) {
  return itens.map(item => (
    <Tab.Screen
      key={item.titulo}
      name={item.titulo}
      component={item.page}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={styles.containerTabNavigation}
            accessibilityLabel={item.id}
          >
            <TabIcon item={item} focused={focused} />
          </View>
        ),
        headerShown: false,
      }}
    />
  ));
}

function TabNavigator({ itens }: TabNavigatorParam) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.azul,
          elevation: 1,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      {montaTabs({ itens })}
    </Tab.Navigator>
  );
}

export { TabNavigator };
