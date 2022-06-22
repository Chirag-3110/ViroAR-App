import React,{ useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    ViroARSceneNavigator,
    ViroARScene,
    ViroVideo
} from '@viro-community/react-viro';
import styles from '../Styles/styles';
const VideoView=(props)=>{
    const videoScene=(props)=>{
        const [path,setPath]=useState(props.sceneNavigator.viroAppProps);
        const [scale,setScale]=useState([1,1,0]);
        const zoom=(pinchState, scaleFactor, source)=>{
            if(pinchState ===3 || pinchState===2){
                const currentScale=scale[0];
                const newScale=currentScale*scaleFactor;
                const scaleArray=[newScale,newScale,newScale];
                setScale(scaleArray);
            }
        }
        return(
            <ViroARScene autofocus={true}>
                <ViroVideo
                    position={[0,0,-5]}
                    scale={scale}
                    width={5}
                    height={5}
                    source={{uri:path.videoPath}}
                    loop={true}
                    onPinch={zoom}
                />
            </ViroARScene>
        )   
    }
    // console.log(props.videoPath);
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:videoScene
                }}
                autofocus={true}
                viroAppProps={{"videoPath":props.videoPath}}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default VideoView;