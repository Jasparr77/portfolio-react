import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useState } from 'react'
import Words from './Words'


const Cards = () =>{
  const [cardOffset, setCardOffset] = useState(0)
  const springConfig = {
    loop:true,
    config:{
      friction:1,
      tension:100
    }
  }
  
  const arrowStyles = useSpring({
    from:{transform:'translate(0px, 20px)'},
    to:[
      {transform:'translate(0px, 0px)'},
    ],
    ...springConfig
  })

  useEffect(()=>{
    if (typeof document !== 'undefined'){
      const height = window.innerHeight - 30
      const width = window.innerWidth
      const allCards = document.querySelectorAll('.wordContainer')
      allCards.forEach((card,cardIndex)=>{
        card.setAttribute('style',`
        height: ${height}px;
        ease: transform 1s;
        `)
      })
    }
  })
  return (
    <>
    <animated.svg overflow="visible" width="100%" id="arrowContainer"
      >
      <animated.path
      d={
        `M${innerWidth - 80},0 
        L${innerWidth - 60},20 
        L${innerWidth - 40},0`
      } 
      stroke="rebeccapurple"
      strokeWidth="8px"
      fill="none"
      style={arrowStyles}
      />
      <animated.ellipse
        cx={innerWidth - 60}
        cy="65"
        rx="15"
        ry="5"
        fill="lightgrey"
        opacity=".2"
      />
    </animated.svg>
    <Words />
    </>
  )
}

export default Cards