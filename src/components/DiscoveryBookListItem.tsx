import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSupabase } from '@/libs/supabase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/clerk-expo';

type Book = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

type DiscoveryBookListItemProps = {
  book: Book;
};

export default function DiscoveryBookListItem({
  book,
}: DiscoveryBookListItemProps) {
  const supabase = useSupabase();

  const { user } = useUser();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () =>
      supabase
        .from('user-books')
        .insert({
          user_id: user?.id,
          book_id: book.id,
          position: 0,
        })
        .throwOnError(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-books'] });
    },
  });

  return (
    <Pressable onPress={() => {}} className='flex-row gap-4 items-center rounded-[10px] border-slate-900 border  p-2'>
      <Image
        source={{ uri: book.thumbnail_url }}
        className='w-14 aspect-square rounded-md'
      />
      <View className='gap-0.5 flex-1'>
        <Text className='text-lg text-gray-100 font-semibold'>{book.title}</Text>
        <Text className='text-gray-400 text-xs'>{book.author}</Text>
      </View>

      <AntDesign
        onPress={() => mutate()}
        name='plus'
        size={24}
        color='gainsboro'
      />
    </Pressable>
  );
}