'use client'

import 'aframe'

export default function Home() {
  return (
    <>
      <a-scene my-scene id="scene">
        {/* <a-assets >
          <a-asset-item id="vase" src="@/assets/models/decorative_vase/scene.gltf"></a-asset-item>
        </a-assets> */}
        <a-camera position="0 0 5">
          <a-cursor></a-cursor>
        </a-camera>
        <a-sky
          color="#ECECEC"
          scale="-2 2 2"
          radius="300"
          src="./assets/images/temple-min.jpeg"
        ></a-sky>
      </a-scene>
      <div id="info-container"></div>
    </>
  )
}
