import React, {
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  useCallback,
} from 'react'

import HoverBox from './HoverBox'
import '../aframe-types.d.ts'

type ChoiceBoxProps = {
  children: ReactNode
  position: string,
  rotation: string,
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
  const [showInfo, setShowInfo] = useState(false)
  const [lightIntensity, setLightIntensity] = useState('0')
  const displayInfo = useCallback(() => setShowInfo(true), [])
  const hideInfo = useCallback(() => setShowInfo(false), [])

  const onClickYes = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onYes(e)
      hideInfo()
    },
    [onYes, hideInfo],
  )

  const onClickNo = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onNo(e)
      hideInfo()
    },
    [onNo, hideInfo],
  )

  const modelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const highlightModel = () => setLightIntensity('1')
    const lowlightModel = () => setLightIntensity('0')

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
  }, [])

  return (
    <a-entity position={position} rotation={rotation}>
      <a-light type="ambient" color="#FFF" intensity={lightIntensity}></a-light>
      <a-entity ref={modelRef} onClick={displayInfo}>
        {children}
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
        <HoverBox
          position="-7 -7 0.3"
          defaultColor="#000"
          hoverColor="#F00"
          onClick={onClickYes}
          opacity="0.4"
          height="3"
          width="4"
        >
          <a-text
            position="0 0 0.1"
            color="#FFF"
            value="Yes"
            height="40"
            width="40"
            align='center'
          ></a-text>
        </HoverBox>
        <HoverBox
          position="7 -7 0.3"
          onClick={onClickNo}
          defaultColor="#000"
          hoverColor="#F00"
          opacity="0.4"
          height="3"
          width="4"
        >
          <a-text
             position="0 0 0.1"
            color="#FFF"
            value="No"
            height="40"
            width="40"
            align='center'
          ></a-text>
        </HoverBox>
      </a-plane>
    </a-entity>
  )
}

export default ChoiceBox
