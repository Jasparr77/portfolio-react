import React, {useState, useEffect, useRef} from 'react';
import Slider from './Slider';
import Warning from './Warning';
import Words from './Words';
import Cards from './Cards'
import { useScroll } from 'react-use-gesture';

function App() {
  const options = ['boring','fun!']
  const [selection,setSelection] = useState(options[1])

  const ref = useRef()
  const [scrollPercent, setScrollPercent] = useState(0)

  useScroll((state)=>{
    setScrollPercent(state.values[1] / (document.body.scrollHeight-window.innerHeight))
  },{domTarget:window})
  return (
    <div ref={ref}>
    {/* <Slider 
      color="slateBlue" 
      optionManager={[[selection],setSelection]}
      options={options}
    /> */}
      {/* <Warning
        color={'salmon'}
        header='This site is boring.'
        text={"...for now. I\'m working on making it cooler, though. Come back soon!"}
        /> */}
    <div style={{overflowX:'clip'}}>
      {(selection === 'boring')
      ? <Words/>
      : <Cards
        scrollPercent={scrollPercent}
      />
    }
    </div>
    </div>
  );
}

export default App;
