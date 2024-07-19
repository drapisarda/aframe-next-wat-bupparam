import React, { useEffect } from 'react'

import '../aframe-types.d.ts'
import 'types-aframe-react'

const CustomCamera = () => {
  useEffect(() => {
    require('./LimitedWasdControls.js')
  }, [])

  return (
    <a-camera
      wasd-controls="acceleration: 1000"
      limited-wasd-controls="minX: -5; maxX: 5; minY: -5; maxY: 5; minZ: -5; maxZ: 5"
    >
      <a-entity
        cursor="fuse: true; fuseTimeout: 1500"
        position="0 0 -1"
        geometry="primitive: sphere; radius: 0.01"
        material="color: #000; opacity: 0.5"
        animation__fusing="startEvents: fusing; property: scale; from: 3 3 3; to: 1 1 1; dur: 1500; easing: linear"
        animation__fusing_color="startEvents: fusing; property: material.color; from: #900; to: #F00; dur: 1500; easing: linear"
        animation__fusing_opacity="startEvents: fusing; property: material.opacity; from: 0.5; to: 0.9; dur: 1500; easing: linear"
        animation__mouseleave="startEvents: mouseleave; property: scale; to: 1 1 1; dur: 1; easing: linear"
        animation__mouseleave_color="startEvents: mouseleave; property: material.color; to: #000; dur: 1; easing: linear"
        raycaster="objects: .clickable"
      ></a-entity>
    </a-camera>
  )
}

export default CustomCamera
