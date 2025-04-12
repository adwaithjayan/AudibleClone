import { FlatList,  StatusBar,  View } from 'react-native';
import dummyBooks from "@/dummyBooks";
import BookListItem from "@/components/bookListItem";

export default function App() {
  return (
    <View className="flex flex-1 bg-slate-800 justify-center p-4 " >
      <FlatList data={dummyBooks} renderItem={({item})=><BookListItem book={item} key={item.id}/>}  contentContainerClassName="gap-4"/>
    </View>
  );
}

