import { Text, ActivityIndicator, FlatList } from 'react-native';
import { supabase } from '@/libs/supabase';
import { useQuery } from '@tanstack/react-query';
import BookListItem from '@/components/bookListItem';

export default function Discover() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: () => supabase.from('books').select('*').throwOnError(),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={data?.data || []}
      contentContainerClassName='gap-4 p-2'
      renderItem={({ item }) => <BookListItem book={item} />}
    />
  );
}