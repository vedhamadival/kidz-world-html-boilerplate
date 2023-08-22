var button=document.querySelectorAll(".button")
var cart=document.querySelector(".cart")
var count=document.getElementById("count")

//Initialising the Products
var prods=[
    {
        name:"This was our pact",
        price:7.49,
        quantity:0,
    },
    {
        name:"The Famous Five",
        price:4.59,
        quantity:0,
    },
    {
        name:"Matilda",
        price:6.80,
        quantity:0,
    },
    {
        name:"Harry Potter",
        price:10,
        quantity:0,
    },
    {
        name:"For young Readers",
        price:7.29,
        quantity:0,
    },
    {
        name:"Wimpy-Kid DIY",
        price:4.99,
        quantity:0,
    },
    {
        name:"Dart-Board",
        price:17.49,
        quantity:0,
    },
    {
        name:"Connect4",
        price:19.99,
        quantity:0,
    },
    {
        name:"Jenga",
        price:20.99,
        quantity:0,
    },
    {
        name:"Monopoly",
        price:19.49,
        quantity:0, 
    },
    {
        name:"Bookmarks",
        price:12.49,
        quantity:0,
    },
    {
        name:"Birthday Card",
        price:19.99,
        quantity:0,
    },
    {
        name:"Stuffed Toys",
        price:15.99,
        quantity:0,
    },
    {
        name:"Dream Catcher Drawing",
        price:18.49,
        quantity:0,
    }
]



// Updating the cart
function updateCart() {
    let count= 0;
    for (let i = 0; i<prods.length; i++) {
      count=count+prods[i].quantity;
    }
    cart.innerHTML= (`Cart Items(${count})`);
  }
  for (let j= 0; j<button.length; j++) {
    button[j].onclick = (e) => {
      prods[j].quantity++;
      updateCart();
    };
  }

  function whatsappdata(){
    prods.forEach((ele)=>{
      if(ele.quantity!==0){
        console.log(ele)
        whatsappApi+="%0A" +ele.name + "%20" +ele.quantity; 
      }
    })
    updateprice();
    whatsappApi+= "%0A" + "The total amount is $" +finalprice+ ".";
  }

  var whatsappApi= ("https://api.whatsapp.com/send?phone=918838821215&text=Order%20details:");


//updating the console
cart.addEventListener('click',function(){


    whatsappdata();
    window.open(whatsappApi);

        for (let index = 0; index < prods.length; index++) {
          if (prods[index].quantity != 0) {
            console.log(
              "Item name: " +
                prods[index].name +
                " - Quantity: " +
                prods[index].quantity
            );
          }
    }
    updateprice();
});
  //updating the price

  var finalprice=0;
function updateprice(){
    for (let index=0; index<prods.length;index++){
        if(prods[index].quantity!=0){
            finalprice+=prods[index].price * prods[index].quantity
        }
    }
    console.log("The total amount is $" +finalprice+ ".")
}











