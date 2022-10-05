import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

import {Pers} from '../interfaces/characterInterface';
import Carousel from 'react-native-snap-carousel';
import {PersonajePoster} from './PersonajePoster';
const {width: windowWidth, height: windowHeigth} = Dimensions.get('window');

interface Props {
  itemPers: Pers[];
}

export const CarouselComp = ({itemPers}: Props) => {
  return (
    <View>
      <View style={styles.cardStyle}>
        <Carousel
          data={itemPers}
          renderItem={({item}: any) => <PersonajePoster personaje={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 270,
  },
});
