declare namespace JSX {
  interface IntrinsicElements {
    'a-box': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      position?: string
      rotation?: string
      scale?: string
      color?: string
      opacity?: number | string
      height?: string | number
      width?: string | number
      depth?: string | number
      visible?: boolean
      transparent?: boolean
    }
    'a-cylinder': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      position?: string
      color?: string
      opacity?: number | string
      height?: string | number
      width?: string | number
      depth?: string | number
      emissive?: string | number
      emissiveIntensity?: string | number
      src?: string
      material?: string
      radius?: string
    }
    'a-entity': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      position?: string
      height?: string | number
      width?: string | number
      rotation?: string | number
      scale?: string | number
    }
    'a-text': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      position?: string
      height?: string | number
      width?: string | number
      rotation?: string | number
      scale?: string | number
      value?: string
      text?: string
      align?: string
      anchor?: string
      baseline?: string
    }
    'a-cursor': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {}
    'a-plane': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      opacity?: number | string
      position?: string
      height?: string | number
      width?: string | number
      rotation?: string | number
      visible?: boolean
      transparent?: boolean
    }
  }
}
