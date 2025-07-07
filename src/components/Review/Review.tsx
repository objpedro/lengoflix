import React from "react";
import { Text } from 'react-native';
import styles from "./styles";

export function Review(review: number) {

    function voteAverage(review: number) {
        let entrada = Number(review.review);
        let voteAverageFormat = entrada.toFixed(1);
        return voteAverageFormat;
    }

    return <Text style={styles.txtHours}>{voteAverage(review)} / 10</Text>
}