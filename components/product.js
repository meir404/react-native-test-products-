import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { productStyles } from '../styles/style';
import GreenButton from './greenButton';


export default function ProductPage({ route, navigation }) {
    const product = route.params.product;
    return (
        <View style={productStyles.container}>
            <View style={productStyles.headerView}>
                <Text style={[productStyles.header]}>{product.title}</Text>
            </View>
            <View style={productStyles.imageView}>
                <Image style={productStyles.image} source={{ uri: product.image }} />
            </View>
            <View style={[productStyles.textView, productStyles.textPrice]}>
                <Text style={[productStyles.text]}>price: {product.price} $</Text>
            </View>
            <View style={productStyles.textView}>
                <Text style={[productStyles.text]}>quantity: {product.quantity}</Text>
            </View>
            <View style={productStyles.buttonsView}>
                <GreenButton style={{width:'80%',height:40}} title="Buy" clickFun={() => { console.log("buy"); }}></GreenButton>
            </View>
        </View>
    )
}