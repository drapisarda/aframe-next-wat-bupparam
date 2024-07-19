declare type CommonAFrame = {
  position?: string
  height?: string | number
  width?: string | number
  depth?: string | number
  rotation?: string | number
  cursor?: string
  geometry?: string
  material?: string
  opacity?: string
  color?: string
  scale?: string | number
  visible?: boolean
  transparent?: boolean
  emissive?: string | number
  emissiveIntensity?: string | number
  src?: string
  animation?: string | number
}

declare namespace JSX {
  interface IntrinsicElements {
    'a-box': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement, CommonAFrame>
    'a-cylinder': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement, CommonAFrame>
    'a-entity': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement, CommonAFrame>
    'a-text': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement, CommonAFrame
    > & {
      value?: string
      text?: string
      align?: string
      anchor?: string
      baseline?: string
    }
    'a-plane': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement, CommonAFrame>
  }
}
