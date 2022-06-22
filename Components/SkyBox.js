import React , {useState} from 'react'
import {
    ViroARSceneNavigator,
    ViroARScene,
    ViroSkyBox,
    ViroFlexView,
    ViroImage
} from '@viro-community/react-viro';
import { 
    View,
    Text,
    TouchableOpacity
}from 'react-native';
import styles from '../Styles/styles';

const skyBoxScene=()=>{
    const [scale,setScale]=useState([1,1,0])
    const zoom=(pinchState, scaleFactor, source)=>{
        if(pinchState ===3 || pinchState===2){
            const currentScale=scale[0];
            const newScale=currentScale*scaleFactor;
            const scaleArray=[newScale,newScale,newScale];
            setScale(scaleArray);
        }
    }
    return(
        <ViroARScene>
            <ViroSkyBox
                source={{
                    nx: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQh_t8l9RO-K7AKjDD6DEeZUcPfdrMGT8wQ&usqp=CAU'},
                    px: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQh_t8l9RO-K7AKjDD6DEeZUcPfdrMGT8wQ&usqp=CAU'},
                    ny: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQh_t8l9RO-K7AKjDD6DEeZUcPfdrMGT8wQ&usqp=CAU'},
                    py: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQh_t8l9RO-K7AKjDD6DEeZUcPfdrMGT8wQ&usqp=CAU'},
                    nz: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQh_t8l9RO-K7AKjDD6DEeZUcPfdrMGT8wQ&usqp=CAU'},
                    pz: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQh_t8l9RO-K7AKjDD6DEeZUcPfdrMGT8wQ&usqp=CAU'}
                }}
                // focusable={true}
                onLoadStart={()=>console.log("box start")}
                onLoadEnd={()=>console.log("box end")}
                // position={[0,0,-5]}
                // length={10}
                // width={10}
                // height={10}
                // scale={scale}
            />
        </ViroARScene>
    )
}
const SkyBox=(props)=>{ 
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:skyBoxScene
                }}
                autofocus={true}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SkyBox;