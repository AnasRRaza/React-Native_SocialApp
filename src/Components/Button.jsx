import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title, onclick, ...props }) => {
  return (
    <View style={styles.warpper}>
      <TouchableOpacity
        onPress={onclick}
        {...props}
      >
        <Text style={styles.btn}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
  warpper: {
    width: "78%",

  },
  btn: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 2,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
    textAlign: "center",
  }
})