import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import TextAR from './Components/TextAR';
import Box from './Components/Box';
import Image from './Components/Image';
import System from './Components/System';
import VideoView from './Components/VideoView';
import SkyBox from './Components/SkyBox';
import RealObject from './Components/Object';
import BlackPanther from './Components/BlackPanther';
import ImageVR from './Components/ThreeImage';
import VideoVR from './Components/ThreeVideo';
const DATA=[
  {id:1,title:"3D Text",description:"see you name in this world anywhere",type:'text'},
  {id:2,title:"3D Box",description:"Capture a moments with you 3d Box",type:'box'},
  // {id:3,title:"Solar System",description:"Enjoy a 3D overview of solar system",type:'system'},
  {id:4,title:"3D world Image",description:"See your image in the real world",type:'3dimage'},
  {id:5,title:"3D world Video",description:"See your Videos in the real world",type:'3dvideo'},
  {id:6,title:"Inside 3D Cube",description:"Enter into an exciting world of games",type:'imagesCube'},
  {id:7,title:"3D Object",description:"Experience Tesla Car",type:'object'},
  {id:8,title:"Black Panther",description:"Be a marvel fan",type:'panther'},
  {id:9,title:"Image VR View",description:"explore your image in 360 view",type:'360image'},
  {id:10,title:"Video VR View",description:"explore your video in 360 view",type:'360video'},
]

import styles from './Styles/styles';

const App=() => {
  const [manageAR,setManageAR]=useState(null);
  const [name,setName]=useState(null);
  const [imageData,setImageData]=useState(null);
  const [videoData,setVideoData]=useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.card} >
      <Text style={styles.title} >{item.title}</Text>
      <Text style={styles.description} >{item.description}</Text>
{/* get text input for 3d name */}
      {
        item.type === 'text' ?
        <TextInput 
          placeholder='Enter anything you want in 3D Space'
          placeholderTextColor={"black"}
          style={styles.input}
          onChangeText={(name)=>setName(name)}
        />:null
      }
{/* get image for 3d image */}
      {
        item.type === '3dimage'?
        <TouchableOpacity style={[styles.btnContainer,{backgroundColor:'#60BEFF'}]} 
            onPress={()=>getImage()}
        >
          <Text style={styles.btnTxt} >Select an image for 3D View</Text>
        </TouchableOpacity>:null
      }
{/* get image for 3d video */}
      {
        item.type === '3dvideo' ?
        <TouchableOpacity style={[styles.btnContainer,{backgroundColor:'#60BEFF'}]} 
            onPress={()=>getVideo()}
        >
          <Text style={styles.btnTxt} >Select an Video for 3D View</Text>
        </TouchableOpacity>:null
      }
      <TouchableOpacity style={styles.btnContainer} 
          onPress={()=>{
            name===null && item.type=='text' || imageData===null && item.type=='3dimage' || videoData===null && item.type=='3dvideo'?
            Alert.alert("Please Provide something"):
            setManageAR(item.type)}}
          >
        <Text style={styles.btnTxt} >View 360 Degree</Text>
      </TouchableOpacity>
    </View>
  );

//select video from device
  const getVideo=async()=>{
    try {
      const res = await DocumentPicker.pick({type: [DocumentPicker.types.video]});
      setVideoData(res[0].uri);
      // console.log(res)
    }catch( err ) {
        if ( DocumentPicker.isCancel(err) ) {
        } else {
            throw err;
        }
    }
  }
// select image from device
  const getImage=async()=>{
    try {
      const res = await DocumentPicker.pick({type: [DocumentPicker.types.images],});
      setImageData(res[0].uri);
      // console.log(imageData)
    }catch( err ) {
        if ( DocumentPicker.isCancel(err) ) {
        } else {
            throw err;
        }
    }
  }
  return (
    <View style={styles.container}>
     {
       manageAR === 'text' ?<TextAR goBack={setManageAR} visibleText={name} />:
       manageAR === 'box' ? <Box goBack={setManageAR} />:
       manageAR === '3dimage' ? <Image goBack={setManageAR} filPath={imageData} />:
      //  manageAR === 'system' ? <System goBack={setManageAR} />:
       manageAR === '3dvideo' ? <VideoView goBack={setManageAR} videoPath={videoData} />:
       manageAR === 'imagesCube' ? <SkyBox goBack={setManageAR} /> :
       manageAR === 'object' ? <RealObject goBack={setManageAR} /> :
       manageAR === 'panther' ? <BlackPanther goBack={setManageAR}/> :
       manageAR === '360image' ? <ImageVR goBack={setManageAR} imageurl={imageData} /> :
       manageAR === '360video' ? <VideoVR goBack={setManageAR}/> :
       <>
        <View style={styles.textBackground}>
          <Text style={[styles.text,{fontSize:30,textAlign:'left'}]}>Welcome to Augemented reality App</Text>
          <Text style={[styles.text,{fontSize:20,textAlign:'left'}]}>Enjoy the 3D World</Text>
        </View>
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