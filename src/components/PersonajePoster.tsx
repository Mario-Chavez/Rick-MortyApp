import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Pers} from '../interfaces/characterInterface';

interface Props {
  personaje: Pers;
  width?: number;
  height?: number;
}

export const PersonajePoster = ({
  personaje,
  width = 300,
  height = 200,
}: Props) => {
  const uri = personaje.image;
  const name = personaje.name;
  const navigation = useNavigation();

  return (
    <ScrollView style={{flexDirection: 'column'}}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailScreen', personaje)}
          activeOpacity={0.8}
          style={{
            width,
            height,
          }}>
          <View style={styles.containerImage}>
            <Image source={{uri}} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.ContainertextBodyCard}>
        <Text style={styles.textBodyCard}>{name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
  },
  containerImage: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#32ff7e',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6.27,

    elevation: 10,
  },
  ContainertextBodyCard: {
    marginTop: 8,
    alignItems: 'center',
  },
  textBodyCard: {
    color: '#32ff7e',
    fontSize: 22,
  },
});
