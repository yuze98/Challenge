import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import ResultList from "../components/ResultList";
import Results from "../hooks/Results";
import Images from "../hooks/Images";

const MoviesScreen = () => {
  const [getResults, results] = Results(); //returns our result
  const [getImages, image] = Images(); //returns our images
  //const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
//  const [loading, setLoading] = useState(false);

  const _handleLoadMore = async () => {
   
    // setPage(page + 1);
    // setLoading(true);
    // await setData([...data, ...getResults(page+1)]);

    setPage(page+1)
    getResults(page+1)

  };

  return (
    <View style={styles.mainViewStyle}>
     
      <ResultList
        results={results}
        images={image}
        handleLoadMore={_handleLoadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: "#124",
    flex: 1,
    paddingBottom: 10,
  },
});

export default MoviesScreen;
