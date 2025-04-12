import '../../global.css';
import {Slot} from 'expo-router';
import {DarkTheme,ThemeProvider} from '@react-navigation/native';
import {ClerkProvider} from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { StatusBar } from 'react-native';
import PlayerProvider from '@/provider/playerProvider';


const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#010D1A',
    card: '#010D1A',
    primary: 'white',
  },
};


export default function Layout() {
  return (
    <ThemeProvider value={theme}>
      <ClerkProvider tokenCache={tokenCache}>
        <PlayerProvider>
        <Slot />
        </PlayerProvider>
        <StatusBar barStyle='light-content' backgroundColor='#010D1A'/>
      </ClerkProvider>
    </ThemeProvider>
  )
}