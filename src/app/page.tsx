'use client'

import 'aframe'
import ChoiceBox from './ChoiceBox'

import React, { useEffect, useRef } from 'react'
import IncenseVase from './IncenseVase'

const Home: React.FC = () => {
  const demoManage = (e, m) => console.log('message: ', m, e)
  return (
    <>
      <a-scene my-scene id="scene" cursor="rayOrigin:mouse">
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
        <ChoiceBox position="-420 -387 28" onYes={(e) => demoManage(e, 'yes')} onNo={(e) => demoManage(e, 'no')}>
          <IncenseVase />
        </ChoiceBox>
      </a-scene>
      <div id="info-container"></div>
    </>
  )
}

export default Home