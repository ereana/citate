import { Text, View, StyleSheet } from 'react-native';
/* @tutinfo Import <CODE>Link</CODE> component from <CODE>expo-router</CODE>. */ import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Начало</Text>
     <Link href="/about" style={styles.button}>
        Перейти в приложение 
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  /* @tutinfo Add the style of <CODE>fontSize</CODE>, <CODE>textDecorationLine</CODE>, and <CODE>color</CODE> to <CODE>Link</CODE> component. */
  button: {
    fontSize: 30,
    textDecorationLine: 'underline',
    color: '#000',
  },
});
