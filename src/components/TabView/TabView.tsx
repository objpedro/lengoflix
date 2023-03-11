import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { About } from '../../pages/SeriesDetails/components/About';
import { Episodes } from '../../pages/SeriesDetails/components/Episodes';

const FirstRoute = () => (
    <About />
);

const SecondRoute = () => (
    <Episodes />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Sobre' },
        { key: 'second', title: 'Episódios' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}