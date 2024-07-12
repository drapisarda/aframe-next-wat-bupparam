'use client'

import 'aframe'
import ChoiceBox from './ChoiceBox'
import InfoBox from './InfoBox'

import React, { useEffect, useRef } from 'react'
import IncenseVase from './IncenseVase'

const Home: React.FC = () => {
  const demoManage = (e, m) => console.log('message: ', m, e)
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
        <a-camera position="0 0 5">
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
          color="#000"
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
          class="jade-buddah"
          position="44 37.127 447.924"
          color="#000"
          height="100"
          width="100"
          rotation="0 180 0"
        >
          <a-text
            height="350"
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
        <ChoiceBox
          position="-420 -387 28"
          onYes={(e) => demoManage(e, 'yes')}
          onNo={(e) => demoManage(e, 'no')}
        >
          <IncenseVase />
        </ChoiceBox>
      </a-scene>
      <div id="info-container"></div>
    </>
  )
}

export default Home
