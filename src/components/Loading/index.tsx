import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../utils/color';

interface Props {
  isVisible: boolean,
}

export function Loading({ isVisible }: Props) {
  return (
    isVisible &&
    <ActivityIndicator
      size="large"
      color={colors.branco}
    />
  )
}

