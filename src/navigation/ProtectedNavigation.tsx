/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SheduleItem from '../components/sheduleitem/SheduleItem';
// import ShippingCarts from '../components/cart/ShippingCarts';
import {Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  toChangeLanguage,
  toChangeTheme,
} from '../redux/shoesRedux/actions/Actions';
import {Languages} from '../constant/Languages';
import SheduleItem from '../reduxToolKit/src/components/productItem/ProductsItems';
import ShippingCarts from '../reduxToolKit/src/components/checkoutItem/CheckoutItem';

const Stack = createNativeStackNavigator();

const ProtectedNavigation = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.ThemeReducer);
  const language = useSelector((state: any) => state.LanguageReducer);
  console.log('language', language);
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
            <View style={{flexDirection: 'row'}}>
              <Button
                onPress={() => {
                  if (theme === false) {
                    dispatch(toChangeTheme(true));
                  } else {
                    dispatch(toChangeTheme(false));
                  }
                }}
                // title={theme === false ? 'Dark' : 'White'}
                title={
                  language === 'ENGLISH'
                    ? Languages[0].HINDI
                    : Languages[0].ENGLISH
                }
                color="green"
              />
              <Button
                onPress={() => {
                  if (language === 'ENGLISH') {
                    dispatch(toChangeLanguage('HINDI'));
                  } else {
                    dispatch(toChangeLanguage('ENGLISH'));
                  }
                }}
                title={'Change Language'}
                color="green"
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProtectedNavigation;
