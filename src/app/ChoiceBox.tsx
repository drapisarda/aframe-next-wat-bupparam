import React, {
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import HoverBox from './HoverBox'
import '../aframe-types.d.ts'

type ChoiceBoxProps = {
  children: ReactNode
  position: string
  onYes: (e: React.MouseEvent<HTMLElement>) => void | undefined
  onNo: (e: React.MouseEvent<HTMLElement>) => void | undefined
}

const ChoiceBox: React.FC<ChoiceBoxProps> = ({
  children,
  position,
  onYes,
  onNo,
}: ChoiceBoxProps) => {
  const [showInfo, setShowInfo] = useState(false)
  const [lightIntensity, setLightIntensity] = useState('0')
  const displayInfo = () => setShowInfo(true)
  const hideInfo = () => setShowInfo(false)

  const onClickYes = (e: React.MouseEvent<HTMLElement>) => {
    if (onYes) onYes(e)
    hideInfo()
  }

  const onClickNo = (e: React.MouseEvent<HTMLElement>) => {
    if (onNo) onNo(e)
    hideInfo()
  }

  const modelRef = useRef<HTMLElement>(null)

  const highlightModel = () => setLightIntensity('1')
  const lowlightModel = () => setLightIntensity('0')

  useEffect(() => {
    const model = modelRef.current

    if (model) {
      model.addEventListener('mouseenter', highlightModel)
      model.addEventListener('mouseleave', lowlightModel)
    }

    return () => {
      if (model) {
        model.removeEventListener('mouseenter', highlightModel)
        model.removeEventListener('mouseleave', lowlightModel)
      }
    }
  }, [highlightModel, lowlightModel])

  return (
    <a-entity position={position} scale="2 2 2">
      <a-light type="ambient" color="#FFF" intensity={lightIntensity}></a-light>
      <a-entity ref={modelRef} onClick={displayInfo}>
        {children}
      </a-entity>
      <a-box
        height="100"
        width="100"
        depth="1"
        color="#000"
        opacity="0.4"
        position="0 120 -90"
        scale="1 1 1"
        rotation="0 90 0"
        visible={showInfo}
        transparent={true}
      >
        <a-text
          position="-48 19 2.5"
          color="#FFF"
          value="Want you to \nburn an incense \nstick?"
          height="100"
          width="100"
          scale="3 3 3"
        ></a-text>
        <HoverBox
          defaultColor="#000"
          hoverColor="#F00"
          onClick={onClickYes}
          opacity="0.4"
          position="-31.864 -31.038 2.5"
          height="30"
          width="30"
        >
          <a-text
            style={{ pointerEvents: 'none' }}
            position="-10.208 -0.010 2.5"
            color="#FFF"
            value="Yes"
            height="100"
            width="50"
            text="height: 200"
            scale="5 5 5"
          ></a-text>
        </HoverBox>
        <HoverBox
          onClick={onClickNo}
          defaultColor="#000"
          hoverColor="#F00"
          opacity="0.4"
          position="30.502 -31.038 2.5"
          height="30"
          width="30"
        >
          <a-text
            style={{ pointerEvents: 'none' }}
            position="-7.876 -0.010 2.5"
            color="#FFF"
            value="No"
            height="100"
            width="50"
            text="height: 200"
            scale="5 5 5"
          ></a-text>
        </HoverBox>
      </a-box>
    </a-entity>
  )
}

export default ChoiceBox
