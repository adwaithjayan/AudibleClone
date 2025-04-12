import {  Image, Text, View ,Pressable} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Link} from 'expo-router'


type Book = {
    book:{
        id: string,
        title: string,
        author: string,
        audio_url:string,
        thumbnail_url?:string
    }
}


export default function BookListItem({book}: Book) {
  return (
    <Link href='/player' asChild>
    <Pressable className='flex-row gap-4 items-center'>
      <Image source={{ uri: book.thumbnail_url }} className="size-24 rounded-md aspect-squre"/>
      <View className="gap-1 flex-1">
      <Text className="text-2xl text-gray-100 font-bold">{book.title}</Text>
      <Text className="text-gray-400">{book.author}</Text>
      </View>
      <AntDesign name='playcircleo' size={24} color='gainsboro'/>
    </Pressable>
    </Link>
  )
}