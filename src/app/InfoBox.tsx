import { useEffect, useRef, useState, ReactNode } from 'react'
import HoverBox from './HoverBox'

type InfoBoxProps = {
  children: ReactNode
  position: string
  height: string
  width: string
  color: string
  rotation: string
}

const InfoBox: React.FC<InfoBoxProps> = ({
  children,
  position,
  height,
  width,
  color,
  rotation,
}) => {
  const maxOpacity = 0.4
  const [boxOpacity, setBoxOpacity] = useState(0)
  const [contentIsVisible, setContentIsVisible] = useState(false)

  const infoBoxHeight = children.props.height
  const infoBoxWidth = children.props.width
  const infoBoxPosition = `${(Number(width) + Number(infoBoxHeight)) / 2 + 50} ${height} 0`
  const closeBoxPosition = `${Number(infoBoxWidth) / 2 - 30} ${Number(infoBoxHeight) / -2 + 30} 2`

  console.log(closeBoxPosition)

  const boxRef = useRef(null)

  const handleMouseEnter = () => {
    console.log('mouse enter')
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

  const show = (e) => {
    e.stopPropagation()
    setContentIsVisible(true)
    setBoxOpacity(0)
  }
  const hide = (e) => {
    e.stopPropagation()
    setContentIsVisible(false)
    setBoxOpacity(0)
  }

  return (
    <>
      <a-box
        position={position}
        height={height}
        width={width}
        color={color}
        opacity={boxOpacity}
        rotation={rotation}
      >
        <a-box
          ref={boxRef}
          position="0 0 0"
          height={height}
          width={width}
          depth="2"
          onClick={show}
          opacity="0"
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
      </a-box>
    </>
  )
}

export default InfoBox
