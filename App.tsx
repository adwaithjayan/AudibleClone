import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { FlatList,  View } from 'react-native';
import dummyBooks from "./src/dummyBooks";
import BookListItem from "./src/components/bookListItem";

export default function App() {
  return (
    <View className="flex flex-1 bg-slate-800 justify-center p-4 pt-20" >
      <FlatList data={dummyBooks} renderItem={({item})=><BookListItem book={item} key={item.id}/>}  contentContainerClassName="gap-4"/>
      <StatusBar style="light" />
    </View>
  );
}

