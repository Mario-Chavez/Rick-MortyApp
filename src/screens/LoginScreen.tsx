import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  return (
    <ImageBackground
      source={require('../assets/galaxy1.jpg')}
      resizeMode="stretch"
      style={styles.imageScreen}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Image
            style={{width: 300, height: 300, borderRadius: 100}}
            source={require('../assets/RickMorty.png')}
          />
          <TextInput
            placeholder="Email ...."
            placeholderTextColor="#99ff33"
            style={styles.input}
          />
          <TextInput
            placeholder="Password ...."
            secureTextEntry={true}
            placeholderTextColor="#99ff33"
            style={styles.input}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.contentRegister}>
              <Text style={styles.textRegister}> Sig in </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginLeft: -60,
  },
  textContent: {
    color: '#99ff33',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imageScreen: {
    flex: 1,
    justifyContent: 'center',
    width: 450,
  },
  formContainer: {
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    marginTop: 30,
    height: 40,
    width: 250,
    borderWidth: 2,
    borderRadius: 5,
    padding: 8,
  },
  contentRegister: {
    marginTop: 40,
    alignItems: 'center',
    width: 150,
    borderRadius: 25,
    backgroundColor: 'black',
  },
  textRegister: {
    color: '#99ff33',
    fontSize: 20,
    padding: 5,
  },
});
