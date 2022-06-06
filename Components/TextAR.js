import React , {useState} from 'react'
import {
    ViroARSceneNavigator,
    ViroARScene,
    ViroText,
    ViroMaterials,
    ViroARPlaneSelector
} from '@viro-community/react-viro';
import { 
    View,
    Text,
    TouchableOpacity
}from 'react-native';
import styles from '../Styles/styles';

const textScene=(props)=>{

    const [title,setTitle]=useState(props.sceneNavigator.viroAppProps);
    const [position,setPosition]=useState([0,0,-2])
    const [scale,setScale]=useState([1,1,1])
    const onDrag=(newPosition)=>{
        setPosition(newPosition);
    }
    const onPinch=(pinchState, scaleFactor, source)=>{
        if(pinchState === 2 || pinchState ===3){
            const currentScale=scale[0];
            const newScale=currentScale*scaleFactor;
            const scaleArray=[newScale,newScale,newScale];
            setScale(scaleArray);
        }
    }
    return(
        <ViroARScene>
            <ViroText
                position={position}
                scale={scale}
                text={title.text}
                style={styles.ARText}
                onDrag={onDrag}
                onPinch={onPinch}
            />
        </ViroARScene>
    )
}
const TextAR=(props)=>{ 
    const [title,setTitle]=useState(props.visibleText)
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:textScene
                }}
                viroAppProps={{"text":props.visibleText}}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TextAR;