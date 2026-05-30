import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, TextInput, View } from 'react-native';
import CategoryTabs from '../../components/CategoryTabs';
import HeroCard from '../../components/HeroCard';
import ProductCard from '../../components/ProductCard';
import PromoBanner from '../../components/PromoBanner';

// return içinde en üste:
<PromoBanner />
import { Category, products } from '../../data/products';

export default function HomeScreen() {
  const [category, setCategory] = React.useState<Category | 'all'>('all');
  const [favorites, setFavorites] = React.useState<string[]>(products.filter((p) => p.isFavorite).map((p) => p.id));
  const filtered = category === 'all' ? products : products.filter((p) => p.category === category);
  <PromoBanner />

  return (
    <View className="flex-1 bg-white">
      <PromoBanner />
      <HeroCard />
      <View className="-mt-6 mx-6 bg-white rounded-full px-4 flex-row items-center h-12 shadow">
        <Ionicons name="search-outline" size={22} color="#111" />
        <TextInput placeholder="Search anything..." className="flex-1 ml-2" />
      </View>
      <View className="px-6 flex-1">
        <CategoryTabs selected={category} onSelect={setCategory} />
        <FlatList data={filtered} numColumns={2} columnWrapperStyle={{ justifyContent: 'space-between' }} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <ProductCard product={item} isFavorite={favorites.includes(item.id)} onPress={() => router.push(`/product/${item.id}`)} onFavorite={() => setFavorites((old) => old.includes(item.id) ? old.filter((id) => id !== item.id) : [...old, item.id])} />
        )} showsVerticalScrollIndicator={false} />
      </View>
    </View>
  );
}
