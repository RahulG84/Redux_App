import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SheduleItemData} from './SheduleItemData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  increaseCount,
} from '../../redux/shoesRedux/actions/Actions';
import {useNavigation} from '@react-navigation/native';
import {Languages} from '../../constant/Languages';

export default function SheduleItem() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addToItem = (item: any) => {
    dispatch(addItemToCart(item));
    // console.log(item);
  };

  const counterIncrease = () => {
    dispatch(increaseCount());
  };

  const count: any = useSelector((state: any) => state.CounterReducer);
  // console.log('Numbers', count);

  const theme: any = useSelector((state: any) => state.ThemeReducer);
  // console.log('theme', theme);

  const laguage = useSelector((state: any) => state.LanguageReducer);

  return (
    <>
      <View
        style={[
          styles.mainConatinerView,
          {backgroundColor: theme ? 'black' : 'white'},
        ]}>
        <View style={styles.headerView}>
          <View style={styles.startHeaderView}>
            <Text style={styles.titleText}>
              {laguage === 'ENGLISH'
                ? Languages[1].HINDI
                : Languages[1].ENGLISH}
            </Text>
          </View>

          <View style={styles.endHeaderView}>
            <TouchableOpacity
              style={styles.shopingView}
              onPress={() => navigation.navigate('ShippingCarts')}>
              <MaterialIcons name="shopping-cart" size={30} color={'black'} />
              <Text style={styles.countingText}>{count.counter}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={SheduleItemData}
          // keyExtractor={item => item.shoesNumber}
          renderItem={({item}) => (
            <View style={styles.containerView}>
              <View style={styles.itemView}>
                <Text style={styles.serialText}>{item.shoesNumber}</Text>
                <Text style={styles.costText}>INR {item.shoesCost}</Text>
                <TouchableOpacity
                  style={styles.buttonView}
                  onPress={() => {
                    addToItem(item);
                    counterIncrease();
                  }}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imageView}>
                <Image source={item.imageUrl} style={styles.imageView} />
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainConatinerView: {
    flex: 1,
    // backgroundColor: '#ECEFEF',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  headerView: {
    flexDirection: 'row',
    // marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  startHeaderView: {
    flex: 1,
  },
  endHeaderView: {
    flex: 1,
    alignItems: 'flex-end',
    paddingEnd: 20,
  },
  shopingView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  countingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  containerView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  itemView: {
    paddingLeft: 20,
    paddingVertical: 10,
    flex: 1,
  },
  serialText: {
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },
  costText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonView: {
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginLeft: 5,
    width: 100,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    padding: 3,
    textAlign: 'center',
  },
  imageContainerView: {
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    flex: 1,
    width: 100,
    height: 80,
    padding: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
