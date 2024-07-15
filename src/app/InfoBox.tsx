import { useEffect, useRef, useState, ReactElement } from 'react'
import HoverBox from './HoverBox'
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
  const maxOpacity = 0.4
  const closeBoxHeight = '2'
  const closeBoxWidth = '3'
  const [boxOpacity, setBoxOpacity] = useState(0)
  const [contentIsVisible, setContentIsVisible] = useState(false)
  const infoBoxHeight = children ? children.props.height : 0
  const infoBoxWidth = children ? children.props.width : 0
  const closeBoxPosition = `${(Number(infoBoxWidth) - Number(closeBoxHeight)) / 2 - 0.4} ${(Number(infoBoxHeight) - Number(closeBoxHeight)) / -2 + 0.3} 0.3`

  const boxRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseEnter = () => {
      if (contentIsVisible) return
      setBoxOpacity(maxOpacity)
    }

    const handleMouseLeave = () => {
      if (contentIsVisible) return
      setBoxOpacity(0)
    }

    const box = boxRef.current
    if (!box) return

    box.addEventListener('mouseenter', handleMouseEnter)
    box.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      box.removeEventListener('mouseenter', handleMouseEnter)
      box.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [contentIsVisible])

  const show = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setContentIsVisible(true)
    setBoxOpacity(0)
  }
  const hide = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setContentIsVisible(false)
    setBoxOpacity(0)
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
          opacity={boxOpacity}
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
        <HoverBox
          position={closeBoxPosition}
          defaultColor="#000"
          hoverColor="#F00"
          onClick={hide}
          opacity="0.4"
          height={closeBoxHeight}
          width={closeBoxWidth}
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
        </HoverBox>
      </a-plane>
    </>
  )
}

export default InfoBox
