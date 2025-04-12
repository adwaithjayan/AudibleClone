import "./global.css";
import { StatusBar } from 'expo-status-bar';
import {   View } from 'react-native';
import dummyBooks from "./src/dummyBooks";
import BookListItem from "./src/components/bookListItem";

export default function App() {
  return (
    <View className="flex flex-1 bg-slate-800 justify-center p-4" >
      
      <BookListItem book={dummyBooks[0]} />
      <BookListItem book={dummyBooks[1]} />
      <StatusBar style="light" />
    </View>
  );
}

