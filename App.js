import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Item from './components/item';
import { productsOr } from './data/data';
import { styles } from './styles/style';
import { useFonts, Allan_400Regular } from '@expo-google-fonts/allan';


import {
  StyleSheet, Text, View, Button, FlatList, Image,
  TextInput, Pressable, RefreshControl, ActivityIndicator, SafeAreaView
} from 'react-native';
let initialProducts = [];
export default function App() {

  useEffect(() => {
    getData();
  }, []);

  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const [products, setProducts] = useState(initialProducts)
  const getData = (isRefresh) => {
    loadingRefresh(isRefresh, true);
    //fetch('https://bq18d.sse.codesandbox.io/products').then(p =>
    //  p.json()
    //).then(p => {
    setSearch("");
    initialProducts = productsOr;
    setProducts(initialProducts);
    loadingRefresh(isRefresh, false);
    // });
  }
  const renderItem = ({ item }) => (
    <Item product={item} />
  )
  const onChangeText = (text) => {
    setSearch(text);
    setProducts(initialProducts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())));
  }
  const loadingRefresh = (isRefresh, value) => {
    isRefresh ? setRefreshing(value) : setLoading(value);
  }

  const [loadingFont] = useFonts({
    Allan_400Regular,
  });
  if (!loadingFont) {
    return <ActivityIndicator style={styles.loading} size="large" color="#00ff00" />;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{fontSize:20}}>my app</Text> */}
      {loading ? <ActivityIndicator style={styles.loading} size="large" color="#00ff00" /> :
        <><TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={search}
        />
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={() => getData(true)} />
            }
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          /></>}
    </SafeAreaView  >
  );
}
