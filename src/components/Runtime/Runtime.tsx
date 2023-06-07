import React from "react";
import { Text } from 'react-native';
import styles from "./styles";

export function RunTime(runtime: number) {

    function minutesToHm(runtime: number) {
        let entrada = Number(runtime.runtime);
        let h = Math.floor(entrada / 60);
        let m = Math.floor(entrada % 60);

        let hDisplay = h > 0 ? h + 'h ' : "";
        let mDisplay = m > 0 ? m + 'm' : "";
        return hDisplay + mDisplay;
    }

    return <>
        <Text style={styles.txtHours}>{minutesToHm(runtime)}</Text>
    </>
}