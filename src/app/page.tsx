'use client'

import '../aframe-types.d.ts'

import InfoBox from './InfoBox'

import React, { useEffect } from 'react'
import InteractiveIncenseVase from './InteractiveIncenseVase'

const Home: React.FC = () => {
  useEffect(() => {
    require('aframe');
    require('./LimitedWasdControls.js')
  }, [])

  return (
    <>
      <a-scene my-scene id="scene" cursor="rayOrigin:mouse">
        <a-light type="ambient" color="#FFF" intensity="1"></a-light>
        <a-assets>
          <a-asset-item
            id="vase"
            src="assets/models/decorative_vase/scene.gltf"
          ></a-asset-item>
        </a-assets>
        <a-camera
          onChange={(e) => console.log(e)}
          position="0 0 5"
          wasd-controls="acceleration: 1000"
          limited-wasd-controls="minX: -50; maxX: 50; minY: -50; maxY: 50; minZ: -50; maxZ: 50"
        >
          <a-cursor></a-cursor>
        </a-camera>
        <a-sky
          color="#ECECEC"
          scale="-2 2 2"
          radius="300"
          src="assets/images/temple-min.jpeg"
        ></a-sky>
        <InfoBox
          position="-287.2466 -94.2787 -477.94721"
          height="100"
          width="100"
        >
          <a-text
            height="256"
            width="256"
            value="Suphankanlaya was a 16th-century Siamese princess who 
              was a queen consort of King Bayinnaung of Burma. 
              There are very few historical records of her life, but 
              legends about her are widespread in Thailand. 
              Many Thais revere her as a national heroine or even as a popular deity."
            anchor="center"
            align="left"
            position="0 0 3"
            letter-spacing="2"
            line-height="60"
          />
        </InfoBox>

        <InfoBox
          id="jade-buddah"
          position="40 60 400"
          height="150"
          width="150"
          rotation="0 170 0"
          panelPosition='left'
        >
          <a-text
            height="280"
            width="256"
            value="
              Buddhist art is visual art produced in the context of Buddhism. \n
              It includes depictions of Gautama Buddha and other Buddhas and bodhisattvas, 
              notable Buddhist figures both historical and mythical, narrative scenes from their 
              lives, mandalas, and physical objects associated with Buddhist practice, such as 
              vajras, bells, stupas and Buddhist temple architecture.\n
              Buddhist art originated in the north of the Indian subcontinent, 
              in modern India, Pakistan and Afghanistan, with the earliest survivals 
              dating from a few centuries after the historical life of 
              Siddhartha Gautama from the 6th to 5th century BCE.
            "
            anchor="center"
            align="left"
            position="0 0 3"
            letter-spacing="2"
            line-height="60"
          />
        </InfoBox>

        <InfoBox
          id="royal-family"
          position="-248 -46 508"
          height="100"
          width="100"
          rotation="0 130 0"
        >
          <a-text
            height="350"
            width="256"
            value="
              The king of Thailand (Thai: พระมหากษัตริย์ไทย, historically, king of Siam; Thai: พระเจ้ากรุงสยาม) \n
              is the head of state and head of the ruling Royal House of Chakri.
            "
            anchor="center"
            align="left"
            position="0 0 3"
            letter-spacing="2"
            line-height="60"
          />
        </InfoBox>
        <InteractiveIncenseVase
          position="-420 -387 28"
        />
      </a-scene>
    </>
  )
}

export default Home
