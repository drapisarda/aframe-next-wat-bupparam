'use client'

import { memo } from 'react'

const IncenseVase = () => {
  return (
    <a-entity position="0 -8 0">
      <a-gltf-model src="#vase" scale="0.2 0.2 0.2"></a-gltf-model>
    </a-entity>
  )
}

export default memo(IncenseVase)
