import { ImageBackground, Text, View } from 'react-native';

export default function HeroCard() {
  return (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&auto=format&fit=crop' }} className="h-64 justify-end" imageStyle={{ opacity: 0.75 }}>
      <View className="p-6">
        <Text className="text-2xl font-bold text-black leading-8">Find Furniture You’ll Love –{`\n`}Delivered to Your Door.</Text>
      </View>
    </ImageBackground>
  );
}
