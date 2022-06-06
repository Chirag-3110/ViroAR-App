import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert
} from 'react-native';
import TextAR from './Components/TextAR';
import Box from './Components/Box';
const DATA=[
  {id:1,title:"3D Text",description:"see you name in this world anywhere",type:'text'},
  {id:2,title:"3D Box",description:"Capture a moments with you 3d Box",type:'box'},
  {id:3,title:"Solar System",description:"Enjoy a 3D overview of solar system",type:'system'},
]

import styles from './Styles/styles';

const App=() => {
  const [manageAR,setManageAR]=useState(null);
  const [name,setName]=useState(null);
  const renderItem = ({ item }) => (
    <View style={styles.card} >
      <Text style={styles.title} >{item.title}</Text>
      <Text style={styles.description} >{item.description}</Text>
      {
        item.type === 'text' ?
        <TextInput 
          placeholder='Enter anything you want in 3D Space'
          placeholderTextColor={"black"}
          style={styles.input}
          onChangeText={(name)=>setName(name)}
        />:null
      }
      <TouchableOpacity style={styles.btnContainer} onPress={()=>{name===null && item.type=='text'?Alert.alert("Please Enter Something"):setManageAR(item.type)}}>
        <Text style={styles.btnTxt} >View 360 Degree</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
     {
       manageAR === 'text' ?<TextAR goBack={setManageAR} visibleText={name} />:
       manageAR === 'box' ? <Box goBack={setManageAR} />:
       <>
        <Text style={[styles.text,{fontSize:30,textAlign:'left'}]}>Welcome to Augemented reality App</Text>
        <Text style={[styles.text,{fontSize:20,textAlign:'left'}]}>Enjoy this 3D World</Text>
        <FlatList
          data={DATA}
          key={items=>items.id}
          renderItem={renderItem}
        />
       </>
       
     }
    </View>
  );
};


export default App;