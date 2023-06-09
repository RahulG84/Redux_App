import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {removeCartItem} from '../../redux/CartSlice/CartSlice';

const ShippingCarts = () => {
  const items = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  const delteItem = (index: any) => {
    dispatch(removeCartItem(index));
  };

  const theme: any = useSelector((state: any) => state.ThemeReducer);
  return (
    <>
      {items ? (
        <View
          style={[
            styles.mainConatinerView,
            {backgroundColor: theme ? 'black' : 'white'},
          ]}>
          <FlatList
            data={items}
            // keyExtractor={item => item.shoesNumber}
            renderItem={({item, index}) => {
              return (
                <View style={styles.containerView}>
                  <View style={styles.itemView}>
                    <Text style={styles.serialText}>{item.shoesNumber}</Text>
                    <Text style={styles.costText}>INR {item.shoesCost}</Text>
                    <TouchableOpacity
                      style={styles.buttonView}
                      onPress={() => {
                        delteItem(index);
                        // counterDecarse();
                      }}>
                      <Text style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.imageView}>
                    <Image source={item.imageUrl} style={styles.imageView} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : (
        <Text style={styles.emptyText}>Empty</Text>
      )}
    </>
  );
};

export default ShippingCarts;

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
    marginTop: 10,
    marginBottom: 10,
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
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginLeft: 5,
    width: 100,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
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
  emptyText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
});
