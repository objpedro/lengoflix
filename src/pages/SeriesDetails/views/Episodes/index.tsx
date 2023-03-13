import React, {
    useState,
    useContext,
    useEffect
} from "react";
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
}

export function Episodes({
    serieId,
    seasonNumber,
    seasonName,
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
                    setVisible(!visible)
                    seriesDetailsContext.getEpisodes(serieId, seasonNumber)
                }} >
                <Text style={styles.seasonName}>{seasonName}</Text>
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