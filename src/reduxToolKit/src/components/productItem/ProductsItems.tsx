import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import {
  addItemToCart,
  increaseCount,
} from '../../redux/shoesRedux/actions/Actions';
import {useNavigation} from '@react-navigation/native';
import {SheduleItemData} from './ProductsData';
import {addCartItem} from '../../redux/CartSlice/CartSlice';
import {Languages} from '../../../../constant/Languages';

export default function SheduleItem() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const addToItem = (item: any) => {
    dispatch(addCartItem(item));
  };

  const addedItem = useSelector((state: any) => state);

  //   const counterIncrease = () => {
  //     dispatch(increaseCount());
  //   };

  const count: any = useSelector((state: any) => state.CounterReducer);
  // console.log('Numbers', count);

  const theme: any = useSelector((state: any) => state.ThemeReducer);
  // console.log('theme', theme);

  const laguage = useSelector((state: any) => state.LanguageReducer);

  const items = useSelector((state: any) => state.auth);

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
              <Text style={styles.countingText}>{addedItem.cart.length}</Text>
            </TouchableOpacity>
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.modalView}>
                  <View style={styles.cancelledButton}>
                    <Entypo
                      name="cross"
                      size={30}
                      color={'black'}
                      onPress={() => setModalVisible(false)}
                    />
                  </View>
                  <View style={styles.userNameView}>
                    <Text style={styles.userNameText}>
                      Hello {items.userName}
                    </Text>
                  </View>
                  <Button
                    mode="contained"
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={styles.logoutButton}>
                    Logout
                  </Button>
                </View>
              </Modal>
            </View>
            <TouchableOpacity
              style={styles.profileIcon}
              onPress={() => setModalVisible(true)}>
              <FontAwesome name="user" size={30} color={'black'} />
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
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  headerView: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'white',
  },
  startHeaderView: {
    flex: 1,
  },
  endHeaderView: {
    flex: 1,
    paddingEnd: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  modalView: {
    width: '75%',
    height: '40%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 100,
  },
  cancelledButton: {
    alignItems: 'flex-end',
    padding: 10,
  },
  userNameView: {alignItems: 'center'},
  userNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  logoutButton: {
    backgroundColor: 'blue',
    marginTop: 20,
    marginHorizontal: 20,
  },
  profileIcon: {marginLeft: 10},
});
