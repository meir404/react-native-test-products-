import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TextInput } from 'react-native';
const initialProducts = [
  {
    id: 1,
    title: "Adidas T-Shirt",
    image: "https://photos6.spartoo.eu/photos/764/7646428/7646428_500_A.jpg",
    quantity: 20,
    price: 10,
  },
  {
    id: 2,
    title: "Nike Shoes",
    image:
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?bgColor=0,0,0,0&fmt=png-alpha&hei=520&resMode=sharp2&op_sharpen=1",
    quantity: 30,
    price: 10,
  },
  {
    id: 3,
    title: "Cleaning Food Gloves",
    image:
      "https://ae01.alicdn.com/kf/Hf487886100c64015be6eece6eeb5a81c3/20Pcs-Lot-Disposable-Gloves-Latex-Cleaning-Food-Gloves-Universal-Household-Garden-Cleaning-Gloves-Home-Cleaning-Rubber.jpg",
    quantity: 50,
    price: 40,
  },
  {
    id: 4,
    title: "CornFleks",
    image:
      "https://images.kglobalservices.com/www.kelloggs.co.nz/en_nz/product/product_449/prod_img-198128_kelloggs-corn-flakes.png",
    quantity: 90,
    price: 100,
  },
  {
    id: 5,
    title: "Asus VivoBook 15",
    image:
      "https://www.asus.com/media/global/products/1khxnn62beskspph/P_setting_fff_1_90_end_600.png",
    quantity: 130,
    price: 25,
  },
  {
    id: 6,
    title: "Loacker Milk",
    image:
      "https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_300,h_300,f_auto/v1548183621/924279.jpg",
    quantity: 100,
    price: 20,
  },
];
export default function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(initialProducts)
  const Item = ({ product }) => (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View>
        <Text>{product.title}</Text>
      </View>
      <View style={styles.buttonBuy}>
        <Button title="Buy" />
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item product={item} />
  )
  const onChangeText = (text) => {
    setSearch(text);
    setProducts(initialProducts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())));
  }
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:20}}>my app</Text> */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={search}
      />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    marginTop: StatusBar.currentHeight || 30
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textBig: {
    fontSize: 35, backgroundColor: "red"
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
  },
  product: {
    flex: 1,
    flexDirection: "column",
    width: '80%',
    height: 200,
    alignSelf: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    elevation: 30,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBuy: {
    width: "50%"
  }
});
