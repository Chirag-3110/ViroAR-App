import React,{useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    ViroARSceneNavigator,
    Viro360Video,
    ViroARScene
} from '@viro-community/react-viro';
import styles from '../Styles/styles';
const videoScene=()=>{
    
    return(
        <ViroARScene>
            <Viro360Video
            source={require("../Assets/ARDemo.mp4")}
            onFinish={()=>console.log("finish")}
            onUpdateTime={()=>console.log("update")}
            onError={()=>console.log("error")}
            loop={true}
            paused={false}
            volume={2.0}
        />
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