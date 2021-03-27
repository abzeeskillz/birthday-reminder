import React from 'react';
import data from './data';
import CSS from './index.css';

const List = ({props}) => {

const newList = props.map((person)=>

  <article  key = {person.id} className='person'>

<img src={person.image} alt=''/>
<h4> {person.name} </h4>
<p> {person.age} years</p>

  
</article>
 
); 
  return (
  <div>
      
{newList}

    </div>

  )
  
  
  
};

export default List;
