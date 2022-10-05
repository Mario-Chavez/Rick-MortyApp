import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Pers} from '../interfaces/characterInterface';

interface Props extends StackScreenProps<any, any> {}

const {height} = Dimensions.get('window');

export const DetailScreen = ({route}: Props) => {
  const serie = route.params as Pers;

  const uri = serie.image;
  const name = serie.name;
  const especie = serie.species;
  const origen = serie.origin['name'];
  const status = serie.status;
  const type = serie.type;
  const genero = serie.gender;
  const localizacion = serie.location['name'];

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/galaxy1.jpg')}
          resizeMode="stretch"
          style={styles.imageScreen}>
          <View style={styles.containerImage}>
            <Image source={{uri}} style={styles.image} />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.textContent}>Name : {name}</Text>
            <Text style={styles.textContent}>Species : {especie}</Text>
            {origen ? (
              <Text style={styles.textContent}>Origen : {origen}</Text>
            ) : null}
            <Text style={styles.textContent}>Location : {localizacion}</Text>
            <Text style={styles.textContent}>Status : {status}</Text>
            {type ? (
              <Text style={styles.textContent}>Type : {type}</Text>
            ) : null}
            <Text style={styles.textContent}>Gender : {genero}</Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerImage: {
    width: '100%',
    height: height * 0.7,
    borderRadius: 20,
    shadowColor: '#32ff7e',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,

    elevation: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailContent: {
    marginTop: 8,
    marginBottom: 30,
    marginHorizontal: 20,
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
});
