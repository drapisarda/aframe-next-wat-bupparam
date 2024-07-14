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
  panelPosition?: 'left' | 'right'
}

const InfoBox: React.FC<InfoBoxProps> = ({
  id,
  children,
  position,
  height,
  width,
  rotation,
  panelPosition = 'right'
}) => {
  const maxOpacity = 0.4
  const [boxOpacity, setBoxOpacity] = useState(0)
  const [contentIsVisible, setContentIsVisible] = useState(false)

  const infoBoxHeight = children ? children.props.height : 0
  const infoBoxWidth = children ? children.props.width : 0
  const infoBoxPositionX = (panelPosition === 'right' ? 1 : -1) * (Number(width) + Number(infoBoxWidth) )/ 2 + 50
  const infoBoxPosition = `${infoBoxPositionX} 0 100`
  const closeBoxPosition = `${Number(infoBoxWidth) / 2 - 40} ${Number(infoBoxHeight) / -2 + 30} 3`

  const boxRef = useRef<HTMLElement>(null)

  const handleMouseEnter = () => {
    if (contentIsVisible) return
    setBoxOpacity(maxOpacity)
  }

  const handleMouseLeave = () => {
    if (contentIsVisible) return
    setBoxOpacity(0)
  }

  useEffect(() => {
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
        <a-plane
          visible={contentIsVisible}
          position={infoBoxPosition}
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
            height="40"
            width="60"
          >
            <a-text
              position="0 0 4"
              height="400"
              width="400"
              align="center"
              value="close"
            />
          </HoverBox>
        </a-plane>
      </a-entity>
    </>
  )
}

export default InfoBox
