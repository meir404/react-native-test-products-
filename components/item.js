import React, { Component, useState } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { styles } from '../styles/style';
import GreenButton from './greenButton';
import { share } from '../services/shareService'


export default function item({ product, navigation }) {
    const [loading, setLoading] = useState(false);
    const shareButton = () => {
        return loading ? <ActivityIndicator style={styles.loading} size="large" color="#00ff00" /> :
            <GreenButton title="Share" clickFun={async () => {
                setLoading(true);
                await share(product.image, product.title);
                setLoading(false);

            }}></GreenButton>;
    }
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
                <GreenButton title="Details" clickFun={() => { navigation.navigate('Product', { product: product }) }}></GreenButton>
                {shareButton()}
            </View>
        </View>
    );
}
