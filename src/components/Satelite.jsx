import React from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { OrbitControls,useGLTF,Preload,Center,Environment,Stage,Grid } from '@react-three/drei'
const Satelite = () => {
    const satelite=useGLTF('/sci-fi_satellite_dish/scene.gltf')
  return (
    <mesh>
 <hemisphereLight intensity={9.15} groundColor="black" />
    <pointLight intensity={1} />
    <primitive object={satelite.scene} />
    <spotLight
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}  />
    </mesh>
  )
}
const SateliteCanvas=()=>{
    return (
        <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,10,55], fov:15}}
    gl={{preserveDrawingBuffer:true}}
 // Set the width and height to 100vw and 100vh
 style={{width:window.innerWidth, height:window.innerHeight}}
  >
 <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false}  />
 <Stage >
    <Center>
 <Satelite />
 </Center>
 </Stage>
     
 <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
 <Environment background preset="sunset" blur={0.8}  />
 
 <Preload all />
 
    </Canvas>
    )
}
export default SateliteCanvas