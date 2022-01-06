/*
* File: app.js
* Author: Madarász Dávid
* Copyright: 2022, Madarász Dávid
* Group: Szoft II/N
* Date: 2022-01-06
* Github: https://github.com/afriyy/pentagon
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [side, setSide] = useState();
  const [result, setResult] = useState();
  function calculatePentagon(){
    let result = (Math.pow(side,2)*Math.sqrt(25+10*Math.sqrt(5)))/4
    setResult(result);
  }
  function onChangeText(number){
    setSide(number);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headlines}>Készítő: Madarász Dávid</Text>
      <Text style={styles.headlines}>2022.01.06</Text>
      <Text style={styles.headlines}>Ez a program kiszámolja a pentagon(alakzat) területét</Text>
      <Text style={{marginTop: 75}}>Oldal:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={side}
      />
      <View style={{ flexDirection: 'row',marginBottom: 15 }}>
       <Text>Eredmény: {result} cm</Text>
       <Text style={{ fontSize: 10 }}>2</Text>
      </View>
      <Button style={styles.button} title='Számít' onPress={calculatePentagon}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26
  },
  input: {
    width: 200,
    height: 35,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth : 1.0,
    borderRadius: 20,
    marginBottom: 25,
  },
  button:{
    backgroundColor: 'navyblue',
    marginTop: 15,
    paddingTop: 15
  },
  headlines:{
    fontSize: 24
  }
});
