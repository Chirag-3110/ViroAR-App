import React,{useEffect, useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    ViroARSceneNavigator,
    Viro360Image,
    ViroARScene,
    ViroOmniLight,
    ViroSpotLight,
    ViroQuad,
    ViroNode
} from '@viro-community/react-viro';
import styles from '../Styles/styles';
const imageScene=()=>{
    return(
        <ViroARScene>
            <Viro360Image
                    source={{uri:"https://www.stellardigital.in/blog/wp-content/uploads/2022/02/Reshape-the-future-with-Metaverse-and-Virtual-Reality-min.jpg"}}
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
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:imageScene
                }}
                autofocus={true}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ImageVR