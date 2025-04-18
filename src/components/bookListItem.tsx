import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { usePlayer } from '@/provider/playerProvider';

type Book = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

type BookListItemProps = {
  book: Book;
};

export default function BookListItem({ book }: BookListItemProps) {
  const { setBook } = usePlayer();

  return (
    <Pressable
      onPress={() => setBook(book)}
      className='flex-row gap-4 items-center border border-slate-900 rounded-[10px] p-2 '
    >
      <Image
        source={{ uri: book.thumbnail_url }}
        className='w-14 aspect-square rounded-md'
      />
      <View className='gap-0.5 flex-1'>
        <Text className='text-lg text-gray-100 font-bold'>{book.title}</Text>
        <Text className='text-gray-400 text-sm'>{book.author}</Text>
      </View>

      <AntDesign name='playcircleo' size={24} color='gainsboro' />
    </Pressable>
  );
}