import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';
import { Product } from '../data/products';

type Props = { product: Product; isFavorite: boolean; onPress: () => void; onFavorite: () => void };

export default function ProductCard({ product, isFavorite, onPress, onFavorite }: Props) {
  return (
    <Pressable onPress={onPress} className="w-[48%] mb-5">
      <View className="bg-gray-50 h-36 justify-center items-center">
        <Image source={{ uri: product.image }} className="w-full h-full" resizeMode="cover" />
        <Pressable onPress={onFavorite} className="absolute right-3 top-3">
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={26} color={isFavorite ? '#ef4444' : '#111'} />
        </Pressable>
      </View>
      <Text className="mt-2 text-sm" numberOfLines={2}>{product.name}</Text>
      <Text className="mt-2 font-bold text-base">${product.price.toLocaleString()}.00</Text>
    </Pressable>
  );
}
