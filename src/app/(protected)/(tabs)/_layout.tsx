import {Redirect, Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
import { useAuth } from '@clerk/clerk-expo'


export default function Tablayout() {
  const {isSignedIn} = useAuth();
  if(!isSignedIn) return <Redirect href={'/sign-in'}/>
  return (
    <Tabs screenOptions={{headerShown: false}} >
      <Tabs.Screen name="index" options={{title: 'Library',tabBarIcon:({size,color})=><Ionicons name='library' size={size} color={color}/>}}/>
      <Tabs.Screen name="discover" options={{title: 'Discover' ,tabBarIcon:({size,color})=><Ionicons name='search' size={size} color={color}/>}}/>
    </Tabs>
  )
}
