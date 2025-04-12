import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useAudioPlayerStatus } from 'expo-audio';
import { usePlayer } from '@/provider/playerProvider';

export default function FloatingPlayer() {
  const { player, book } = usePlayer();
  const playerStatus = useAudioPlayerStatus(player);

  if (!book) return null;

  return (
    <Link href='/player' asChild>
      <Pressable className='flex-row gap-4 items-center p-3 bg-slate-900 rounded-xl mb-5 mx-2 '>
        <Image
          source={{ uri: book.thumbnail_url }}
          className='w-14 aspect-square rounded-md'
        />
        <View className='gap-1 flex-1'>
          <Text className='text-lg text-gray-100 font-semibold'>{book.title}</Text>
          <Text className='text-gray-400 text-xs'>{book.author}</Text>
        </View>

        <AntDesign
          name={
            playerStatus.isBuffering
              ? 'loading2'
              : playerStatus.playing
              ? 'pause'
              : 'playcircleo'
          }
          size={24}
          color='gainsboro'
          onPress={() =>
            playerStatus.playing ? player.pause() : player.play()
          }
        />
      </Pressable>
    </Link>
  );
}