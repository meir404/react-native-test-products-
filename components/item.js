import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import {styles} from '../styles/style';
import GreenButton from './greenButton'


export default function item({product}) {
        return (
            <View style={styles.product}>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View>
                    <Text style={[styles.text]}>{product.title}</Text>
                </View>
                <View>
                    <Text style={[styles.text]}>{product.price} $</Text>
                </View>
                <View style={styles.buttonBuyView}>
                    {/* <Button title="Buy" style={styles.buttonBuy}/> */}
                    <GreenButton title="Buy" clickFun={()=>{console.log("buy")}}></GreenButton>
                    <GreenButton title="Share" clickFun={()=>{console.log("share")}}></GreenButton> 
                </View>
            </View>
        );
}
