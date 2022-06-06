import React , {useState} from 'react'
import {
    ViroARSceneNavigator,
    ViroARScene,
    ViroBox,
    ViroMaterials,
    ViroOrbitCamera,
    ViroAnimations
} from '@viro-community/react-viro';
import { 
    View,
    Text,
    TouchableOpacity
}from 'react-native';
import styles from '../Styles/styles';

const boxScene=()=>{
    const [position,setPosition]=useState([0,0,-2])
    const [scale,setScale]=useState([0.2,0.2,0.2])
    const [anim,startAnim]=useState(null);
    ViroMaterials.createMaterials({
        boxMaterial:{
            diffuseTexture:require('../Assets/color.png')
        }
    });

    ViroAnimations.registerAnimations({
        rotate:{
            duration:1000,
            properties:{
                rotateY:"+=90"
            }
        }
    })
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
    const handleAnimation=()=>{
        if(anim === null)
            startAnim("rotate")
        else    
            startAnim(null)
    }
    return(
        <ViroARScene>
            <ViroOrbitCamera position={[0,0,0]} focalPoint={[0,0,-2]} active={true} />
            <ViroBox
                position={position}
                scale={scale}
                width={2}
                height={2}
                length={2}
                materials={['boxMaterial']}
                animation={{name:anim,loop:true,run:true}}
                onClick={handleAnimation}
                onPinch={onPinch}
            />
        </ViroARScene>
    )
}
const Box=(props)=>{ 
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:boxScene
                }}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Box;