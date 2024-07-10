'use client'

import 'aframe'
import InfoBox from './InfoBox'

import React from 'react'
import IncenseVase from './IncenseVase'

const Home: React.FC = () => {
  return (
    <>
      <a-scene my-scene id="scene">
        <a-light type="ambient" color="#FFF" intensity="1"></a-light>
        <a-assets >
          <a-asset-item id="vase" src="assets/models/decorative_vase/scene.gltf"></a-asset-item>
        </a-assets>
        <a-camera position="0 0 5">
          <a-cursor></a-cursor>
        </a-camera>
        <a-sky
          color="#ECECEC"
          scale="-2 2 2"
          radius="300"
          src="assets/images/temple-min.jpeg"
        ></a-sky>
        <InfoBox position="-437.416 -387.757 28.266">
          <IncenseVase />   
        </InfoBox>
      </a-scene>
      <div id="info-container"></div>
    </>
  )
}

export default Home