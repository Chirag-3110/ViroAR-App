import React, {useState} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroARSceneNavigator,
  ViroBox,
  ViroAnimations,
  ViroMaterials,
  Viro3DObject,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroOrbitCamera,
  ViroCamera,
  ViroSphere,
  ViroNode,
  ViroAmbientLight,
  ViroSpotLight
} from '@viro-community/react-viro';
const scene = () => {
  const [text,setTxt]=useState("Chirag")
  return (
    <ViroARScene >
      <ViroCamera

        position={[0,0,-1]}
        active={true}
      />
      <ViroText
        text={text}
        position={[0,0,-2]}
        // autofocus={true}
        scale={[.5,.3,.5]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};
const BoxScene=()=>{
  ViroMaterials.createMaterials({
    wood:{
      diffuseTexture:require('./wood.png')
    }
  })
  ViroAnimations.registerAnimations({
    rotate:{
      duration:500,
      properties:{
        rotateY:"+=90"
      }
    }
  })
  return(
    <ViroARScene>
      {/* <ViroARPlaneSelector minWidth={0.05} minHeight={0.05} alignment={"Horizontal"}> */}
        <ViroOrbitCamera position={[0, 0, 0]} focalPoint={[0, 0, -3]} active={true} />
        <ViroBox
          position={[0,0,-3]}
          height={2}
          width={2}
          length={2}
          scale={[0.5,0.5,0.5]}
          materials={["wood"]}
          // animation={{name:"rotate",loop:true,run:true}}
          rotation={[-45,50,30]}
        />
      {/* </ViroARPlaneSelector> */}
    </ViroARScene>
  )
}
const SolarSystem=(props)=>{
  const [currentAnim, setCurrentAnim] = useState("moveLeftRight");
  const data=props.sceneNavigator.viroAppProps
  ViroMaterials.createMaterials({
    wood:{
      lightingMode:"Blinn",
      diffuseTexture:require('./wood.png')
    }
  })
  ViroAnimations.registerAnimations({
    moveRight:{
      properties: {
        positionX:"+=0.5",
        rotateZ:"-=45"

      }, 
      duration: 1000
    },
    moveLeft:{
      properties:{
        positionX:"-=0.5", 
        rotateZ:"+=45"
      }, 
      duration: 1000
    },
    rotate:{
      properties: {
        rotateZ:"+=90"
      }, 
      duration:500
    },
    
});
  const handleAnimation=()=>{
    setCurrentAnim((anim)=>{
      if(anim==="moveLeftRight")
        return "rotate";
      return "moveLeftRight"
    })
  }
  return(
    <ViroARScene>
      {/* <ViroNode position={[0,0,-5]} > */}
        {
          data.object==='text'?
          <ViroText
          text={"Hello from Box"}
          position={[0,1,-5]}
          autofocus={true}
          style={styles.helloWorldTextStyle}
        />:
        <>
          <ViroOrbitCamera position={[0, 0, 0]} focalPoint={[0, 0, -5]} active={true} />
          <ViroBox
            position={[0,0,-5]}
            height={2}
            width={2}
            length={2}
            scale={[0.5,0.5,0.5]}
            materials={["wood"]}
            animation={{name:currentAnim,loop:true,run:true,interruptible:true}}
            // rotation={[-45,50,30]}
            onClick={handleAnimation}
          />
        </>
        }
      {/* </ViroNode> */}
    </ViroARScene>
  )
}
const realObject=()=>{
  const [position,setPosition]=useState([0,0,-10])
  ViroMaterials.createMaterials({
    texture:{
      diffuseTexture:require('./skull/Skull.png')
    }
  })
  const dragSkull=(newPos)=>{
    setPosition(newPos)
  }
  return(
    <ViroARScene>
        <Viro3DObject
          source={require('./skull/skull.obj')}
          resources={[
            require('./skull/skull.mtl'),
            require('./skull/Skull.png')
          ]}
          position={position}
          rotation={[-45,50,50]}
          scale={[0.05,0.05,0.05]}
          materials={["texture"]}
          onDrag={dragSkull}
          type="OBJ"
          // physicsBody={{
          //   type:'dynamic', 
          //   mass: 1
          // }}      
        />
    </ViroARScene>
  )
}
const Demo=() => {
  const [object,setObject]=useState('text')
  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        initialScene={{
          scene: SolarSystem,
        }}
        viroAppProps={{"object":object}}
      />
      <TouchableOpacity style={styles.boncontainer} onPress={()=>setObject('text')}>
        <Text style={styles.btntxt} >Text</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boncontainer}onPress={()=>setObject('box')}>
        <Text style={styles.btntxt} >Box</Text>
      </TouchableOpacity>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    justifyContent:'center'
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'red',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  boncontainer:{
    backgroundColor:'cyan',
    width:"90%",
    height:50,
    alignItems:'center',
    justifyContent:"center"
  },
  btntxt:{
    color:"black",
    fontWeight:"bold"
  }
});
export default Demo;