import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react'

type HoverBoxProps = {
  children: ReactNode
  defaultColor: string
  hoverColor: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  position: string
  height: string
  width: string
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
  opacity,
}) => {
  const [color, setColor] = useState(defaultColor)
  const boxRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseEnter = () => setColor(hoverColor)
    const handleMouseLeave = () => setColor(defaultColor)

    const box = boxRef.current
    if (!box) return

    box.addEventListener('mouseenter', handleMouseEnter)
    box.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      box.removeEventListener('mouseenter', handleMouseEnter)
      box.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hoverColor, defaultColor])

  return (
    <a-plane
      ref={boxRef}
      color={color}
      onClick={onClick}
      position={position}
      height={height}
      width={width}
      opacity={opacity}
    >
      {children}
    </a-plane>
  )
}

export default HoverBox
