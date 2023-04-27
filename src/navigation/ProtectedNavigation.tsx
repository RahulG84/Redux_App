import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SheduleItem from '../components/sheduleitem/SheduleItem';
import ShippingCarts from '../components/cart/ShippingCarts';

const Stack = createNativeStackNavigator();

const ProtectedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SheduleItem">
      <Stack.Screen
        name="SheduleItem"
        component={SheduleItem}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShippingCarts"
        component={ShippingCarts}
        options={{headerShown: true, title: 'Checkout'}}
      />
    </Stack.Navigator>
  );
};

export default ProtectedNavigation;
