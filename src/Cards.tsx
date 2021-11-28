import { useSpring, animated } from '@react-spring/web'
import React, { CSSProperties, useEffect, useMemo, useState } from 'react'
import { useScroll } from 'react-use-gesture'
import Words from './Words'


const Cards = () =>{
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

  const shadowStyles = useSpring<CSSProperties>({
    to:{
      opacity:'0.2',
      cx:20,
      cy:62.5,
      rx:2,
      ry:2
    },
    from:{
      opacity:'1',
      cx:20,
      cy:62.5,
      rx:15,
      ry:4
    },
    ...springConfig
  })

  
  const scrollClickHandler = (scrollPos:number)=>{
    if (scrollPos <= document.body.scrollHeight - window.innerHeight){
      window.scrollBy({top:window.innerHeight, behavior:'smooth'})
      console.log(document.body.scrollHeight, window.scrollY)
    } else window.scrollTo({top:0,behavior:'smooth'})
  }

  useEffect(()=>{
    if (typeof document !== 'undefined'){
      const height = window.innerHeight - 30
      const allCards = document.querySelectorAll('.wordContainer')
      allCards.forEach((card,cardIndex)=>{
        card.setAttribute('style',`
        height: ${height}px;
        `)
      })
    }
  })
  
  return (
    <>
    <animated.svg
      overflow="visible"
      x={`${innerWidth*.8}`} 
      width="60px" 
      height="80px" 
      id="arrowContainer"
      style={{cursor:'pointer'}}
      onClick={()=>scrollClickHandler(window.scrollY)}
      >
      <animated.ellipse
        fill="lightgrey"
        style={shadowStyles}
        />
      <animated.path
      id="arrow"
      d={`M0,0 L20,20 L40,0`} 
      stroke="rebeccapurple"
      strokeWidth="8px"
      fill="none"
      style={arrowStyles}
      />
    </animated.svg>
    <Words />
    </>
  )
}

export default Cards