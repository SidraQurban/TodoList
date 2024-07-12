import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const tasks = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.icon}></TouchableOpacity>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default tasks;

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  text: {
    maxWidth: "80%",
  },
  circular: {
    width: 13,
    height: 13,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
  },
});
