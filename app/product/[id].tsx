import { Ionicons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import ThumbnailGallery from '../../components/ThumbnailGallery';
import { products } from '../../data/products';

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = React.useState(product?.image ?? '');

  if (!product) return <Text className="p-6">Ürün bulunamadı</Text>;

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: true, title: '', headerShadowVisible: false, headerLeft: () => <Pressable onPress={() => router.back()}><Ionicons name="chevron-back" size={26} /></Pressable>, headerRight: () => <View className="flex-row gap-5"><Ionicons name="share-outline" size={24} /><Ionicons name={product.isFavorite ? 'heart' : 'heart-outline'} size={25} /></View> }} />
      <View className="h-80 bg-gray-50 justify-center items-center">
        <Image source={{ uri: selectedImage || product.image }} className="w-full h-full" resizeMode="cover" />
      </View>
      <View className="px-8 pt-5 flex-1">
        <ThumbnailGallery images={product.thumbnails} selected={selectedImage} onSelect={setSelectedImage} />
        <Text className="text-center text-lg mt-5">{product.name}</Text>
        <Text className="text-center text-2xl font-bold mt-3">${product.price.toLocaleString()}.00</Text>
        <Text className="text-center mt-6 leading-5">{product.description}</Text>
        <View className="border-t border-gray-100 mt-7 pt-5 flex-row justify-between">
          <Text>Reviews</Text>
          <Text className="font-semibold">⭐⭐⭐⭐⭐ ({product.reviewCount})</Text>
        </View>
        <View className="border-t border-gray-100 mt-5 pt-5 flex-row justify-between">
          <Text>Size</Text>
          <Text className="font-semibold">{product.size}</Text>
        </View>
      </View>
      <View className="px-6 pb-7 pt-3 bg-white">
        <Pressable className="bg-[#6b4a27] rounded-full py-4">
          <Text className="text-center text-white font-semibold">Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
}
