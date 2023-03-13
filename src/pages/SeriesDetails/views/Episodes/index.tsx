import React, { useState, useContext, useEffect } from "react";
import {
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { SeriesDetailsContext } from "../../../../contexts/SeriesDetails/SeriesDetailsContex";
import { styles } from "./styles";

interface Props {
    serieId: number,
    seasonNumber: number,
    seasonName: string,
    episodeCount: number,
}

export function Episodes({
    serieId,
    seasonNumber,
    seasonName,
    episodeCount,
}: Props) {
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        seriesDetailsContext.getEpisodes(serieId, 1)
    }, [])

    return (
        <>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    if (
                        seasonNumber !== seriesDetailsContext.episodes.season_number
                    ) {
                        setVisible(true)
                    } else {
                        setVisible(!visible)
                    }
                    seriesDetailsContext.getEpisodes(serieId, seasonNumber)
                }} >
                <Text style={styles.seasonName}>{seasonName}</Text>
                <Text style={styles.epCount}>{episodeCount}</Text>
            </TouchableOpacity>
            {
                (seasonNumber == seriesDetailsContext.episodes.season_number && visible === true)
                &&
                <FlatList
                    style={styles.episodeList}
                    data={seriesDetailsContext.episodes.episodes}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Text style={{
                            color: 'white'
                        }}>{item.name}</Text>
                    )}
                />
            }
        </>
    )
}