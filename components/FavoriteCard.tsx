import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';
import { Product } from '../data/products';

type Props = { product: Product };

export default function FavoriteCard({ product }: Props) {
  return (
    <View className="w-[48%] mb-6">
      <View className="bg-gray-50 h-40 justify-center items-center">
        <Image source={{ uri: product.image }} className="w-full h-full" resizeMode="cover" />
        <Ionicons name="heart" size={25} color="#ef4444" className="absolute right-2 top-2" />
      </View>
      <Text className="mt-2 text-sm" numberOfLines={2}>{product.name}</Text>
      <Text className="mt-2 font-bold text-base">${product.price.toLocaleString()}.00</Text>
      <Pressable className="border border-[#6b4a27] rounded-full py-3 mt-3">
        <Text className="text-center font-semibold">Add to cart</Text>
      </Pressable>
    </View>
  );
}
