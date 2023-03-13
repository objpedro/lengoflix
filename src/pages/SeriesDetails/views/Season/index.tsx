import React, { useContext } from "react";
import {
    View,
    FlatList,
} from 'react-native';
import { SeriesDetailsContext } from "../../../../contexts/SeriesDetails/SeriesDetailsContex";
import { Episodes } from "../Episodes";
import { styles } from "./styles";

export function Season() {
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    return (
        <View style={styles.container}>
            <FlatList
                data={seriesDetailsContext.seriesDetails.seasons}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <>
                        <Episodes
                            serieId={seriesDetailsContext.seriesDetails.id}
                            seasonNumber={item.season_number}
                            seasonName={item.name}
                            episodeCount={item.episode_count} />
                    </>
                )}
            />

        </View>
    )
}