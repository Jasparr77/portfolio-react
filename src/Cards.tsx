import { useSpring, animated, config } from '@react-spring/web'
import React, { CSSProperties, useEffect, useState } from 'react'
import Words from './Words'

const Cards = (props:{scrollPercent:number}) =>{
  const {scrollPercent} = props
  const springConfig = {
    loop: { reverse: true },
  }
  
  const arrowStyles = useSpring<CSSProperties>({
    from:{
      y:35,
    },
    to:{
      y:15,
    },
    ...springConfig
  })

  const svgStyles = useSpring<CSSProperties>({
    transform: (scrollPercent > 1) ? 'scale(1,-1)' : 'scale(1,1)',
    transformScale:'center'
  })

  const shadowStyles = useSpring<CSSProperties>({
    to:{
      opacity:'0.2',
      cx:40,
      cy:62.5,
      rx:2,
      ry:2
    },
    from:{
      opacity:'1',
      cx:40,
      cy:62.5,
      rx:15,
      ry:4
    },
    ...springConfig
  })

  const [flip, set] = useState(false)
  const greetingStyle = useSpring<CSSProperties>({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  const scrollClickHandler = (scrollPos:number)=>{
    if (scrollPercent < 1){
      window.scrollBy({top:window.innerHeight, behavior:'smooth'})
    } else {
      window.scrollTo({top:0,behavior:'smooth'})
    }
  }

  useEffect(()=>{
    if (typeof document !== 'undefined'){
      const height = window.innerHeight - 30
      const allCards = document.querySelectorAll('.wordContainer')
      allCards.forEach((card,cardIndex)=>{
        card.setAttribute('style',`
        height: ${height *.55}px;
        `)
      })
    }
  })
  
  return (
    <>
    <animated.svg
      overflow="visible"
      x={`${innerWidth*.8}`} 
      width="80px" 
      height="80px" 
      id="arrowContainer"
      style={{
        cursor:'pointer',
        ...svgStyles
      }}
      onClick={()=>scrollClickHandler(window.scrollY)}
      >
      <animated.ellipse
        fill="lightgrey"
        style={shadowStyles}
        />
      <animated.path
      id="arrow"
      d={`M20,0 L40,20 L60,0`} 
      stroke="rebeccapurple"
      strokeWidth="8px"
      strokeLinecap="round"
      fill="none"
      style={arrowStyles}
      />
    </animated.svg>
    <Words />
    </>
  )
}

export default Cards