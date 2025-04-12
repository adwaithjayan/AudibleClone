import { View, Text, Pressable, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import PlaybackBar from '@/components/playbackBar';

import { useAudioPlayerStatus } from 'expo-audio';
import { usePlayer } from '@/provider/playerProvider';

export default function PlayerScreen() {
  const { player, book } = usePlayer();
  const playerStatus = useAudioPlayerStatus(player);


  return (
    <SafeAreaView className='flex-1  p-5 gap-4'>

      <Pressable
        onPress={() => router.back()}
        className='absolute top-5 left-4  bg-gray-800 rounded-full p-2'
        >
        <Entypo name='chevron-down' size={24} color='white' />
      </Pressable>

      <Image
        source={{ uri: book.thumbnail_url }} resizeMode='cover'
        className='w-[95%] mt-20 aspect-square rounded-[30px] self-center'
      />

      <View className='gap-8 flex-1 justify-end'>
<View className='mb-16 gap-2'>

        <Text className='text-white text-2xl font-bold text-center'>
          {book.title}
        </Text>
        <Text className='text-white/50  text-xm font-bold text-center'>
          {book.author}
        </Text>
</View>
        <PlaybackBar
          currentTime={playerStatus.currentTime}
          duration={playerStatus.duration}
          onSeek={(seconds: number) => player.seekTo(seconds)}
        />

        <View className='flex-row items-center justify-between p-3'>
          <Ionicons name='play-skip-back' size={24} color='white' />
          <Ionicons name='play-back' size={24} color='white' />
          <Ionicons
            onPress={() =>
              playerStatus.playing ? player.pause() : player.play()
            }
            name={playerStatus.playing ? 'pause' : 'play'}
            size={50}
            color='white'
          />
          <Ionicons name='play-forward' size={24} color='white' />
          <Ionicons name='play-skip-forward' size={24} color='white' />
        </View>
      </View>
    </SafeAreaView>
  );
}