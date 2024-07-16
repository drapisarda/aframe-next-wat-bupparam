'use client'
import '../aframe-types.d.ts'
import { memo } from 'react'

export type IncenseStickProps = {
  position: string
  rotation: string
}

const IncenseStick = ({ position, rotation }: IncenseStickProps) => {
  return (
    <a-entity className="incense" position={position} rotation={rotation}>
      <a-entity animation="property: position; from: 50 50 80; to: 0 0 0; dur: 1000; easing: easeOutQuad;">
        <a-cylinder
          className="incense__ash"
          height="0.5"
          radius="0.2"
          color="#ABABAB"
          position="0 5.25 0"
          normal-texture-offset="0"
        ></a-cylinder>
        <a-cylinder
          className="incense__burn"
          height="0.5"
          radius="0.2"
          color="#F00"
          material="emissiveIntensity: 1; emissive: #F00"
          position="0 5 0"
        ></a-cylinder>
        <a-cylinder
          className="incense__body"
          height="10"
          radius="0.2"
          color="#c4a46b"
          src="#incense"
        ></a-cylinder>
        <a-box
          className="incense__stick"
          height="8"
          width="0.2"
          depth="0.2"
          position="0 -5 0"
          color="#C00"
        ></a-box>
      </a-entity>
    </a-entity>
  )
}

export default memo(IncenseStick)
