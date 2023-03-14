import React, { useState, useContext, useEffect } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { RunTime } from "../../../../components/Runtime/Runtime";
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
    const urlImage = 'https://image.tmdb.org/t/p/original/';

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
                        <TouchableOpacity style={{
                            borderRadius: 5,
                            marginBottom: 10,
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                        }}>
                            <Image
                                style={{
                                    width: 90,
                                    height: 90,
                                    resizeMode: 'cover',
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                }}
                                source={{ uri: `${urlImage}${item.still_path}` }}
                            />
                            <View style={{
                                padding: 10,
                                justifyContent: 'center',
                                width: '80%'
                            }}>
                                <Text style={{ color: 'black' }}>{item.episode_number}. {item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            }
        </>
    )
}