import React, {useState, useEffect} from 'react';
import Slider from './Slider';
import Words from './Words';
import Cards from './Cards'

function App() {
  const options = ['boring','fun!']
  const [selection,setSelection] = useState(options[0])
  return (
    <>
    <Slider 
      color="slateBlue" 
      optionManager={[[selection],setSelection]}
      options={options}
    />
    <div style={{overflowX:'clip'}}>
      {(selection === 'boring')
      ? <Words/>
      : <Cards/>
    }
    </div>
    </>
  );
}

export default App;
