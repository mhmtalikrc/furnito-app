import { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

const ITEMS = Array.from({ length: 8 }).map(() => 'Save 10% off full-price items*');
const ITEM_WIDTH = 220;

export default function PromoBanner() {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -ITEM_WIDTH * 4,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={{ backgroundColor: '#6b4a27', height: 32, overflow: 'hidden', justifyContent: 'center' }}>
      <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }] }}>
        {ITEMS.map((text, i) => (
          <Text key={i} style={{ color: 'white', fontSize: 12, marginHorizontal: 16, width: ITEM_WIDTH }}>
            {text}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
}