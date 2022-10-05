import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useSerie} from '../hooks/useSerie';

const {height: windowHeigth} = Dimensions.get('window');

export const LoginScreen = () => {
  const {isLoad} = useSerie();

  {
    if (isLoad) {
      return (
        //image load
        <View style={{flex: 1}}>
          <Image
            style={{height: windowHeigth}}
            source={require('../assets/imgRickMor.jpg')}
          />
          <View style={styles.loading}>
            <ActivityIndicator color="green" size={100} />
          </View>
        </View>
      );
    }
  }

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
            placeholder="Ecribe tu email ..."
            placeholderTextColor="#99ff33"
            style={styles.input}
          />
          <TextInput
            placeholder="Ecribe Password ..."
            secureTextEntry={true}
            placeholderTextColor="#99ff33"
            style={styles.input}
          />
          <TouchableOpacity>
            <View style={styles.contentRegister}>
              <Text style={styles.textRegister}>Registrarme</Text>
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
    color: '#32ff7e',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imageScreen: {
    flex: 1,
    justifyContent: 'center',
    width: 450,
  },
  loading: {
    position: 'absolute',
    marginHorizontal: 200,
    marginVertical: 500,
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
