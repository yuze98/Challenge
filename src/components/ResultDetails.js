import {useCallback, useState } from "react";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetails = ({ result, images }) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(true); //to show the "Read more & Less Line"

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 2); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <View
      style={{ padding: 10, alignItems: "center", backgroundColor: "#124" }}
    >
      <Text style={styles.titleStyle}>{result.title}</Text>
      <Image
        source={{ uri: images.base_url + "w500" + result.poster_path }}
        style={styles.imageStyle}
      />
      <Text style={styles.overviewStyle} onTextLayout={onTextLayout}  numberOfLines={textShown ? undefined : 2}>
        {result.overview}
      </Text>
      {lengthMore ? (
        <Text
          onPress={() =>
            {setTextShown(!textShown)}}
          style={{ lineHeight: 21, marginTop: 10 ,color:"white"}}
        >
          {textShown ? "Read less.." : " Read more.."}
        </Text>
      ) : null}

      <View
        style={{
          width: 1000,
          height: 10,
          backgroundColor: "#000",
          marginTop: 25,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#abc",
    paddingBottom: 12,
  },
  imageStyle: {
    width: 400,
    height: 400,
    borderRadius: 4,
    marginBottom: 5,
    resizeMode: "contain",
  },
  overviewStyle: {
    //flex: 30,
    fontSize: 20,
    color: "#abc",
    // alignSelf: 'flex-end',
    fontWeight: "normal",
    textAlign: "center",
    borderBottomColor: "#bbb",
  },
});

export default ResultDetails;
