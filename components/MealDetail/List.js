import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function List({ data }) {
  return data.map((data) => (
    <View style={styles.listItem}>
      <Text key={data.id} style={styles.itemText}>
        {data}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#C9C7B1",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
