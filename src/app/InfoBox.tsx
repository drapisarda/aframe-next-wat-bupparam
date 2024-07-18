import { useRef, useState, ReactElement, useEffect } from 'react'
import '../aframe-types.d.ts'

type InfoBoxProps = {
  id?: string
  children: ReactElement
  position: string
  height: string
  width: string
  rotation?: string
  panelPosition?: string
  panelRotation?: string
}

const InfoBox: React.FC<InfoBoxProps> = ({
  id,
  children,
  position,
  height,
  width,
  rotation,
  panelPosition = '0 0 -30',
  panelRotation = '0 0 0',
}) => {
  useEffect(() => {
    require('aframe')
    require('aframe-event-set-component')
  })

  const maxOpacity = 0.4
  const closeBoxHeight = '2'
  const closeBoxWidth = '3'
  const [contentIsVisible, setContentIsVisible] = useState(false)
  const [triggerPlaneClass, setTriggerPlaneClass] = useState('clickable')
  const [optionButtonClass, setOptionButtonClass] = useState('not-clickable')
  const infoBoxHeight = children ? children.props.height : 0
  const infoBoxWidth = children ? children.props.width : 0
  const closeBoxPosition = `${(Number(infoBoxWidth) - Number(closeBoxWidth)) / 2 - 1} ${(Number(infoBoxHeight) - Number(closeBoxHeight)) / -2 + 1} 0.4`

  const boxRef = useRef<HTMLElement>(null)

  const checkContentVisible = (valueForTrue: string, valueForFalse: string) =>
    contentIsVisible ? valueForTrue : valueForFalse

  const show = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (contentIsVisible) return
    setContentIsVisible(true)
    setTriggerPlaneClass('not-clickable')
    setOptionButtonClass('clickable')
  }
  const hide = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (!contentIsVisible) return
    setContentIsVisible(false)
    setTriggerPlaneClass('clickable')
    setOptionButtonClass('not-clickable')
  }

  return (
    <>
      <a-entity
        id={id}
        position={position}
        height={height}
        width={width}
        rotation={rotation}
      >
        <a-plane
          opacity="0"
          class={triggerPlaneClass}
          event-set__mouseenter={checkContentVisible(
            'material.opacity:0;',
            'material.opacity:' + maxOpacity + ';',
          )}
          event-set__mouseleave="material.opacity: 0;"
          ref={boxRef}
          color="#ddc26d"
          position="0 0 0"
          height={height}
          width={width}
          onClick={show}
        ></a-plane>
      </a-entity>
      <a-plane
        visible={contentIsVisible}
        position={panelPosition}
        rotation={panelRotation}
        height={infoBoxHeight}
        width={infoBoxWidth}
        color="#000"
        opacity="0.4"
      >
        {children}
        <a-plane
          class={optionButtonClass}
          position={closeBoxPosition}
          color="#000"
          onClick={hide}
          opacity="0.4"
          height={closeBoxHeight}
          width={closeBoxWidth}
          event-set__mouseenter="material.color: #F00;"
          event-set__mouseleave="material.color: #000;"
        >
          <a-text
            position="0 0 0.1"
            height="20"
            width="20"
            align="center"
            value="close"
            letter-spacing="1"
            line-height="60"
          />
        </a-plane>
      </a-plane>
    </>
  )
}

export default InfoBox
