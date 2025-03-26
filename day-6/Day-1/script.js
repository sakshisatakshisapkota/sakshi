// const fetchALLInformation=()=> {
//    fetch("https://dummyjson.com/products/") 
//    .then((response)=>response.json())
//    .then ((data)=>{
//     console.log("product Information",data.products);
//    })
//    .catch((error)=>{
//     console.log(error);
//    });
// };

//methods 2 async and await
async function fetchALLInformation(){
   
let response= await fetch("https://dummyjson.com/products");
let data=await response.json();

// console.log("data",data.product.splice(0,1).map (product));

// console.log("product information",data.products.splice(0,10)
// .map(item=>item.title));
// 
// console.log("error")
// 
// }
function displayproducts(products){
    console.log("products",products);
    const continer=document.getElementById("product-continer");
     continer.innerHTML = "";
     products.forEach((product)=>{
        const card =document.createElement("div");
        card.innerHTML=`
        <img src=${product.thumbnail}"alt="${product.title}"/>
        <h3>${product.title}`
     })

}



fetchALLInformation()
// console.log("product information",data.product.splice(0,10)
// .map ((product)=> product.dimesions));