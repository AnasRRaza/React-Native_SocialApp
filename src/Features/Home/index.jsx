import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login")
        }}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp")
        }}
      >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#6f6f5f"
  },
  text: {
    fontSize: 32,
    borderWidth: 1,
    width: 200,
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 15,
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#000",

  }
});
