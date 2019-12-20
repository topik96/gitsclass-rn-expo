import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function ExampleLifeCycle() { 
  const [display, setDisplay] = useState('menu 1')
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
     <View style={styles.box1}>
       <ScrollView>
       <TouchableOpacity style={[styles.buttonMenu, {marginTop: 20}]}
       onPress={()=> setDisplay('INI d 1')}
       >
         <Text>MENU 1</Text>
       </TouchableOpacity>
       <TouchableOpacity 
       onPress={()=> setDisplay('INI MENU 2')}
       >
         <Text>MENU 2</Text>
       </TouchableOpacity 
       >
       </ScrollView>
     </View>
     <View style={styles.box2}>
  <Text>{display}</Text>
     </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
  },
  box1:{
    flex: 3,
    backgroundColor:'white',
  },
  box2:{
    flex: 3,
    backgroundColor:'green'
  },
  buttonMenu:{
    marginBottom: 20
  }
});
