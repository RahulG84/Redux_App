/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SheduleItem from '../components/sheduleitem/SheduleItem';
import ShippingCarts from '../components/cart/ShippingCarts';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toChangeTheme} from '../redux/shoesRedux/actions/Actions';

const Stack = createNativeStackNavigator();

const ProtectedNavigation = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.ThemeReducer);
  console.log('theme', theme);
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
        options={{
          headerShown: true,
          title: 'Checkout',
          headerRight: () => (
            <Button
              onPress={() => {
                if (theme === false) {
                  dispatch(toChangeTheme(true));
                } else {
                  dispatch(toChangeTheme(false));
                }
              }}
              title={theme === false ? 'Dark' : 'White'}
              color="green"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProtectedNavigation;
