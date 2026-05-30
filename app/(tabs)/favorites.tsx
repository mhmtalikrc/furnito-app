import { Ionicons } from '@expo/vector-icons';
import { FlatList, Text, View } from 'react-native';
import FavoriteCard from '../../components/FavoriteCard';
import { products } from '../../data/products';

export default function FavoritesScreen() {
  const favorites = products.filter((item) => item.isFavorite);
  return (
    <View className="flex-1 bg-white px-6 pt-14">
      <View className="flex-row justify-between items-center mb-8">
        <Ionicons name="search-outline" size={28} />
        <Text className="font-bold">My Favorites</Text>
        <Ionicons name="add-circle-outline" size={27} />
      </View>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-3xl font-bold">Favorites</Text>
          <Text className="mt-2">{favorites.length} Items</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={24} />
      </View>
      <FlatList className="mt-6" data={favorites} numColumns={2} columnWrapperStyle={{ justifyContent: 'space-between' }} keyExtractor={(item) => item.id} renderItem={({ item }) => <FavoriteCard product={item} />} ListEmptyComponent={<Text className="text-center mt-10">Henüz favori yok</Text>} />
    </View>
  );
}
