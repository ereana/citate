/*import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function ListItem() {
    const [quotes, setQuotes] = useState([
        { id: '1', text: 'Сложности — это то, что делает жизнь интересной.' },
        { id: '2', text: 'Преодоление их — это то, что делает жизнь значимой.' },
      ]);
    return (
        <View >
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
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    text: {
        fontSize: 18,
    },
    quoteContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
      quoteText: {
        fontSize: 18,
    },
});
*/