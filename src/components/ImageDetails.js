import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ImageDetails = ({image}) =>{
    
    return (image.base_url+image.poster_sizes)
}

export default ImageDetails;