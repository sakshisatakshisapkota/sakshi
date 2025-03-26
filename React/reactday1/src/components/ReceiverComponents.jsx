import React from 'react'
import HeaderElements from './HeaderElements';


function shoppingList ({items}) {
  return (
    <ul>
        {items.map(item=>(
            <li key={item.id}>{item.name}</li>
        ))}
        <HeaderElements/>
    </ul>
  )
}

export default ReceiverComponents;

