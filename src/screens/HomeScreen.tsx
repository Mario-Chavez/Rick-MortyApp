import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import {useSerie} from '../hooks/useSerie';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CarouselComp} from '../components/CarouselComp';
const {height: windowHeigth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {
    characterPage1,
    characterPage2,
    characterPage3,
    characterPage4,
    characterPage5,
    characterPage6,
    characterPage7,
    characterPage8,
    characterPage9,
    characterPage10,
    isLoad,
  } = useSerie();

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
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/galaxy1.jpg')}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView>
          <View style={{marginTop: top, marginBottom: 20}}></View>

          <View style={styles.contentTextTitle}>
            <Text style={styles.TextTitle}>Welcome choose a character</Text>
          </View>

          <CarouselComp itemPers={characterPage1} />
          <CarouselComp itemPers={characterPage2} />
          <CarouselComp itemPers={characterPage3} />
          <CarouselComp itemPers={characterPage4} />
          <CarouselComp itemPers={characterPage5} />
          <CarouselComp itemPers={characterPage6} />
          <CarouselComp itemPers={characterPage7} />
          <CarouselComp itemPers={characterPage8} />
          <CarouselComp itemPers={characterPage9} />
          <CarouselComp itemPers={characterPage10} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 450,
  },
  contentTextTitle: {
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
  },
  TextTitle: {
    color: '#99ff33',
    marginLeft: -40,
    fontSize: 28,
    fontWeight: 'bold',
  },
  loading: {
    position: 'absolute',
    marginHorizontal: 200,
    marginVertical: 500,
  },
});
