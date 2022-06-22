import React ,{useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    ViroARSceneNavigator,
    ViroARScene,
    ViroAnimations,
    ViroImage
} from '@viro-community/react-viro';
import styles from '../Styles/styles';
const imageScene=(props)=>{
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
            <ViroImage
                source={{uri:path.imagePath}}
                width={4}
                height={6}
                scale={scale}
                position={[0,0,-6]}
                onPinch={zoom}
            />
        </ViroARScene>
    )
}
const Image=(props)=>{
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:imageScene
                }}
                autofocus={true}
                viroAppProps={{"imagePath":props.filPath}}
            />
             <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Image;