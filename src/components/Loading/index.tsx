import Spinner from 'react-native-loading-spinner-overlay';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    },
  });

export default function Loading(props){
    return (
        <Spinner
            visible={props.visibility}
            textContent={'Carregando...'}
            textStyle={styles.spinnerTextStyle}
            overlayColor={'rgba(0, 0, 0, 0.75)'}
        />
    )
}

