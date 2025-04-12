import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import FloatingPlayer from '@/components/flotingPlayer';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        borderRadius:50,
        borderWidth:1,
        marginBottom:10,
        marginInline:5,
      },
      tabBarShowLabel:false
    }}
      tabBar={(props) => (
        <>
          <FloatingPlayer />
          <BottomTabBar {...props} />
        </>
      )}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Library',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='library' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='discover'
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}