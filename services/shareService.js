import React, { Component } from 'react'
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';


export const share = async (url, text) => {

    const downloadResumable = FileSystem.createDownloadResumable(
        url,
        FileSystem.cacheDirectory + `${text}.png`,
        { cache: true }
    );

    try {
        const { uri } = await downloadResumable.downloadAsync();
        if (!Sharing.isAvailableAsync()) {
            console.log('error', "not approve to share");
        } else {
            await Sharing.shareAsync(uri, {});
        }
        return true;
    } catch (e) {
        console.log('error', e);
        return false;
    }
}