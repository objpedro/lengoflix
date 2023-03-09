import React from "react";
import { Text } from 'react-native';
import styles from "./styles";

export function RunTime(runtime: number) {

    function minutesToHm(runtime: number) {
        let entrada = runtime.runtime;
        entrada = Number(entrada);
        var h = Math.floor(entrada / 60);
        var m = Math.floor(entrada % 60);

        var hDisplay = h > 0 ? h + 'h ' : "";
        var mDisplay = m > 0 ? m + 'm' : "";
        return hDisplay + mDisplay;
    }

    return <>
        <Text style={styles.txtHours}>{minutesToHm(runtime)}</Text>
    </>
}