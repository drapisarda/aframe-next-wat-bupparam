'use client'

export type IncenseStickProps = {
  position: string
  rotation: string
}

const IncenseStick = ({position, rotation}: IncenseStickProps) => {
  return (
    <a-entity position={position} rotation={rotation}>
      <a-box height="50" width="1" depth="1" color="#c4a46b"></a-box>
      <a-box height="20" width="1" depth="1" position="0 -35 0" color="#974038"></a-box>
    </a-entity>
  )
}

export default IncenseStick
