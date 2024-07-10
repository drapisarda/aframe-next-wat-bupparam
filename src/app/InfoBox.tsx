'use client'

import React, { useState, type ReactNode } from "react";
import 'aframe'

type InfoBoxProps = {
  children: ReactNode
  position: string
}

const InfoBox: React.FC<InfoBoxProps> = ({children, position}: InfoBoxProps) => {
  const [showInfo, setShowInfo] = useState(false)
  const displayInfo = () => setShowInfo(true)
  const hideInfo = () => setShowInfo(false)

  return (
    <a-entity interactive-model className="interactive-model" position={position} scale="2 2 2">
      <a-light className="interactive-model__light" type="ambient" color="#FFF" intensity="0"></a-light>
      <a-entity className="interactive-model__model interactive-model__clickon" onClick={displayInfo}>
        {children}
      </a-entity>
      <a-box className="interactive-model__panel interactive-model__clickswitchable" height="100" width="100" depth="1"
        color="#000" opacity="0.4" position="-2.625 98 -72.177" scale="1 1 1" rotation="0 90 0" visible={showInfo}
        transparent="true">
        <a-text className="interactive-model__question" position="-48 19 2.5" color="#FFF"
          value="Want you to \nburn an incense \nstick?" height="100" width="100" scale="3 3 3"></a-text>
        <a-box className="interactive-model__option interactive-model__option--yes" onClick={hideInfo} color="#000" opacity="0.4"
          position="-31.864 -31.038 3" height="30" width="30" depth="1"
        >
          <a-text
            className="interactive-model__label"
            style={{pointerEvents: "none"}}
            position="-10.208 -0.010 2" color="#FFF" value="Yes" height="100" width="50" text="height: 200"
            scale="5 5 5"></a-text>
        </a-box>
        <a-box className="interactive-model__option interactive-model__option--no" onClick={hideInfo} color="#000" opacity="0.4"
          position="30.502 -31.038 3" height="30" width="30" depth="1"
        >
          <a-text
            className="interactive-model__label"
            style={{pointerEvents: "none"}}
            position="-7.876 -0.010 2" color="#FFF" value="No" height="100" width="50" text="height: 200"
            scale="5 5 5"></a-text>
        </a-box>
      </a-box>
    </a-entity>
  )
}

export default InfoBox