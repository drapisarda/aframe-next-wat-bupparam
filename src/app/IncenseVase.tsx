'use client'

import { memo } from 'react'

const IncenseVase = () => {
  return (
    <a-entity>
      <a-gltf-model src="#vase"></a-gltf-model>
    </a-entity>
  )
}

export default memo(IncenseVase)
