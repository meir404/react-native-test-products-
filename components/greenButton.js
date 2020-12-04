import React, { Component } from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from '../styles/style'

export default function GreenButton({ title, clickFun}) {
    return (
        <Pressable
            onPress={clickFun}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? '#1e9e1e7d'
                        : '#1e9e1e'
                },
                styles.wrapperCustom
            ]}>
            {({ pressed }) => (
                <Text style={[styles.text, styles.textWhite]}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
}
