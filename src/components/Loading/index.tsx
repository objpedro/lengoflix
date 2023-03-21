import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../utils/color';

interface Props {
  isVisible: boolean,
  size: number,
}

export function Loading({ isVisible, size }: Props) {
  return (
    isVisible &&
    <ActivityIndicator
      size={size}
      color={colors.branco}
    />
  )
}

