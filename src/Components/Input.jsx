import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = ({ title, error, placeholder, onChange, ...props }) => {
  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          {...props}
          keyboardType={props.type ? props.type : 'default'}
        // onChange={() => {
        //   onChange();
        // }}
        />
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>{error ? error : null}</Text>
        </View>
      </View>
    </>
  )
}

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    // marginTop: 12,
    width: 250,
  },
  input: {
    padding: 6,
    borderWidth: 1,
    width: "100%",
    fontSize: 20,
  },
  errorText: {
    color: "red",
    padding: 0,
    margin: 0,
  },
  errorWrapper: {
    height: 35,
    // borderWidth: 1,
  }
})