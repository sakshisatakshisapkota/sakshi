import React from "react";
import ReceiverComponents from "./ReceiverComponents";
import ShoppingList from "./ShoppingList";

function HeaderElements() {
    const shoppingItems=[
        {id:1,name:'Apples'},
        {id:2,name:'Graps'},
        {id:3,name:'Oranges'},

    ];
  return <ReceiverComponents Items ={shoppingItems}/>;

}
export default HeaderElements;

