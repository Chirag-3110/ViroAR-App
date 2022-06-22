import React ,{useState} from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native'
import {
    ViroARSceneNavigator,
    ViroARScene,
    ViroARImageMarker,
    ViroMaterials,
    ViroAnimations,
    ViroARTrackingTargets,
    ViroAmbientLight,
    ViroSpotLight,
    ViroNode,
    ViroOmniLight,
    Viro3DObject,
    ViroQuad,
    ViroOrbitCamera
} from '@viro-community/react-viro';
import styles from '../Styles/styles';
const PantherScene=()=>{
    const [animationName,setanimationName]=useState('01')
    const [pauseUpdates,setpauseUpdates]=useState(false)
    const [playAnim,setplayAnim]=useState(false)
    const [modelAnim,setmodelAnim]=useState(false)
    const [loopState,setloopState]=useState(false)
    ViroARTrackingTargets.createTargets({
        poster : {
          source : require('./blackpanther/blackpanther.jpg'),
          orientation : "up",
          physicalWidth : 0.7096 // real world width in meters
        }
      });
      
      ViroAnimations.registerAnimations({
          scaleModel:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
          duration: 1000},
      });
      ViroMaterials.createMaterials({
        plane:{
            diffuseTexture:{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqYwkYeTuNQu4byLaZ_JVzWpHZZHoSHiv-Q&usqp=CAU"}
        }
      })
      const  _onFinish=()=>{
        setanimationName("02")
        setloopState(true)
      }
    
      const  _onAnchorFound = () => {
        setpauseUpdates(true)
        setplayAnim(true)
        setmodelAnim(true)
      }
    
      const _onModelLoad=()=> {
        setTimeout(()=> {
          console.log("model load")
        }, 3000);
      }
    return(
        <ViroARScene >
            <ViroAmbientLight color="#ffffff" intensity={200}/>
                <ViroARImageMarker target={"poster"} onAnchorFound={_onAnchorFound} pauseUpdates={pauseUpdates}>
                    <ViroNode position={[0, -.1, 0]} scale={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" animation={{name:"scaleModel", run:playAnim,}} >
                    <Viro3DObject  onLoadEnd={_onModelLoad}
                        source={require('./blackpanther/objectBlackPanther.vrx')}
                        resources={[require('./blackpanther/object_bpanther_Base_Color.png'),
                                    require('./blackpanther/object_bpanther_Metallic.png'),
                                    require('./blackpanther/object_bpanther_Mixed_AO.png'),
                                    require('./blackpanther/object_bpanther_Normal_OpenGL.png'),
                                    require('./blackpanther/object_bpanther_Roughness.png')]}
                        position={[0, -1, -2]}
                        scale={[.8,.8,.8]}
                        animation={{name:animationName, run:modelAnim, loop:loopState, onFinish:_onFinish,}}
                        type="VRX" 
                    />
                    </ViroNode>
                </ViroARImageMarker>
        </ViroARScene>
    )
}
const BlackPanther=(props)=>{
    return(
        <View style={styles.container}>
            <ViroARSceneNavigator
                initialScene={{
                    scene:PantherScene
                }}
                autofocus={true}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )   
}
export default BlackPanther;