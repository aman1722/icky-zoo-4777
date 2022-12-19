
let product=[
    {
        img :"https://www.jiomart.com/images/product/150x150/rvfhjtvmfd/scotch-brite-2-in-1-bucket-spin-mop-product-images-orvfhjtvmfd-p590860581-0-202111130939.jpg",
        name:"<b>Scotch-Brite 2-in-1 Bucket Spin Mop</b>",
        price:1075.00,
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rv2fef4arm/hic-floor-wiper-with-long-handle-wide-quality-rubber-strip-for-home-kitchen-bathroom-cleaning-product-images-orv2fef4arm-p591300135-0-202205140057.jpg",
        name:"HIC Floor Wiper with Long Handle",
        price: 185.00,
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvioiaqsnn/mayfair-star-spin-mop-set-for-effortless-floor-cleaning-pocha-cleaning-set-with-1-microfiber-jali-free-product-images-orvioiaqsnn-p593817459-0-202209161709.jpg",
        name:"MAYFAIR+ Star Spin Mop Set",
        price: 699.00,
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvll57d5dg/sez-6oz-180ml-black-pack-of-50-ripple-paper-disposable-coffee-cups-for-event-wedding-party-and-office-use-product-images-orvll57d5dg-p595383893-0-202211171037.jpg",
        name:"SEZ 6OZ (180ML Black) Pack Of 50",
        price:375.00,
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvjsc1rhzo/the-honest-home-company-food-wrapping-paper-oilproof-reusable-parchment-paper-for-wrapping-roti-paratha-and-sandwich-paper-9-m-product-images-orvjsc1rhzo-p591852585-0-202206021907.jpg",
        name:"The Honest Home Company Food ",
        price: 125.00,
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvkmkw8zqs/sez-12oz-360ml-brown-pack-of-50-ripple-paper-disposable-coffee-cups-for-event-wedding-party-and-office-use-product-images-orvkmkw8zqs-p595374092-0-202211162035.jpg",
        name:"SEZ 12OZ (360ML Brown)",
        price: 449.00,
    }
   
];





let pro=JSON.parse(localStorage.getItem("cart"))||[];
product.forEach(function(e){
    
 let parent = document.getElementById("card");
  let card = document.createElement("div");
  card.setAttribute("class","pro")


  let Img = document.createElement("img");
  Img.setAttribute("src",e.img);
  

  let Name = document.createElement("p");
  Name.innerHTML = e.name;

  let Price = document.createElement("h3");
//   console.log(typeof(e.price))
  Price.innerText = "₹"+" "+e.price;

  let addbtn = document.createElement("button");
  addbtn.innerText="Add To Cart +";
  addbtn.addEventListener("click",function(){

    pro.push(e)
   localStorage.setItem("cart",JSON.stringify(pro));
   alert("Product Added To Cart!")

   
let supcount = JSON.parse(localStorage.getItem("cart"))||[];
let totalsupCount=supcount.length;
let sup=document.querySelector("#cartCount").innerText=totalsupCount;
  })

  card.append(Img,Name,Price,addbtn)
  parent.append(card);
});

// let supcount = JSON.parse(localStorage.getItem("cart"))||[];
// let totalsupCount=supcount.length;
// let sup=document.querySelector("#cartCount").innerText=totalsupCount;
// window.location.reload();
