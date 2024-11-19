import { Tabs } from 'expo-router';
/* @tutinfo Import <CODEIonicons</CODE> icon set.*/
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#FFE8C5',
    headerStyle: {
      backgroundColor: '#352600',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#352600',
    },
  }}
>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Цитаты',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={'book'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Мои цитаты ',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
