import React,{useEffect, useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    ViroARSceneNavigator,
    Viro360Image,
    ViroARScene
} from '@viro-community/react-viro';
import styles from '../Styles/styles';
const imageScene=(props)=>{
    const [path,setPath]=useState(props.sceneNavigator.viroAppProps);
    return(
        <ViroARScene>
            <Viro360Image
                source={{uri:path.imageUrl}}
                rotation={[0, 45, 0]}
                format="RGBA8"
                isHdr={true}
                onLoadStart={()=>console.log("Loading start")}
                onLoadEnd={()=>console.log("loaging end")}
            />
        </ViroARScene>
    )
}
const ImageVR=(props)=>{
    useEffect(()=>{
        console.log(props.imageurl)
    },[])
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:imageScene
                }}
                autofocus={true}
                viroAppProps={{"imageUrl":props.imageurl}}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ImageVR