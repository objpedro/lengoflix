import React from "react";
import { Text } from 'react-native';
import styles from "./styles";

export function DateFormat(date: string) {

    function usToBr(date: string) {
        const inputDate = String(date.date).replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
        return inputDate;
    }

    return <>
        <Text style={styles.releaseDate}>{usToBr(date)}</Text>
    </>
}