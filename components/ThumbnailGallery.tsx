import { FlatList, Image, Pressable } from 'react-native';

type Props = { images: string[]; selected: string; onSelect: (image: string) => void };

export default function ThumbnailGallery({ images, selected, onSelect }: Props) {
  return (
    <FlatList horizontal showsHorizontalScrollIndicator={false} data={images} keyExtractor={(item) => item} renderItem={({ item }) => (
      <Pressable onPress={() => onSelect(item)} className={selected === item ? 'w-12 h-12 mr-2 border border-[#6b4a27]' : 'w-12 h-12 mr-2 border border-transparent'}>
        <Image source={{ uri: item }} className="w-full h-full" resizeMode="cover" />
      </Pressable>
    )} />
  );
}
