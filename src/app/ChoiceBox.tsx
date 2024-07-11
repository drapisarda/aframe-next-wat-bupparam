'use client'

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import 'aframe'
import HoverBox from "./HoverBox";


type ChoiceBoxProps = {
  children: ReactNode
  position: string,
  onYes: (e: Event) => void | undefined,
  onNo: (e: Event) => void | undefined,
}

const ChoiceBox: React.FC<ChoiceBoxProps> = ({ children, position, onYes, onNo }: ChoiceBoxProps) => {

  const [showInfo, setShowInfo] = useState(false)
  const [lightIntensity, setLightIntensity] = useState("0")
  const displayInfo = () => setShowInfo(true)
  const hideInfo = () => setShowInfo(false)
  const highlightColor = "#F00"
  const lowlightColor = "#000"

  const onClickYes = (e: Event) => {
    if (onYes) onYes(e)
    hideInfo()
  }

  const onClickNo = (e: Event) => {
    if (onNo) onNo(e)
    hideInfo()
  }

  const modelRef = useRef(null);
  const optionYesRef = useRef(null);
  const optionNoRef = useRef(null);

  const highlightModel = () => setLightIntensity("1")
  const lowlightModel = () => setLightIntensity("0")

  const highlightBg = (target) => {
    console.log('hi')
    target.color = highlightColor
  }
  // const lowlightBg = (target) => target.color(lowlightColor)

  useEffect(() => {
    const model = modelRef.current;
    const optionYes = optionYesRef.current;
    const optionNo = optionNoRef.current;

  
    if (model) {
      model.addEventListener('mouseenter', highlightModel);
      model.addEventListener('mouseleave', lowlightModel);
    }

    if (optionYes) {
      optionYes.addEventListener('mouseenter', () => highlightBg(optionYes));
      // optionYes.addEventListener('mouseleave', () => lowlightBg(optionYes));
    }

    // if (optionNo) {
    //   optionNo.addEventListener('mouseenter', () => highlightBg(optionNo));
    //   optionNo.addEventListener('mouseleave', () => lowlightBg(optionNo));
    // }


    return () => {
      // Cleanup function to remove the event listener
      if (model) {
        model.removeEventListener('mouseenter', highlightModel);
        model.removeEventListener('mouseleave', lowlightModel);
      }

      if (optionYes) {
        optionYes.removeEventListener('mouseenter', () => highlightBg(optionYes));
        // optionYes.removeEventListener('mouseleave', () => lowlightBg(optionYes));
      }

      // if (optionNo) {
      //   optionNo.removeEventListener('mouseenter', highlightBg);
      //   optionNo.removeEventListener('mouseleave', lowlightBg);
      // }
    };

  }, []);

  return (
    <a-entity interactive-model className="interactive-model" position={position} scale="2 2 2">
      <a-light className="interactive-model__light" type="ambient" color="#FFF" intensity={lightIntensity}></a-light>
      <a-entity ref={modelRef} className="interactive-model__model" onClick={displayInfo}>
        {children}
      </a-entity>
      <a-box className="interactive-model__panel" height="100" width="100" depth="1"
        color="#000" opacity="0.4" position="0 120 -90" scale="1 1 1" rotation="0 90 0" visible={showInfo}
        transparent="true">
        <a-text className="interactive-model__question" position="-48 19 2.5" color="#FFF"
          value="Want you to \nburn an incense \nstick?" height="100" width="100" scale="3 3 3"></a-text>
          <HoverBox defaultColor="#000" hoverColor="#F00" onClick={onClickYes} opacity="0.4" position="-31.864 -31.038 2.5" height="30" width="30" depth="1">
            <a-text
              className="interactive-model__label"
              style={{ pointerEvents: "none" }}
              position="-10.208 -0.010 2.5" color="#FFF" value="Yes" height="100" width="50" text="height: 200"
              scale="5 5 5"></a-text>
          </HoverBox>
        <HoverBox onClick={onClickNo} defaultColor="#000" hoverColor="#F00" opacity="0.4" position="30.502 -31.038 2.5" height="30" width="30" depth="1">
          <a-text
            className="interactive-model__label"
            style={{ pointerEvents: "none" }}
            position="-7.876 -0.010 2.5" color="#FFF" value="No" height="100" width="50" text="height: 200"
            scale="5 5 5"></a-text>
        </HoverBox>
      </a-box>
    </a-entity>
  )
}

export default ChoiceBox