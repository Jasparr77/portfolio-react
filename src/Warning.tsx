import React, { CSSProperties, useState } from 'react'
import ReactDom from 'react-dom'
import { useTransition } from '@react-spring/web'

type WarningProps = {
  header:string,
  text:string,
  color?:CSSProperties['color']
}

const Warning = (props:WarningProps) => {
  const {header, text, color} = props

  const headerBarStyle:Partial<CSSProperties> = {
    width:'120%', 
    height:'15px', 
    position:'relative',
    top:'0px',
    backgroundColor:color, 
    margin:'-10px',
    marginBottom:'5px' }

  const hideButtonStyle:Partial<CSSProperties> = {
    position:"relative",
    textAlign:'center',
    bottom:'2px',
    left:'45%',
    width:'10%',
    height:'20px',
    cursor:'pointer',
    backgroundColor:'whitesmoke',
    color:'black',
    borderRadius:'12px',
  }

  const warningStyle:Partial<CSSProperties> = {
    backgroundColor:'black',
    padding:'10px',
    marginTop:'10px',
    opacity:'.8',
    borderRadius:'12px',
    color:'white',
    position:'fixed',
    top: '5px',
    right: '5px',
    transition: 'opacity 1s, right 1s ease',
    overflow:'hidden',
    borderCollapse: 'separate'
  }
  const [showStyle, setShowStyle] = useState(true)

  const returnStyle = useState =>{
    if (useState) return warningStyle
    else return {...warningStyle,opacity: 0, right: -600}
  }

  return ReactDom.createPortal(
    <div style={returnStyle(showStyle)}>
      <div style={headerBarStyle}/>
      <h1>{header}</h1>
      <p>{text}</p>
      <div 
      style={hideButtonStyle}
      onClick={()=>setShowStyle(()=>false)}>
      <p className='text_small'>ok</p>
      </div>
    </div>
    ,document.getElementById('root')
  )
}

export default Warning