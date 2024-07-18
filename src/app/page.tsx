'use client'

import '../aframe-types.d.ts'

import React, { useEffect } from 'react'
import Image from 'next/image.js'

import InfoBox from './InfoBox'
import InteractiveIncenseVase from './InteractiveIncenseVase'

const Home: React.FC = () => {
  useEffect(() => {
    require('aframe')
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
          <Image alt="the image of the temple" id="temple" src="/assets/images/temple-min.jpeg" width="8704" height="4352" />
          <Image alt="incense stick" id="incense" src="/assets/images/incense_text.min.jpg" width="20" height="20" />
        </a-assets>
        <a-camera
          wasd-controls="acceleration: 1000"
          limited-wasd-c_ontrols="minX: -5; maxX: 5; minY: -5; maxY: 5; minZ: -5; maxZ: 5"
        >
          <a-entity 
            cursor="fuse: true; fuseTimeout: 1500" 
            position="0 0 -1" 
            geometry="primitive: sphere; radius: 0.01" 
            material="color: #000; opacity: 0.5" 
            animation__fusing="startEvents: fusing; property: scale; from: 3 3 3; to: 1 1 1 ; dur: 1500; easing: linear;"
            raycaster="objects: .clickable"
          >
          </a-entity>
        </a-camera>
        <a-sky color="#ECECEC" scale="-1 1 1" radius="70" src="#temple"></a-sky>
        <InfoBox position="-14 -5 -23" rotation="-20 45 0" height="8" width="5">
          <a-text
            height="20"
            width="20"
            value="Suphankanlaya was a 16th-century Siamese princess who 
              was a queen consort of King Bayinnaung of Burma. 
              There are very few historical records of her life, but 
              legends about her are widespread in Thailand. 
              Many Thais revere her as a national heroine or even as a popular deity."
            anchor="center"
            align="left"
            position="0 0 0.03"
            letter-spacing="1"
            line-height="60"
          />
        </InfoBox>

        <InfoBox
          id="jade-buddah"
          position="3 7 45"
          height="12"
          width="12"
          rotation="0 180 0"
          panelPosition="25 10 40"
          panelRotation="0 200 0"
        >
          <a-text
            height="28"
            width="25"
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
          position="-25 -5 50"
          height="10"
          width="10"
          rotation="-25 130 0"
          panelPosition="-30 0 29"
          panelRotation="0 120 0"
        >
          <a-text
            height="35"
            width="25"
            value="
              The king of Thailand (Thai: พระมหากษัตริย์ไทย, historically, king of Siam; Thai: พระเจ้ากรุงสยาม) \n
              is the head of state and head of the ruling Royal House of Chakri.
            "
            anchor="center"
            align="left"
            position="0 0 1"
            letter-spacing="2"
            line-height="60"
          />
        </InfoBox>
        <InteractiveIncenseVase position="-47 -31 0" rotation="0 90 0" />
      </a-scene>
    </>
  )
}

export default Home
