
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [quotes, setQuotes] = useState([
    { id: '1', text: 'Сложности — это то, что делает жизнь интересной.' },
    { id: '2', text: 'Преодоление их — это то, что делает жизнь значимой.' },
  ]);
  const [newQuote, setNewQuote] = useState('');

  const addQuote = () => {
    if (newQuote.trim()) {
      setQuotes([...quotes, { id: Date.now().toString(), text: newQuote }]);
      setNewQuote('');
    }
  };

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
      <TextInput
        style={styles.input}
        placeholder="Добавьте свою цитату"
        value={newQuote}
        onChangeText={setNewQuote}
      />
      <Button 
      color="#352600" 
      title="Добавить цитату"  onPress={addQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFE8C5',
  },
  quoteContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#352600',
  },
  quoteText: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: '#352600',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});


/*import { ListItem, FlatList, View, StyleSheet } from 'react-native';
import React, {useState} from 'react';


export default function AboutScreen() {
  const [listOfItems,setListOfItems]=useState([
    {text:"Купить...",key:"1"},
    {text:"Помыть...",key:"2"},
    {text:"Сделать...",key:"3"},
  ]);
  return (
    <View > 
      <View>
        <FlatList 
        data={listOfItems}
        renderItem={({item})=>(
        <ListItem el={item} />
      )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
*/