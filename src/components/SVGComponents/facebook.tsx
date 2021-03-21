import * as React from "react"
import { SvgProps } from './interfaces.d'

function SvgComponent(props: SvgProps) {
  return (
    <svg width={10} height={20} viewBox="0 0 15 30" fill="none" {...props}>
      <path
        d="M3.83 30V15.923H0v-5.068h3.83v-4.33C3.83 3.125 6.09 0 11.302 0c2.11 0 3.67.197 3.67.197l-.122 4.733s-1.592-.015-3.328-.015c-1.88 0-2.18.842-2.18 2.239v3.7H15l-.246 5.07H9.342V30H3.83z"
        fill="#A4A29C"
      />
    </svg>
  )
}

export default SvgComponent
