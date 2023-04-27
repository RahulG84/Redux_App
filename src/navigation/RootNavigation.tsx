import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ProtectedNavigation from './ProtectedNavigation';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <ProtectedNavigation />
    </NavigationContainer>
  );
}
