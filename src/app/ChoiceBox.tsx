import React, { useState, type ReactNode, useCallback, memo, useEffect } from 'react'

import '../aframe-types.d.ts'

type ChoiceBoxProps = {
  children: ReactNode
  position: string
  rotation: string
  onYes: (e: React.MouseEvent<HTMLElement>) => void
  onNo: (e: React.MouseEvent<HTMLElement>) => void
}

const ChoiceBox: React.FC<ChoiceBoxProps> = ({
  children,
  position,
  rotation = '0 0 0',
  onYes,
  onNo,
}: ChoiceBoxProps) => {
  useEffect(() => {
    require('aframe')
    require('aframe-event-set-component')
  })
  const [showInfo, setShowInfo] = useState(false)
  const displayInfo = useCallback(() => setShowInfo(true), [])
  const hideInfo = useCallback(() => setShowInfo(false), [])

  const onClickYes = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!showInfo) return
      onYes(e)
      hideInfo()
    },
    [onYes, hideInfo, showInfo],
  )

  const onClickNo = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!showInfo) return
      onNo(e)
      hideInfo()
    },
    [onNo, hideInfo, showInfo],
  )

  return (
    <a-entity position={position} rotation={rotation}>
      <a-entity
        onClick={displayInfo}
        event-set__mouseenter="_target: #ambientLight; light.intensity: 1"
        event-set__mouseleave="_target: #ambientLight; light.intensity: 0.5"
      >
        {children}
        <a-light type="ambient" id="ambientLight" color="#FFF" intensity="0" />
      </a-entity>
      <a-plane
        height="20"
        width="20"
        color="#000"
        opacity="0.4"
        position="18 20 0"
        visible={showInfo}
        transparent={true}
      >
        <a-text
          position="-9 9 0.3"
          color="#FFF"
          value="Want you to \nburn an incense \nstick?"
          height="18"
          width="19"
          letter-spacing="1"
          line-height="60"
          baseline="top"
          scale="2.8 2.8 2.8"
        ></a-text>
        <a-plane
          position="-7 -7 0.3"
          color="#000"
          onClick={onClickYes}
          opacity="0.4"
          height="3"
          width="4"
          event-set__mouseenter="material.color:#F00;"
          event-set__mouseleave="material.color: #000;"
        >
          <a-text
            position="0 0 0.1"
            color="#FFF"
            value="Yes"
            height="40"
            width="40"
            align="center"
          ></a-text>
        </a-plane>
        <a-plane
          position="7 -7 0.3"
          onClick={onClickNo}
          color="#000"
          opacity="0.4"
          height="3"
          width="4"
          event-set__mouseenter="material.color:#F00;"
          event-set__mouseleave="material.color: #000;"
        >
          <a-text
            position="0 0 0.1"
            color="#FFF"
            value="No"
            height="40"
            width="40"
            align="center"
          ></a-text>
        </a-plane>
      </a-plane>
    </a-entity>
  )
}

export default memo(ChoiceBox)
