import {
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react'

type HoverBoxProps = {
  children: ReactNode
  defaultColor: string
  hoverColor: string
  onClick: MouseEventHandler<HTMLElement>
  position: string
  height: string
  width: string
  depth: string
  opacity: string
}

const HoverBox: React.FC<HoverBoxProps> = ({
  children,
  defaultColor,
  hoverColor,
  onClick,
  position,
  height,
  width,
  depth,
  opacity,
}) => {
  const [color, setColor] = useState(defaultColor)
  const boxRef = useRef(null)

  const handleMouseEnter = () => setColor(hoverColor)
  const handleMouseLeave = () => setColor(defaultColor)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return

    box.addEventListener('mouseenter', handleMouseEnter)
    box.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      box.removeEventListener('mouseenter', handleMouseEnter)
      box.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <a-box
      ref={boxRef}
      color={color}
      onClick={onClick}
      position={position}
      height={height}
      width={width}
      depth={depth}
      opacity={opacity}
    >
      {children}
    </a-box>
  )
}

export default HoverBox
