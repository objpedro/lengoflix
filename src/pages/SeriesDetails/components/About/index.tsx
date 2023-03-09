import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import styles from "./styles";

export function About(originalName, genres, networks, urlImage, overview) {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloOriginal}>Titulo original: {originalName}</Text>
            <View style={styles.genresContainer}>
                <FlatList
                    data={genres}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Text style={styles.genres}>{item.name} • </Text>
                    )}
                />
            </View>
            <View style={styles.networksContainer}>
                <FlatList
                    data={networks}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.containerLogo}>
                            <Image
                                source={{ uri: `${urlImage}${item.logo_path}` }}
                                style={styles.networks} />
                        </View>
                    )}
                />
            </View>
            <Text style={styles.descricao}>{overview}</Text>
        </View>
    )
}