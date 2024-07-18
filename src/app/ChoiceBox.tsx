import React, { useState, type ReactNode, useCallback, memo, useEffect } from 'react'

import '../aframe-types.d.ts'

type ChoiceBoxProps = {
  children: ReactNode
  position: string
  rotation: string
  height?: string
  width?: string
  depth?: string
  onYes: (e: React.MouseEvent<HTMLElement>) => void
  onNo: (e: React.MouseEvent<HTMLElement>) => void
}

const ChoiceBox: React.FC<ChoiceBoxProps> = ({
  children,
  position,
  rotation = '0 0 0',
  height = '',
  width = '',
  depth = '',
  onYes,
  onNo,
}: ChoiceBoxProps) => {
  useEffect(() => {
    require('aframe')
    require('aframe-event-set-component')
  })
  const [showInfo, setShowInfo] = useState(false)
  const [triggerClass, setTriggerClass] = useState('clickable')
  const [optionButtonClass, setOptionButtonClass] = useState('not-clickable')
  const displayInfo = useCallback(() => {
    setShowInfo(true)
    setTriggerClass('not-clickable')
    setOptionButtonClass('clickable')
  }, [])
  const hideInfo = useCallback(() => {
    setShowInfo(false)
    setTriggerClass('clickable')
    setOptionButtonClass('not-clickable')
  }, [])

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
      <a-box
        class={triggerClass}
        height={height}
        width={width}
        depth={depth}
        transparent="true"
        opacity="0"
        onClick={displayInfo}
        event-set__mouseenter="_target: #ambientLight; light.intensity: 1"
        event-set__mouseleave="_target: #ambientLight; light.intensity: 0.5"
      >
        {children}
        <a-light type="ambient" id="ambientLight" color="#FFF" intensity="0" />
      </a-box>
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
          class={optionButtonClass}
          position="-7 -7 0.3"
          color="#000"
          opacity="0.4"
          height="3"
          width="4"
          onClick={onClickYes}
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
          class={optionButtonClass}
          position="7 -7 0.3"
          color="#000"
          opacity="0.4"
          height="3"
          width="4"
          onClick={onClickNo}
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
