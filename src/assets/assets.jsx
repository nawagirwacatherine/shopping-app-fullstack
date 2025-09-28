
import Homepage from './Homepage.png'
import product1 from './product1.png'
import product2 from './product2.jpg'
import product3 from './product3.jpg'


export const assets = {
    Homepage,
    product1,
    product2,
    product3
}

export const products = [
    {
    _id:"aaaa",
    name:"Women Round Neck Cotton Top",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with long sleeves",
    price:100,
    image: [product3],
    category:"Women",
    subCategory: "TopWear",
    sizes:["S","M","L"],
    date:1723891022,
    bestseller:true
},

  {
    _id:"aaab",
    name:"Men Round Neck Pure Cotton T-shirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    price:200,
    image: [product2],
    category:"Men",
    subCategory: "TopWear",
    sizes:["M","L","XL"],
    date:1723891448,
    bestseller:true
},


  {
    _id:"aaab",
    name:"Men Round Neck Pure Cotton T-shirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    price:200,
    image: [product2,product2,product1],
    category:"Men",
    subCategory: "TopWear",
    sizes:["M","L","XL"],
    date:1723891448,
    bestseller:true
},


  {
    _id:"aaab",
    name:"Men Round Neck Pure Cotton T-shirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    price:200,
    image: [product2],
    category:"Men",
    subCategory: "TopWear",
    sizes:["M","L","XL"],
    date:1723891448,
    bestseller:true
},

]