import React from 'react'
import { Canvas } from '@react-three/fiber'

const Box = () =>{
  return(
    <boxBufferGeometry />
  )
}

function CanvasTag() {
  return (
    <div>
      <Canvas>
          <Box />
      </Canvas>
    </div>
  )
}

export default CanvasTag