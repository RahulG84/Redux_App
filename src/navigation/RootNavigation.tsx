import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedNavigation from './ProtectedNavigation';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <ProtectedNavigation />
    </NavigationContainer>
  );
}
