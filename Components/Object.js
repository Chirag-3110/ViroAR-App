import React, { useState } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import {
    ViroARSceneNavigator,
    ViroARScene,
    Viro3DObject,
    ViroMaterials,
    ViroSpotLight,
    ViroLightingEnvironment,
    ViroOrbitCamera,
    ViroAnimations,
    ViroNode,
    ViroSphere,
    ViroCamera,
    ViroQuad
} from '@viro-community/react-viro';
import styles from '../Styles/styles';

const objectScene=()=>{
    const [carColor,setCarColor]=useState(["blue"])
    const [rotateCar,setRotateCar]=useState([0,0,0])
    ViroMaterials.createMaterials({
        white:{
            lightingModel: "PBR",
            diffuseTexture: require('./tesla/carBaseColor.png'),
            metalnessTexture: require('./tesla/carMetallic.png'),
            roughnessTexture: require('./tesla/carRoughness.png'),
        },
        blue:{
            lightingModel: "PBR",
            diffuseTexture: require('./tesla/carColorblue.png'),
            metalnessTexture: require('./tesla/carMetallic.png'),
            roughnessTexture: require('./tesla/carRoughness.png'),
        },
        grey:{
            lightingModel: "PBR",
            diffuseTexture: require('./tesla/carColorgrey.png'),
            metalnessTexture: require('./tesla/carMetallic.png'),
            roughnessTexture: require('./tesla/carRoughness.png'),
        },
        yellow:{
            lightingModel: "PBR",
            diffuseTexture: require('./tesla/carColoryellow.png'),
            metalnessTexture: require('./tesla/carMetallic.png'),
            roughnessTexture: require('./tesla/carRoughness.png'),
        },
        red:{
            lightingModel: "PBR",
            diffuseTexture: require('./tesla/carColorred.png'),
            metalnessTexture: require('./tesla/carMetallic.png'),
            roughnessTexture: require('./tesla/carRoughness.png'),
        },
        redSphere:{
            lightingModel: "PBR",
            diffuseTexture:{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqYwkYeTuNQu4byLaZ_JVzWpHZZHoSHiv-Q&usqp=CAU"}
        },
        blueSphere:{
            lightingModel: "PBR",
            diffuseTexture:{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACFCAMAAABv9uS0AAAAA1BMVEUAlv+tY//LAAAANUlEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAweyEAASeKOE8AAAAASUVORK5CYII="}
        },
        whiteSphere:{
            lightingModel: "PBR",
            diffuseTexture:{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAB9CAMAAAD6MS3FAAAAA1BMVEX///+nxBvIAAAAMUlEQVR4nO3BMQEAAADCoPVP7WcKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5s4wABy0KbBgAAAABJRU5ErkJggg=="}
        },
       yellowSphere:{
            lightingModel: "PBR",
            diffuseTexture:{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAG1BMVEX/zADi4Nz+8tf/yADi39n+8tTb2M/9+vX/wwDsadsvAAAAhUlEQVR4nO3cQREAIQwAsQIt4F/xzZyJ8sgqiIKNneOBckeemu3VyRh1V3u3Roy5or01QUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA2gMBAQEBAQEB6Q4EBAQEBAQEpLsf8soa5plZziv7oA829QzVWnrCqAAAAABJRU5ErkJggg=="}
        },
        greySphere:{
            lightingModel: "PBR",
            diffuseTexture:{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAACDCAMAAABfhsztAAAAA1BMVEWAgICQdD0xAAAANElEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBl3vgABT0K1OgAAAABJRU5ErkJggg=="}
        }
    })
    ViroAnimations.registerAnimations({
        "rotateCar":{
            duration:2000,
            properties:{
                rotateY:"+=90"
            }
        }
    })
    const setRedColor=()=>{
        console.log("red")
        setCarColor("red")
    }
    const setWhiteColor=()=>{
        console.log("white")
        setCarColor("white")
    }
    const setYellowColor=()=>{
        console.log("yellow")
        setCarColor("yellow")
    }
    const setGreyColor=()=>{
        console.log("grey")
        setCarColor("grey")
    }
    const setBlueColor=()=>{
        console.log("blue")
        setCarColor("blue")
    }
    return(
        <ViroARScene onAnchorFound={()=>console.log("Anchor found")} >
            {/* <ViroOrbitCamera
                active={true}
                position={[0,1,3]}
                focalPoint={[0, 0, -1]}
            /> */}
            <ViroNode>
                <ViroOrbitCamera
                    active={true}
                    position={[0,0.5,3]}
                    focalPoint={[0, 0, -1]}
                />
                <ViroNode position={[0,3,0]}>
                    <ViroSphere
                        radius={1}
                        scale={[0.5,0.5,0.5]}
                        position={[-3,-1,-3]}
                        materials={['redSphere']}
                        onClick={setRedColor}
                        shadowCastingBitMask={0}
                    />
                    <ViroSphere
                        radius={1}
                        scale={[0.5,0.5,0.5]}
                        position={[-1.5,-1,-3]}
                        materials={['whiteSphere']}
                        onClick={setWhiteColor}
                        shadowCastingBitMask={0}
                    />
                    <ViroSphere
                        radius={1}
                        scale={[0.5,0.5,0.5]}
                        position={[0,-1,-3]}
                        materials={['yellowSphere']}
                        onClick={setYellowColor}
                        shadowCastingBitMask={0}
                    />
                    <ViroSphere
                        radius={1}
                        scale={[0.5,0.5,0.5]}
                        position={[1.5,-1,-3]}
                        materials={['greySphere']}
                        onClick={setGreyColor}
                        shadowCastingBitMask={0}
                    />
                    <ViroSphere
                        radius={1}
                        scale={[0.5,0.5,0.5]}
                        position={[3,-1,-3]}
                        materials={['blueSphere']}
                        onClick={setBlueColor}
                        shadowCastingBitMask={0}
                    />
                </ViroNode>
                <ViroLightingEnvironment source={require('./tesla/garage.hdr')}/>
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={25}
                    direction={[0,-1,0]}
                    position={[0, 5, 1]}
                    color="#ffffff"
                    castsShadow={true}
                    shadowMapSize={2048}
                    shadowNearZ={2}
                    shadowFarZ={7}
                    shadowOpacity={.7} 
                />
                <Viro3DObject
                    scale={[0.5,0.5,0.5]}
                    source={require('./tesla/car.obj')}
                    resources={[require('./tesla/carmaterial.mtl')]}
                    type="OBJ"
                    rotation={rotateCar}
                    materials={carColor}
                    position={[0,-0.5,-1]}
                    autofocus={true}
                    animation={{name:"rotateCar",run:true,loop:true}}
                />
            </ViroNode>
        </ViroARScene>
    )
}
const RealObject=(props)=>{
    return(
        <View style={styles.container}>
             <ViroARSceneNavigator
                initialScene={{
                    scene:objectScene
                }}
                autofocus={true}
             />
            <TouchableOpacity style={styles.btnContainer} onPress={()=>props.goBack(null)} >
                <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default RealObject;