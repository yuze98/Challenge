import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetails from './ResultDetails';




const ResultList = ({results,images,handleLoadMore}) => {

    if(results == null)
    {
        return null;
    }
        return <View>

            <FlatList
            data = {results}
            
            keyExtractor = {result => result.id.toString()}
            renderItem = {({ item }) => {
                return(
                    
                    <ResultsDetails result = {item} images ={images} />

                )
            }}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
        />
        </View>
}

export default ResultList;