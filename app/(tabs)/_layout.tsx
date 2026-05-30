import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
  index: 'home', favorites: 'heart', discover: 'compass', bag: 'bag-outline', profile: 'person-circle-outline'
};

export default function TabLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#9ca3af',
      tabBarStyle: { height: 70, borderTopWidth: 0 },
      tabBarIcon: ({ color, size, focused }) => (
        <Ionicons name={focused && route.name === 'bag' ? 'bag' : icons[route.name]} size={size} color={color} />
      ),
    })}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="bag" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
