import React, {
    useState,
    useEffect,
    useContext
} from "react";
import {
    Text,
    View,
    FlatList,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { EpisodesContext } from "../../../../contexts/Episodes/EpisodesContex";
import { SeriesDetailsContext } from "../../../../contexts/SeriesDetails/SeriesDetailsContex";
import { Episodes } from "../Episodes";
import { styles } from "./styles";

export function Season() {
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    const episodesContext = useContext(EpisodesContext);
    const idSerie = seriesDetailsContext.seriesDetails.id;
    const idSeason = 1;
    // const season
    const [visibility, setVisibility] = useState<boolean>(false);

    // useEffect(() => {
    //     seriesDetailsContext.getEpisodes(seriesDetailsContext.seriesDetails.id, idSeason)
    // }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={seriesDetailsContext.seriesDetails.seasons}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                setVisibility(!visibility)
                            }} >
                            <Text style={styles.txt}>{item.name}</Text>
                        </TouchableOpacity>
                    </>
                )}
            />
            {
                visibility &&
                <Episodes visibility={visibility} />
            }
        </View>
    )
}