const BASE_URL=" ./js/product/"

const products = [
    {
        id: 1,
        name: "infinix Hot 40T 8gb RAM + 128gb ROM ",
        price: 80000,
        image: BASE_URL+ "infinix.jpg", 
    },
    {
        id: 2,
        name: "infinix Hot 40T 3gb RAM + 64gb ROM",
        price: 100000,
        image: BASE_URL+ "infinix.jpg", 
    },
    {
        id: 3,
        name: "Sony Computer Entertainment Sony PS Vita (WiFi) Console",
        price: 50000,
        image: BASE_URL+ "1(3).jpg", 
    },
    {
        id: 4,
        name: "LG 43' Inches LED Smart TV ....",
        price: 100000,
        image: BASE_URL+ "1.jpg", 
    },
    {
        id: 5,
        name: "XIAOMI Redmi A3 3GB RAM/64GB ROM ",
        price: 100000,
        image: BASE_URL+ "1 (2).jpg", 
    },
    {
        id: 6,
        name: "infinix Hot 5 pro 8gb RAM + 128gb ROM ",
        price: 80000,
        image: BASE_URL+ "infinix.jpg", 
    },
    {
        id: 7,
        name: "OPPO Hot 40T 3gb RAM + 64gb ROM",
        price: 100000,
        image: BASE_URL+ "infinix.jpg", 
    },
    {
        id: 8,
        name: "LG Computer Entertainment Sony PS Vita (WiFi) Console",
        price: 50000,
        image: BASE_URL+ "1(3).jpg", 
    },
    {
        id: 9,
        name: "hisense 43' Inches LED Smart TV ....",
        price: 100000,
        image: BASE_URL+ "1.jpg", 
    },
    {
        id: 10,
        name: " Samsung A3 3GB RAM/64GB ROM ",
        price: 100000,
        image: BASE_URL+ "1 (2).jpg", 
    }
]

function addToCart(id){
    let items =sessionStorage.getItem("items")
    if (!items){
        items=[]
    }else{
        items=JSON.parse(items)
    }

    const product= products.filter(product => product.id ==id ) [0]

    items.push(product)

    sessionStorage.setItem("items",JSON.stringify(items))

    cartCount()

    alert(product.name + ' added to cart')

}

function cartCount(){
    document.getElementById("cart-count").innerHTML=getCart().length
}



function getCart(){
    let items = sessionStorage.getItem("items")
    if(!items){
        return []
    }else{
        items=JSON.parse(items)
        return items
    }

}


cartCount()