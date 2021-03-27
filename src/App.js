import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [props, setProps]= useState(data);
  const handleClick = ()=>
  setProps([])

  
  return (


<main>
<section className="container">

<h3> {props.length} birthday today</h3>
<List  props= {props}/>
<button onClick={handleClick}>Clear All</button>


</section>

  </main> 

  )
  
}

export default App;
