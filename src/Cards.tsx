import React, { useEffect, useState } from 'react'
import Words from './Words'


const Cards = () =>{
  const [cardOffset, setCardOffset] = useState(0)
  useEffect(()=>{
    if (typeof document !== 'undefined'){
      const height = window.innerHeight
      const width = window.innerWidth
      const allCards = document.querySelectorAll('.wordContainer')
      console.log(allCards)
      allCards.forEach((card,cardIndex)=>{
        card.setAttribute('style',`height: ${height}px`)
        card.setAttribute('style',`transform: translate(${width * (cardIndex + cardOffset)}px, -${card.offsetTop - 50}px)`)
      })
    }
  })
  return (
    <>
    <Words />
    <svg  overflow={"visible"}>
      <circle
        cx="50%" 
        cy={`${-innerHeight}`} 
        r='20px' 
        fill="salmon"
        onClick={()=>{setCardOffset(-2)}}
        /> 
    </svg>
    </>
  )
}

export default Cards