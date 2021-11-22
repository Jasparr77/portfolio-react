import React, { CSSProperties, SetStateAction } from 'react'
import { useState } from 'react'

type sliderProps = {
  color?: CSSProperties['color']
  optionManager: [string[],React.Dispatch<SetStateAction<string>>]
  options:string[]
}

const Slider = (props:sliderProps) => {
  const {
    optionManager,
    color = 'salmon',
    options 
  } = props
  const [option, setOptions] = optionManager 
  const [rectX, setRectX] = useState(0)
  const width = 150
  const height = 30

  const placeText:(index:number, length:number)=> CSSProperties['textAnchor'] = (index, length )=>{
    if (index === 0){ return 'end'}
    else if (index === length -1) {return 'start'}
    else return 'middle'
  }

  return (
  <svg height={height} width={width}style={{fill:'white',borderRadius:'15px', boxShadow:'inset 0 0 3px #BBB'}}>
    <rect
      height="100%" 
      width={width / options.length} 
      fill={color} 
      rx="15px" 
      x={rectX} 
      y="0" 
      style={{transition:'x .25s'}}
    />
    {options.map((o,oNdx)=>(
    <text
    x={`${(width * (oNdx / options.length))+ 37.5}`}
    y={height*(2/3)}
    textAnchor={'middle'}
    onClick={()=>{
      setRectX(()=>(width * (oNdx / options.length)))
      setOptions(()=> o )
    }}
    style={{fill:'black', cursor:'pointer'}}
    >
      {o}
    </text>
    )
    )}
  </svg>
  )
}


export default Slider