import { Pressable, ScrollView, Text, View } from 'react-native';
import { categories, Category } from '../data/products';

type Props = { selected: Category | 'all'; onSelect: (value: Category | 'all') => void };

export default function CategoryTabs({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="my-3">
      {categories.map((item) => (
        <Pressable key={item.value} onPress={() => onSelect(item.value)} className="mr-7 pb-2">
          <Text className={selected === item.value ? 'font-bold text-black' : 'text-gray-400'}>{item.label}</Text>
          {selected === item.value && <View className="h-[1px] bg-black mt-3" />}
        </Pressable>
      ))}
    </ScrollView>
  );
}
