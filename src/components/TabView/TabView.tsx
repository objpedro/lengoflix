import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { About } from '../../pages/SeriesDetails/views/About';
import { Season } from '../../pages/SeriesDetails/views/Season';


const FirstRoute = () => (
    <About />
);

const SecondRoute = () => (
    <Season />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function TabViewComponent() {
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