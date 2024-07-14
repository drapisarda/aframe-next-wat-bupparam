'use client'
import '../aframe-types.d.ts'
import { memo } from 'react'

export type IncenseStickProps = {
  position: string
  rotation: string
}

const IncenseStick = ({ position, rotation }: IncenseStickProps) => {
  console.log('IncenseStick')
  return (
    <a-entity className="incense" position={position} rotation={rotation}>
      <a-cylinder
        className="incense__ash"
        height="1"
        radius-top="0.5"
        radius-bottom="0.5"
        color="#ABABAB"
        position="0 26 0"
        normal-texture-offset="0"
      ></a-cylinder>
      <a-cylinder
        className="incense__burn"
        height="0.3"
        radius-top="0.5"
        radius-bottom="0.5"
        color="#F00"
        material="emissiveIntensity: 1; emissive: #F00"
        position="0 25 0"
      ></a-cylinder>
      <a-cylinder
        className="incense__body"
        height="50"
        radius-top="0.5"
        radius-bottom="0.5"
        color="#c4a46b"
        src="/assets/images/incense_text.min.jpg"
      ></a-cylinder>
      <a-box
        className="incense__stick"
        height="20"
        width="0.3"
        depth="0.3"
        position="0 -35 0"
        color="#974038"
      ></a-box>
    </a-entity>
  )
}

export default memo(IncenseStick)
