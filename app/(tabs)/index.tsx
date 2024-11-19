import { View,Text, StyleSheet,FlatList } from 'react-native';
import React, {useState} from 'react';

export default function Index() {
  const [quotes, setQuotes] = useState([
    { id: '1', text: 'Сложности — это то, что делает жизнь интересной.' },
    { id: '2', text: 'Преодоление их — это то, что делает жизнь значимой.' },
    { id: '3', text: 'Если идти все прямо да прямо, далеко не уйдешь.' },
    { id: '4', text: 'Уж такой народ эти взрослые. Не стоит на них сердиться. Дети должны быть очень снисходительны к взрослым.' },
    { id: '5', text: 'Иногда лучший способ погубить человека — это предоставить ему самому выбрать судьбу.' },
    { id: '6', text: 'Кто сказал тебе, что нет на свете настоящей, верной, вечной любви? Да отрежут лгуну его гнусный язык.' },
    { id: '7', text: 'Через 20 лет вы будете больше расстраиваться из-за того, что вам не удалось сделать, чем из-за того, что вы сделали.' },
    { id: '8', text: 'У меня никогда не было таких неприятностей, которые не могло бы победить чтение книги хотя бы в течение часа.' },
  ]);
  return (

    <View style={styles.container}>
    <FlatList
      data={quotes}
      renderItem={({ item }) => (
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{item.text}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
    </View>
   /* <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>Волк не тот кто волк, a tot kto volk</Text>
      </View>
    </View>*/
  );
}

const styles = StyleSheet.create({
  quoteContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#352600',
  },
  quoteText: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE8C5',
    padding: 20,
  },
  imageContainer: {
    flex: 1,
  },
  text: {
    padding:10,
    color: '#fff',
    //fontWeight:"bold",
    fontFamily: 'Arial',
    //textAlign:"center",
    borderRadius:6,
    fontSize:16,
    backgroundColor: "#D76A41",
    borderWidth:1,
    marginTop:20,
    width:"auto",
    //marginLeft:"10%",
    borderColor:"662B15",
  },
  image:{
    padding:10,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:"#D76A41",
    borderRadius:6,
    marginTop:10,
    width:"auto",
    marginLeft:"10%",
    //borderColor:"662B15",
  }
});
