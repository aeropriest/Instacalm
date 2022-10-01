/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import {View, Image, FlatList, useWindowDimensions} from 'react-native';
import colors from '../../theme/colors';

interface ICarousel {
  images: String[];
}

export default function Carousel({images}: ICarousel) {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <FlatList
       keyExtractor={(item, index) => index.toString()} //Add this line
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width:width, aspectRatio: 1}} />
        )}
        horizontal={true}
        pagingEnabled
      />
      <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width:'100%'
      }}>
        {
            images.map((_, index) =>(<View key={index} style={{width: 10, aspectRatio: 1, borderRadius: 5, backgroundColor: activeImageIndex === index ? colors.colors.primary : colors.colors.white, margin:10, marginHorizontal:5}} />))
        }
        
      </View>
    </View>
  );
}



