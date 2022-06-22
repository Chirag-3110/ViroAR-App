import React,{useState} from 'react'
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
const videoScene=()=>{
    
    return(
        <ViroARScene>
            
        </ViroARScene>
    )
}
const VideoVR=(props)=>{
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:videoScene
                }}
                autofocus={true}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default VideoVR