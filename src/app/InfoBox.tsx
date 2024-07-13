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
}

const InfoBox: React.FC<InfoBoxProps> = ({
  id,
  children,
  position,
  height,
  width,
  rotation,
}) => {
  const maxOpacity = 0.4
  const [boxOpacity, setBoxOpacity] = useState(0)
  const [contentIsVisible, setContentIsVisible] = useState(false)

  const infoBoxHeight = children ? children.props.height : 0
  const infoBoxWidth = children ? children.props.width : 0
  const infoBoxPosition = `${Number(width) + Number(infoBoxWidth) / 2} ${height} 0`
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
        position={position}
        height={height}
        width={width}
        rotation={rotation}
      >
        <a-box
          opacity={boxOpacity}
          ref={boxRef}
          color="#ddc26d"
          position="0 0 0"
          height={height}
          width={width}
          depth="2"
          onClick={show}
        ></a-box>
        <a-box
          visible={contentIsVisible}
          position={infoBoxPosition}
          height={infoBoxHeight}
          width={infoBoxWidth}
          depth="1"
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
            depth="1"
          >
            <a-text
              position="0 0 3"
              height="400"
              width="400"
              align="center"
              value="close"
            />
          </HoverBox>
        </a-box>
      </a-entity>
    </>
  )
}

export default InfoBox
