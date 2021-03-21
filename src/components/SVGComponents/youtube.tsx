import * as React from "react"

import { SvgProps } from './interfaces.d'

function SvgComponent(props: SvgProps) {
  return (
    <svg width={20} height={20} viewBox="0 0 39 30" fill="none" {...props}>
      <path
        d="M19.48 0C.335 0 0 1.703 0 15s.335 15 19.48 15c19.146 0 19.481-1.703 19.481-15s-.335-15-19.48-15zm6.244 15.65l-8.747 4.084c-.765.354-1.393-.043-1.393-.889v-7.69c0-.844.628-1.243 1.393-.889l8.747 4.083c.766.359.766.943 0 1.302z"
        fill="#A4A29C"
      />
    </svg>
  )
}

export default SvgComponent